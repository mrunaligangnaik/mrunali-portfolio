import { useEffect, useState } from "react";
import { motion } from "motion/react";
interface CodeSymbol {
  id: number;
  text: string;
  x: number;
  y: number;
  scale: number;
  duration: number;
  delay: number;
  rotation: number;
}
const SYMBOLS = [
  "</>", "{ }", "[ ]", "const", "function", "=>", "await", "MERN", "async", "import", "npm install", "db.connect()", "git push"
];
export default function CodingBackground() {
  const [symbols, setSymbols] = useState<CodeSymbol[]>([]);
  useEffect(() => {
    // Generate code symbols with random starting points, sizes, and speeds
    const generated: CodeSymbol[] = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      text: SYMBOLS[i % SYMBOLS.length],
      x: Math.random() * 100, // percentage-based width
      y: Math.random() * 100, // percentage-based height
      scale: 0.7 + Math.random() * 0.8,
      duration: 25 + Math.random() * 35,
      delay: Math.random() * -20, // negative delay so they are pre-distributed
      rotation: Math.random() * 360,
    }));
    setSymbols(generated);
  }, []);
  return (
    // Fixed overlay, painted directly on top of every section (no blend modes,
    // so the color/opacity looks the same in both light and dark mode).
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none select-none z-20"
      aria-hidden="true"
    >
      {/* Dynamic drifting symbols */}
      {symbols.map((symbol) => (
        <motion.div
          key={symbol.id}
          className="absolute font-mono text-[11px] sm:text-xs font-semibold tracking-wider text-terracotta-primary/35"
          style={{
            left: `${symbol.x}%`,
            top: `${symbol.y}%`,
          }}
          animate={{
            y: ["0vh", "-80vh", "20vh", "0vh"],
            x: ["0vw", "10vw", "-10vw", "0vw"],
            rotate: [symbol.rotation, symbol.rotation + 180, symbol.rotation + 360],
          }}
          transition={{
            duration: symbol.duration,
            repeat: Infinity,
            delay: symbol.delay,
            ease: "linear",
          }}
        >
          {symbol.text}
        </motion.div>
      ))}
      {/* Decorative large code background prints */}
      <div className="absolute top-1/4 -left-12 w-64 h-64 font-mono text-[10vw] font-bold text-terracotta-primary/8 rotate-12 leading-none">
        &lt;/&gt;
      </div>
      <div className="absolute bottom-1/4 -right-12 w-64 h-64 font-mono text-[10vw] font-bold text-terracotta-primary/8 -rotate-12 leading-none">
        &#123;&#125;
      </div>
    </div>
  );
}