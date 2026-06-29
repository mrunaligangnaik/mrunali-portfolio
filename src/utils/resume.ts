/**
 * Mrunali Gangnaik Resume Download Utility
 * PDF is served from /public/resume.pdf
 */

export function downloadResume() {
  const link = document.createElement("a");
  link.href = "/resume.pdf";
  link.download = "Mrunali Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}