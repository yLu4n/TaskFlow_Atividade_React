import { useToast } from '../context/ToastContext.jsx';

export default function Toast() {
  const { toast, closeToast } = useToast();
  if (!toast) return null;
  return (
    <div className={`toast toast-${toast.type}`} role={toast.type === 'error' ? 'alert' : 'status'}>
      <span>{toast.message}</span>
      <button type="button" aria-label="Fechar notificação" onClick={closeToast}>×</button>
    </div>
  );
}
