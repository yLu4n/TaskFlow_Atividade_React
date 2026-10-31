import { useEffect, useRef, useState } from 'react';

export default function Dropdown({ options, selected, onSelect }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleOutside(event) {
      if (!wrapperRef.current?.contains(event.target)) setOpen(false);
    }
    function handleEscape(event) {
      if (event.key === 'Escape') setOpen(false);
    }
    document.addEventListener('pointerdown', handleOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('pointerdown', handleOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const active = options.find((option) => option.value === selected);
  return (
    <div className="dropdown" ref={wrapperRef}>
      <button className="dropdown-trigger" type="button" aria-expanded={open}
        aria-controls="dropdown-options" aria-haspopup="true" onClick={() => setOpen(!open)}>
        {active?.label ?? 'Filtrar'} <span aria-hidden="true">⌄</span>
      </button>
      {open && (
        <div className="dropdown-options" id="dropdown-options" role="group" aria-label="Filtros">
          {options.map((option) => (
            <button key={option.value} type="button" className={selected === option.value ? 'active' : ''}
              aria-pressed={selected === option.value} onClick={() => {
                onSelect(option.value);
                option.onSelect?.();
                setOpen(false);
              }}>{option.label}</button>
          ))}
        </div>
      )}
    </div>
  );
}
