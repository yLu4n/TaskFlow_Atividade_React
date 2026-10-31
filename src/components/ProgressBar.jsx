export default function ProgressBar({ value, label = 'Progresso geral' }) {
  const progress = Math.max(0, Math.min(100, Number(value) || 0));
  return (
    <div className="progress-component">
      <div className="progress-header"><span>{label}</span><strong>{progress}%</strong></div>
      <div className="progress-track" role="progressbar" aria-label={label}
        aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
