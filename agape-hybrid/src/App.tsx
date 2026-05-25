import { useState } from "react";
import { squares, type Square } from "./board-data";

const legend = [
  { t: "bronze", label: "Bronze Level" },
  { t: "silver", label: "Silver Level" },
  { t: "gold", label: "Gold Level" },
  { t: "milestone", label: "Major Milestone" },
];

export default function App() {
  const [active, setActive] = useState<Square | null>(null);

  const scroll = (dir: "up" | "down") => {
    const amt = window.innerHeight * 0.7;
    window.scrollBy({ top: dir === "up" ? -amt : amt, behavior: "smooth" });
  };

  return (
    <>
      <div className="game-container">
        <header className="gc-header">
          <h1>
            🏠 Agape <span className="accent">Career Ladder</span> Journey
          </h1>
          <p className="subtitle">Your Path to Professional Growth & Success</p>
        </header>

        <div className="legend">
          {legend.map((l) => (
            <div className="legend-item" key={l.t}>
              <span className={`legend-box ${l.t}`} />
              <span>{l.label}</span>
            </div>
          ))}
        </div>

        <div className="game-board">
          {squares.map((sq, i) =>
            sq.type === "header" ? (
              <div className="level-header" key={i}>
                <div>{sq.title}</div>
                <div className="lh-sub">{sq.desc}</div>
              </div>
            ) : (
              <button
                type="button"
                className={`square ${sq.type}`}
                key={i}
                onClick={() => setActive(sq)}
                aria-label={sq.title}
              >
                <div className="square-number">{sq.number}</div>
                <div className="square-title">{sq.title}</div>
                <div className="square-desc">{sq.desc}</div>
              </button>
            )
          )}
        </div>

        <footer className="site-foot">
          © {new Date().getFullYear()} Agape Care — Compassionate Caregiving Careers
        </footer>
      </div>

      <div className="scroll-controls">
        <button className="scroll-btn" onClick={() => scroll("up")} aria-label="Scroll up">▲</button>
        <button className="scroll-btn" onClick={() => scroll("down")} aria-label="Scroll down">▼</button>
      </div>

      {active && (
        <div
          className="cl-modal"
          onClick={(e) => { if (e.target === e.currentTarget) setActive(null); }}
        >
          <div className="modal-content" role="dialog" aria-modal="true">
            <button className="cl-close" onClick={() => setActive(null)} aria-label="Close">×</button>
            <h2>{active.title}</h2>
            <p className="desc">{active.desc}</p>
            {active.criteria && (
              <>
                <h3>Requirements to Complete:</h3>
                <ul className="criteria-list">
                  {active.criteria.map((c, idx) => (
                    <li key={idx}>✓ {c}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
