import { useState } from 'react';

export default function Tabs({ items }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? null);
  const activeItem = items.find((item) => item.id === activeId);

  return (
    <div className="tabs">
      <div className="tab-list" role="tablist" aria-label="Informações do painel">
        {items.map((item) => (
          <button key={item.id} type="button" id={`tab-${item.id}`}
            role="tab" aria-selected={activeId === item.id}
            aria-controls={`tab-panel-${item.id}`} tabIndex={activeId === item.id ? 0 : -1}
            onClick={() => setActiveId(item.id)}
            onKeyDown={(event) => {
              if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
              event.preventDefault();
              const currentIndex = items.findIndex((tab) => tab.id === activeId);
              const shift = event.key === 'ArrowRight' ? 1 : -1;
              const nextIndex = (currentIndex + shift + items.length) % items.length;
              setActiveId(items[nextIndex].id);
              document.getElementById(`tab-${items[nextIndex].id}`)?.focus();
            }}>
            {item.title}
          </button>
        ))}
      </div>
      {activeItem && (
        <div className="tab-panel" role="tabpanel" id={`tab-panel-${activeItem.id}`}
          aria-labelledby={`tab-${activeItem.id}`} tabIndex={0}>
          <p>{activeItem.content}</p>
        </div>
      )}
    </div>
  );
}
