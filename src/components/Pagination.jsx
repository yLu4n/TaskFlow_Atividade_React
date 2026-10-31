export default function Pagination({ totalPages, currentPage, onPageChange }) {
  if (totalPages <= 1) return null;

  return (
    <nav className="pagination" aria-label="Paginação de tarefas">
      <button type="button" disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}>Anterior</button>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
        <button key={page} type="button" aria-label={`Página ${page}`}
          aria-current={currentPage === page ? 'page' : undefined}
          className={currentPage === page ? 'selected' : ''}
          onClick={() => onPageChange(page)}>{page}</button>
      ))}
      <button type="button" disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}>Próxima</button>
    </nav>
  );
}
