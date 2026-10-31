# TaskFlow — Atividade React.js

Aplicação didática com seis componentes obrigatórios: Accordion, Pagination, ProgressBar, Tabs, Dropdown e Toast. **Desafio extra:** Context API para compartilhar notificações entre componentes.

## Abrindo no GitHub Codespaces (ambiente obrigatório)

1. Crie **seu próprio repositório** no GitHub e envie os arquivos deste projeto (não envie a pasta `node_modules`).
2. Abra o repositório no GitHub e escolha **Code → Codespaces → Create codespace on main**.
3. Abra o terminal do Codespaces e execute:
   ```bash
   npm install
   npm run dev
   ```
4. Na aba **Ports**, abra a porta 5173 para ver o site.
5. Para testar o build: `npm run build`.

## Onde cada requisito aparece

| Requisito | Arquivo | Demonstração |
|---|---|---|
| Acordeão | `src/components/Accordion.jsx` | Abrir e fechar perguntas; somente uma aberta |
| Paginação | `src/components/Pagination.jsx` | Páginas numéricas, anterior/próxima e botões desativados |
| Barra de progresso | `src/components/ProgressBar.jsx` | Marcar uma tarefa e observar a barra aumentar |
| Abas | `src/components/Tabs.jsx` | Alternar conteúdos usando títulos e teclado |
| Menu suspenso | `src/components/Dropdown.jsx` | Filtrar tarefas; fechar ao selecionar ou clicar fora |
| Toast | `src/components/Toast.jsx` e `src/context/ToastContext.jsx` | Três tipos, encerramento automático e manual |
| Principal App.js | `src/App.js` | Orquestração, props e estado das tarefas |
| Responsividade | `src/styles.css` | Testes em mobile, tablet e desktop |
| Estado global (extra) | `src/context/ToastContext.jsx` | Context API compartilhando funções de notificação |

## Conceitos para explicar no vídeo

- **Props**: dados enviados por App.js para `ProgressBar`, `Pagination`, `Tabs`, `Dropdown` e `Accordion`.
- **useState**: controla tarefas, filtro, página, item expandido, aba ativa, dropdown e toast.
- **useEffect**: controla o temporizador do Toast e os eventos de clique externo/Escape do Dropdown.
- **Context API**: `ToastProvider` fornece `showToast` e `closeToast` a componentes sem encadear props.
- **Eventos**: `onClick`, `onChange`, `onKeyDown`.
- **Acessibilidade**: `main`, `header`, `nav`, `section`, `aria-expanded`, `aria-current`, `aria-selected`, `role=progressbar`.

## Roteiro recomendado para o vídeo

1. Apresente a proposta do TaskFlow e a estrutura das pastas.
2. Demonstre a lista, a paginação e as opções de filtro.
3. Marque e desmarque tarefas; destaque a barra atualizada e o Toast.
4. Explore as abas, o acordeão e os três tipos de Toast.
5. Redimensione a tela e demonstre layouts em smartphone, tablet e desktop.
6. No código, explique os seis componentes, `App.js`, props/state/hooks, a Context API e CSS responsivo.

O trabalho é individual. Leia, personalize e entenda o projeto antes da entrega e grave o próprio vídeo explicativo.
