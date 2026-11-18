import { useEffect } from "react";
import Navbar from "@/components/navbar";

const skills = [
  "Python", "n8n", "Google Sheets", "Google Apps Script", "Google Drive",
  "JavaScript", "TypeScript", "React", "PostgreSQL", "GitHub",
  "API Integration", "File Processing", "Workflow Design", "Data Export",
];

const story = [
  {
    period: "FOCUS",
    text: "OutLawZ Automation builds practical tools that reduce repetitive work and keep business data organized.",
  },
  {
    period: "PROJECTS",
    text: "Examples include Python file parsing and exports, Apps Script document generation, spreadsheet workflows, and browser utilities.",
  },
  {
    period: "APPROACH",
    text: "I clarify the desired outcome, map inputs and outputs, build the agreed workflow, and provide clear setup notes.",
  },
  {
    period: "DATA CARE",
    text: "Portfolio examples use fictional or sanitized data. Each project is scoped around the client's tools and requirements.",
  },
  {
    period: "NOW",
    text: "Available for scoped automation projects through Fiverr. Share the apps involved and the repetitive task you want to simplify.",
  },
];

export default function About() {
  useEffect(() => {
    document.title = "About | OUTLAWZ LABS™";
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F0E8]" style={{ fontFamily: "'Space Mono', monospace" }}>
      <Navbar />

      {/* Header */}
      <section className="bg-black border-b-[3px] border-white py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "linear-gradient(90deg,#FF6A00 1px,transparent 1px),linear-gradient(#FF6A00 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-10 relative z-10">
          <div className="shrink-0">
            <div className="border-[3px] border-[#FF6A00] p-2 bg-black shadow-[6px_6px_0_#FF6A00]">
              <img src="/outlawz-logo.png" alt="OutLawZ logo" className="w-36 h-36 md:w-44 md:h-44 object-contain" />
            </div>
          </div>
          <div>
            <h1 className="text-6xl md:text-9xl font-bold text-white uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              ABOUT
            </h1>
            <div className="w-24 h-[3px] bg-[#FF6A00] mt-4" />
            <p className="text-gray-400 font-mono text-sm mt-4 max-w-xl">
              Practical automation for files, spreadsheets, documents, and everyday business workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6 border-b-[3px] border-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black uppercase mb-12" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            HOW I WORK
          </h2>
          <div className="space-y-0">
            {story.map((s, i) => (
              <div key={s.period} className={`flex flex-col md:flex-row border-[3px] border-black ${i > 0 ? "border-t-0" : ""}`}>
                <div className="md:w-48 bg-black text-[#FF6A00] px-6 py-6 font-bold text-sm uppercase tracking-widest flex items-center border-b-[3px] md:border-b-0 md:border-r-[3px] border-white" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  {s.period}
                </div>
                <div className="flex-1 p-6 bg-[#F5F0E8]">
                  <p className="font-mono text-sm leading-relaxed text-gray-700">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-20 px-6 border-b-[3px] border-black bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase mb-12" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            TECHNICAL STACK
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-0">
            {skills.map((skill, i) => (
              <div
                key={skill}
                className={`border-[3px] border-white px-6 py-4 font-bold uppercase text-sm hover:bg-[#FF6A00] hover:text-black hover:border-[#FF6A00] transition-colors cursor-default text-white ${
                  i % 4 !== 3 ? "border-r-0" : ""
                } ${i >= 4 ? "border-t-0" : ""}`}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-6 bg-[#FF6A00] border-b-[3px] border-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-black uppercase mb-8" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            THE PHILOSOPHY
          </h2>
          <blockquote className="border-l-[6px] border-black pl-8 text-left">
            <p className="text-xl md:text-2xl font-bold text-black leading-relaxed">
              "Every hour of manual work is a bug waiting to be fixed. I build the fix."
            </p>
            <footer className="mt-4 font-mono text-sm text-black/60">— Muhammad Nadeem</footer>
          </blockquote>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t-[3px] border-white py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-gray-500 font-mono text-xs">© 2025 OUTLAWZ LABS™ — Muhammad Nadeem</span>
        </div>
      </footer>
    </div>
  );
}
