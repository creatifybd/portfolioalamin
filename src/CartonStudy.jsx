import { f as getReact } from "./vendor.js";
const React = getReact();
const { useState } = React;

// Faces are viewports onto the original sheet: no logo or text is redrawn.
function PrintedPanel({ item, rect }) {
  const [x, y, w, h] = rect;
  return <span className="carton-print" style={{
    backgroundImage: `url("${item.src}")`,
    backgroundSize: `${10000 / w}% ${10000 / h}%`,
    backgroundPosition: `${x / (100 - w) * 100}% ${y / (100 - h) * 100}%`,
  }} />;
}
export default function CartonStudy({ items, onOpen }) {
  const [selected, setSelected] = useState(0);
  const [view, setView] = useState("angle");
  const item = items[selected] || items[0];
  const { label, size, quantity, front, side, flap } = item.carton;
  return <section id="cartons" className="presentation-chapter carton-study" aria-label="Interactive carton presentation">
    <header className="chapter-heading">
      <div><span className="eyebrow">02 / Carton studies</span><h2>From label to carton.</h2></div>
      <p>The same visual identity, carried into shipping packaging. Explore each face, then open the complete artwork.</p>
    </header>
    {items.length > 1 && <div className="carton-variants" role="group" aria-label="Carton variants">
      {items.map((entry, index) => <button key={entry.src} aria-pressed={index === selected} onClick={() => setSelected(index)}>{entry.carton.label}</button>)}
    </div>}
    <div className="carton-board" data-view={view} style={{"--carton-h": size[2] / size[0], "--carton-d": size[1] / size[0]}}>
      <span className="carton-board-label eyebrow">Packaging in perspective</span>
      <div className="carton-scene" role="img" aria-label={`${label} assembled carton preview, ${quantity}. Printed faces use the original artwork.`}>
        <div className="carton-object">
          <div className="carton-face carton-front"><PrintedPanel item={item} rect={front} /></div>
          <div className="carton-face carton-side"><PrintedPanel item={item} rect={side} /></div>
          <div className="carton-face carton-top">
            <div className="carton-flap carton-flap-back"><PrintedPanel item={item} rect={flap} /></div>
            <div className="carton-flap carton-flap-front"><PrintedPanel item={item} rect={flap} /></div>
          </div>
        </div>
      </div>
      <span className="carton-board-note">Original artwork · Three dimensional study</span>
    </div>
    <div className="carton-toolbar">
      <div className="carton-angles" role="group" aria-label="Carton viewing angle">
        {[["front", "Front"], ["angle", "Three-quarter"], ["side", "Side"]].map(([key, label]) => <button key={key} aria-pressed={view === key} onClick={() => setView(key)}>{label}</button>)}
      </div>
      <button className="carton-open" onClick={() => onOpen(item.src)}>Inspect original artwork ↗</button>
    </div>
    <div className="carton-specs" aria-live="polite">
      <h3>{label}</h3>
      <p><span>Pack configuration</span>{quantity}</p>
      <p><span>Carton dimensions</span>{size.join(" × ")} inches</p>
    </div>
  </section>;
}
