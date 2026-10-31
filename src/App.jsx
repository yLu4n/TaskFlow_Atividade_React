import React, { useState, useEffect } from 'react';
import Accordion from './components/Accordion.jsx';
import Pagination from './components/Pagination.jsx';
import ProgressBar from './components/ProgressBar.jsx';
import Tabs from './components/Tabs.jsx';
import Dropdown from './components/Dropdown.jsx';
import Toast from './components/Toast.jsx';
import { ToastProvider, useToast } from './context/ToastContext.jsx';
import { faqItems, initialTasks, tabItems } from './data/sampleData.js';

const PAGE_SIZE = 4;
const filterOptions = [
  { value: 'all', label: 'Todas as tarefas' },
  { value: 'pending', label: 'Pendentes' },
  { value: 'completed', label: 'Concluídas' },
];

function Dashboard() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState('all');
  const [page, setPage] = useState(1);
  const { showToast } = useToast();

  const completed = tasks.filter((task) => task.completed).length;
  const progress = Math.round((completed / tasks.length) * 100);
  const filteredTasks = tasks.filter((task) => filter === 'all' ||
    (filter === 'completed' ? task.completed : !task.completed));
  const totalPages = Math.max(1, Math.ceil(filteredTasks.length / PAGE_SIZE));
  const visibleTasks = filteredTasks.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function changeFilter(nextFilter) {
    setFilter(nextFilter);
    setPage(1);
  }

  function toggleTask(id) {
    const target = tasks.find((task) => task.id === id);
    if (!target) return;
    setTasks((previous) => previous.map((task) => task.id === id
      ? { ...task, completed: !task.completed } : task));
    showToast(target.completed ? 'Tarefa marcada como pendente.' : 'Tarefa concluída com sucesso!', 'success');
  }

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="TaskFlow, voltar ao início">✦ <strong>TaskFlow</strong></a>
      </header>
      <main id="inicio" className="container">
        <section className="hero" aria-labelledby="page-title">
          <div><span className="eyebrow">PAINEL DE CONTROLE</span>
            <h1 id="page-title">Organize suas tarefas de forma simples.</h1>
            <p>Acompanhe seu progresso e explore os componentes interativos do React.</p>
          </div>
        </section>
        <div className="stats-grid">
          <article className="stat-card"><span>Total de tarefas</span><strong>{tasks.length}</strong></article>
          <article className="stat-card"><span>Concluídas</span><strong>{completed}</strong></article>
          <article className="stat-card"><span>Pendentes</span><strong>{tasks.length - completed}</strong></article>
        </div>
        <section className="panel" aria-labelledby="progress-title">
          <h2 id="progress-title">Seu progresso</h2>
          <p className="muted">O indicador atualiza conforme você conclui tarefas.</p>
          <ProgressBar value={progress} label="Tarefas concluídas" />
        </section>
        <section className="panel" aria-labelledby="tasks-title">
          <div className="section-heading"><div><h2 id="tasks-title">Minhas tarefas</h2>
            <p className="muted">Marque as atividades concluídas e alterne os filtros.</p></div>
            <Dropdown options={filterOptions} selected={filter} onSelect={changeFilter} />
          </div>
          <ul className="task-list">
            {visibleTasks.map((task) => <li key={task.id} className="task-item">
              <label className="task-label">
                <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
                <span className={task.completed ? 'done' : ''}>{task.title}</span>
              </label>
              <span className="category-tag">{task.category}</span>
            </li>)}
            {visibleTasks.length === 0 && <li className="empty">Nenhuma tarefa neste filtro.</li>}
          </ul>
          <Pagination totalPages={totalPages} currentPage={page} onPageChange={setPage} />
        </section>
        <div className="bottom-grid">
          <section className="panel" aria-labelledby="tabs-title"><h2 id="tabs-title">Informações</h2><Tabs items={tabItems} /></section>
          <section className="panel" aria-labelledby="faq-title"><h2 id="faq-title">Perguntas frequentes</h2><Accordion items={faqItems} /></section>
        </div>
        <section className="panel demo-panel" aria-labelledby="toast-title">
          <div><h2 id="toast-title">Teste as notificações</h2><p className="muted">As mensagens são temporárias e podem ser fechadas.</p></div>
          <div className="toast-actions">
            <button type="button" onClick={() => showToast('Operação realizada com sucesso!', 'success')}>Sucesso</button>
            <button type="button" onClick={() => showToast('Não foi possível concluir a operação.', 'error')}>Erro</button>
            <button type="button" onClick={() => showToast('Esta é uma mensagem informativa.', 'info')}>Informação</button>
          </div>
        </section>
      </main>
      <footer>TaskFlow — Projeto acadêmico em React.js</footer>
      <Toast />
    </div>
  );
}

export default function App() {
  return <ToastProvider><Dashboard /></ToastProvider>;
}
