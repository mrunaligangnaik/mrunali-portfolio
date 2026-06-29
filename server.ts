import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

const PORT = 3000;
const DATA_FILE = path.join(process.cwd(), "briefs.json");

// Helper to read briefs
const readBriefs = () => {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, "utf-8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Error reading briefs file:", error);
  }
  return [];
};

// Helper to write briefs
const writeBriefs = (briefs: any[]) => {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(briefs, null, 2), "utf-8");
  } catch (error) {
    console.error("Error writing to briefs file:", error);
  }
};

async function startServer() {
  const app = express();
  app.use(express.json());

  // API Endpoints
  app.get("/api/contact", (req, res) => {
    const briefs = readBriefs();
    res.json({ success: true, data: briefs });
  });

  app.post("/api/contact", (req, res) => {
    const { fullName, email, collaborationType, message } = req.body;

    if (!fullName || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill out all required fields: name, email, and message.",
      });
    }

    const briefs = readBriefs();
    const newBrief = {
      id: Math.random().toString(36).substring(2, 9),
      fullName,
      email,
      collaborationType: collaborationType || "Internship",
      message,
      createdAt: new Date().toISOString(),
    };

    briefs.push(newBrief);
    writeBriefs(briefs);

    console.log(`[Backend] New brief received from ${fullName} (${email})`);

    res.status(201).json({
      success: true,
      message: "Your secure brief has been transmitted successfully!",
      data: newBrief,
    });
  });

  app.delete("/api/contact", (req, res) => {
    writeBriefs([]);
    res.json({ success: true, message: "All briefs cleared." });
  });

  // Vite integration
  if (process.env.NODE_ENV !== "production") {
    console.log("Setting up Vite in middleware mode (Development)");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Serving static files from /dist (Production)");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));

    // FIXED: correct wildcard route
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  // FIXED: do NOT expose 0.0.0.0 in browser
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Full-Stack Server] Running on http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
});