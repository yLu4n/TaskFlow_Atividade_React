import { useState } from 'react';

export default function Accordion({ items }) {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="accordion">
      {items.map((item) => {
        const open = openId === item.id;
        const panelId = `accordion-panel-${item.id}`;
        return (
          <section className="accordion-item" key={item.id}>
            <h3>
              <button type="button" className="accordion-trigger" aria-expanded={open}
                aria-controls={panelId} onClick={() => setOpenId(open ? null : item.id)}>
                {item.title} <span aria-hidden="true">{open ? '−' : '+'}</span>
              </button>
            </h3>
            <div className={`accordion-panel ${open ? 'is-open' : ''}`} id={panelId}
              role="region" aria-hidden={!open} inert={!open ? true : undefined}>
              <div className="accordion-inner"><p>{item.content}</p></div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
