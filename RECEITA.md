# 🧬 Receita para recriar: Meu Projeto

_Gerada sem IA, lendo 170 arquivo(s). Serve para remontar este app como HTML modular — com qualquer IA, um arquivo por vez._

## 1. O que é

- **Nome:** Meu Projeto
- **Partes de código:** 117 (77 tela, 12 logica, 25 servidor, 1 dados, 2 estilo)
- **Tem servidor (rotas /api):** sim — veja o passo do servidor
- **Peças de fora (bibliotecas):** @codemirror/autocomplete, @codemirror/commands, @codemirror/lang-css, @codemirror/lang-html, @codemirror/lang-javascript, @codemirror/lang-json, @codemirror/lang-markdown, @codemirror/lang-python, @codemirror/lang-rust, @codemirror/lang-sql, @codemirror/language, @codemirror/state, @codemirror/theme-one-dark, @codemirror/view, @electric-sql/pglite, @google/genai, @octokit/rest, @radix-ui/react-accordion, @radix-ui/react-alert-dialog, @radix-ui/react-aspect-ratio, @radix-ui/react-avatar, @radix-ui/react-checkbox, @radix-ui/react-collapsible, @radix-ui/react-context-menu, @radix-ui/react-dialog, @radix-ui/react-dropdown-menu, @radix-ui/react-hover-card, @radix-ui/react-label, @radix-ui/react-menubar, @radix-ui/react-navigation-menu…

## 2. Estrutura modular proposta

```
index.html            ← a página; chama os módulos NA ORDEM
css/app.css           ← o visual
js/00-core.js         ← a "locomotiva": cria window.APP (registrar, guardar, avisar)
js/10-db.js           ← Banco de dados local — substitui o "@workspace/db" que ficou preso na  (era lib/db/index.ts)
js/15-server.js       ← logica (era dados/projetos/173460f2-5b78-4456-a1eb-562527a54353/server.js)
js/20-script.js       ← Seu código JavaScript aqui (era dados/projetos/3c38bdee-2fa1-4211-8670-ac4e723b9523/script.js)
js/25-api-client-react.js← Ligação da tela com o servidor — substitui o "@workspace/api-client-re (era lib/api-client-react/index.ts)
js/30-api-zod.js      ← Regras de conferência dos pedidos — substitui o "@workspace/api-zod" q (era lib/api-zod/index.ts)
js/35-abrir-pronto.js ← Usado pelo app pronto para Windows (Abrir-CodeLens.bat): liga o servid (era scripts/abrir-pronto.mjs)
js/40-iniciar.js      ← Liga o CodeLens com um comando só: 1) instala as peças na primeira vez (era scripts/iniciar.mjs)
js/45-use-file-ops.js ← logica (era src/hooks/use-file-ops.ts)
js/50-use-mobile.js   ← logica (era src/hooks/use-mobile.tsx)
js/55-utils.js        ← logica (era src/lib/utils.ts)
js/60-toast.js        ← tela (era src/components/ui/toast.tsx)
js/65-use-toast.js    ← logica (era src/hooks/use-toast.ts)
js/70-error-boundary.js← tela (era src/components/error-boundary.tsx)
js/75-toaster.js      ← tela (era src/components/ui/toaster.tsx)
js/80-theme-provider.js← tela (era src/components/theme-provider.tsx)
js/85-button.js       ← tela (era src/components/ui/button.tsx)
js/90-input.js        ← tela (era src/components/ui/input.tsx)
js/91-dialog.js       ← tela (era src/components/ui/dialog.tsx)
js/92-github-conta.js ← tela (era src/components/github-conta.tsx)
js/93-layout.js       ← tela (era src/components/layout.tsx)
js/94-label.js        ← tela (era src/components/ui/label.tsx)
js/95-alert-dialog.js ← tela (era src/components/ui/alert-dialog.tsx)
js/96-home.js         ← tela (era src/pages/home.tsx)
js/97-context-menu.js ← tela (era src/components/ui/context-menu.tsx)
js/98-dropdown-menu.js← tela (era src/components/ui/dropdown-menu.tsx)
js/98-file-tree.js    ← tela (era src/components/file-tree.tsx)
js/98-code-editor.js  ← tela (era src/components/code-editor.tsx)
js/98-code-viewer.js  ← tela (era src/components/code-viewer.tsx)
js/98-textarea.js     ← tela (era src/components/ui/textarea.tsx)
js/98-ai-panel.js     ← tela (era src/components/ai-panel.tsx)
js/98-terminal-panel.js← tela (era src/components/terminal-panel.tsx)
js/98-packages-panel.js← tela (era src/components/packages-panel.tsx)
js/98-preview-panel.js← tela (era src/components/preview-panel.tsx)
js/98-switch.js       ← tela (era src/components/ui/switch.tsx)
js/98-github-deploy-modal.js← tela (era src/components/github-deploy-modal.tsx)
js/98-git-history-modal.js← tela (era src/components/git-history-modal.tsx)
js/98-resizable.js    ← tela (era src/components/ui/resizable.tsx)
js/98-project-explorer.js← tela (era src/pages/project-explorer.tsx)
js/98-settings.js     ← tela (era src/pages/settings.tsx)
js/98-tabs.js         ← tela (era src/components/ui/tabs.tsx)
js/98-playground.js   ← tela (era src/pages/playground.tsx)
js/98-assistant.js    ← tela (era src/pages/assistant.tsx)
js/98-card.js         ← tela (era src/components/ui/card.tsx)
js/98-not-found.js    ← tela (era src/pages/not-found.tsx)
js/98-app.js          ← tela (era src/App.tsx)
js/98-vite-config.js  ← Receita da TELA (vite). Antes, a da Replit desligava sozinha sem PORT  (era vite.config.ts)
js/98-health.js       ← servidor (era server/routes/health.ts)
js/98-projects.js     ← servidor (era server/routes/projects.ts)
js/98-import-github.js← servidor (era server/routes/import-github.ts)
js/98-files.js        ← servidor (era server/routes/files.ts)
js/98-exec.js         ← servidor (era server/routes/exec.ts)
js/98-ai.js           ← servidor (era server/routes/ai.ts)
js/98-github.js       ← servidor (era server/routes/github.ts)
js/98-settings.js     ← servidor (era server/routes/settings.ts)
js/98-preview.js      ← servidor (era server/routes/preview.ts)
js/98-dev-server.js   ← servidor (era server/routes/dev-server.ts)
js/98-snippets.js     ← servidor (era server/routes/snippets.ts)
js/98-code-run.js     ← servidor (era server/routes/code-run.ts)
js/98-code-assistant.js← servidor (era server/routes/code-assistant.ts)
js/98-git.js          ← Histórico (Git) do projeto — ver versões antigas, procurar texto em to (era server/routes/git.ts)
js/98-routes.js       ← servidor (era server/routes/index.ts)
js/98-logger.js       ← servidor (era server/lib/logger.ts)
js/98-server.js       ← servidor (era server/index.ts)
js/98-devserverregistry.js← servidor (era server/lib/devServerRegistry.ts)
js/98-gemini-ponte.js ← Ponte do Gemini — chave nova "AQ." (e a antiga "AIza"). O Google troco (era server/lib/gemini-ponte.ts)
js/98-persistfiles.js ← Persistent file storage using PostgreSQL. Ensures project files surviv (era server/lib/persistFiles.ts)
js/98-shell.js        ← Terminal que funciona no Windows, no Linux, no Mac e no Termux. Antes  (era server/lib/shell.ts)
js/98-storage.js      ← servidor (era server/lib/storage.ts)
js/98-tar.js          ← Leitor de .tar, .tar.gz e .tgz sem bibliotecas (os "exports" antigos d (era server/lib/tar.ts)
js/98-tts.js          ← Voz neural da Microsoft (a mesma do Edge), grátis, precisa de internet (era server/lib/tts.ts)
js/98-3c38bdee-2fa1-4211-8670-ac4e72.js← Meu Projeto — Olá, mundo! (era dados/projetos/3c38bdee-2fa1-4211-8670-ac4e723b9523/index.html)
js/98-inicio.js       ← CodeLens (era index.html)
js/98-accordion.js    ← tela (era src/components/ui/accordion.tsx)
js/98-alert.js        ← tela (era src/components/ui/alert.tsx)
js/98-aspect-ratio.js ← tela (era src/components/ui/aspect-ratio.tsx)
js/98-avatar.js       ← tela (era src/components/ui/avatar.tsx)
js/98-badge.js        ← tela (era src/components/ui/badge.tsx)
js/98-breadcrumb.js   ← tela (era src/components/ui/breadcrumb.tsx)
js/98-separator.js    ← tela (era src/components/ui/separator.tsx)
js/98-button-group.js ← tela (era src/components/ui/button-group.tsx)
js/98-calendar.js     ← tela (era src/components/ui/calendar.tsx)
js/98-carousel.js     ← tela (era src/components/ui/carousel.tsx)
js/98-chart.js        ← tela (era src/components/ui/chart.tsx)
js/98-checkbox.js     ← tela (era src/components/ui/checkbox.tsx)
js/98-collapsible.js  ← tela (era src/components/ui/collapsible.tsx)
js/98-command.js      ← tela (era src/components/ui/command.tsx)
js/98-drawer.js       ← tela (era src/components/ui/drawer.tsx)
js/98-empty.js        ← tela (era src/components/ui/empty.tsx)
js/98-field.js        ← tela (era src/components/ui/field.tsx)
js/98-form.js         ← tela (era src/components/ui/form.tsx)
js/98-hover-card.js   ← tela (era src/components/ui/hover-card.tsx)
js/98-input-group.js  ← tela (era src/components/ui/input-group.tsx)
js/98-input-otp.js    ← tela (era src/components/ui/input-otp.tsx)
js/98-item.js         ← tela (era src/components/ui/item.tsx)
js/98-kbd.js          ← tela (era src/components/ui/kbd.tsx)
js/98-menubar.js      ← tela (era src/components/ui/menubar.tsx)
js/98-navigation-menu.js← tela (era src/components/ui/navigation-menu.tsx)
js/98-pagination.js   ← tela (era src/components/ui/pagination.tsx)
js/98-popover.js      ← tela (era src/components/ui/popover.tsx)
js/98-progress.js     ← tela (era src/components/ui/progress.tsx)
js/98-radio-group.js  ← tela (era src/components/ui/radio-group.tsx)
js/98-scroll-area.js  ← tela (era src/components/ui/scroll-area.tsx)
js/98-select.js       ← tela (era src/components/ui/select.tsx)
js/98-sheet.js        ← tela (era src/components/ui/sheet.tsx)
js/98-skeleton.js     ← tela (era src/components/ui/skeleton.tsx)
js/98-tooltip.js      ← tela (era src/components/ui/tooltip.tsx)
js/98-sidebar.js      ← tela (era src/components/ui/sidebar.tsx)
js/98-slider.js       ← tela (era src/components/ui/slider.tsx)
js/98-sonner.js       ← tela (era src/components/ui/sonner.tsx)
js/98-spinner.js      ← tela (era src/components/ui/spinner.tsx)
js/98-table.js        ← tela (era src/components/ui/table.tsx)
js/98-toggle.js       ← tela (era src/components/ui/toggle.tsx)
js/98-toggle-group.js ← tela (era src/components/ui/toggle-group.tsx)
js/99-app.js          ← o último: monta a tela com o que embarcou
```

## 3. As partes, uma por uma

| # | Era | Vira | Tipo | O que faz | Usa |
|---|---|---|---|---|---|
| 1 | `lib/db/index.ts` | `js/10-db.js` | dados | Banco de dados local — substitui o "@workspace/db" que ficou preso na Replit. Antes: Postg | — |
| 2 | `dados/projetos/173460f2-5b78-4456-a1eb-562527a54353/server.js` | `js/15-server.js` | logica | — | — |
| 3 | `dados/projetos/3c38bdee-2fa1-4211-8670-ac4e723b9523/script.js` | `js/20-script.js` | logica | Seu código JavaScript aqui | — |
| 4 | `lib/api-client-react/index.ts` | `js/25-api-client-react.js` | logica | Ligação da tela com o servidor — substitui o "@workspace/api-client-react" que ficou preso | — |
| 5 | `lib/api-zod/index.ts` | `js/30-api-zod.js` | logica | Regras de conferência dos pedidos — substitui o "@workspace/api-zod" que ficou preso na Re | — |
| 6 | `scripts/abrir-pronto.mjs` | `js/35-abrir-pronto.js` | logica | Usado pelo app pronto para Windows (Abrir-CodeLens.bat): liga o servidor com o Node que ve | — |
| 7 | `scripts/iniciar.mjs` | `js/40-iniciar.js` | logica | Liga o CodeLens com um comando só: 1) instala as peças na primeira vez (npm install) 2) mo | — |
| 8 | `src/hooks/use-file-ops.ts` | `js/45-use-file-ops.js` | logica | apiFetch, useFileOps | — |
| 9 | `src/hooks/use-mobile.tsx` | `js/50-use-mobile.js` | logica | useIsMobile, onChange | — |
| 10 | `src/lib/utils.ts` | `js/55-utils.js` | logica | formatBytes | — |
| 11 | `src/components/ui/toast.tsx` | `js/60-toast.js` | tela | — | utils.ts |
| 12 | `src/hooks/use-toast.ts` | `js/65-use-toast.js` | logica | genId, addToRemoveQueue, dispatch, toast | toast.tsx |
| 13 | `src/components/error-boundary.tsx` | `js/70-error-boundary.js` | tela | toError, DefaultFallback, ErrorBoundary | — |
| 14 | `src/components/ui/toaster.tsx` | `js/75-toaster.js` | tela | Toaster | toast.tsx, use-toast.ts |
| 15 | `src/components/theme-provider.tsx` | `js/80-theme-provider.js` | tela | ThemeProvider, useTheme | — |
| 16 | `src/components/ui/button.tsx` | `js/85-button.js` | tela | — | utils.ts |
| 17 | `src/components/ui/input.tsx` | `js/90-input.js` | tela | — | utils.ts |
| 18 | `src/components/ui/dialog.tsx` | `js/91-dialog.js` | tela | DialogHeader, DialogFooter | utils.ts |
| 19 | `src/components/github-conta.tsx` | `js/92-github-conta.js` | tela | base, api, useContaGithub, CartaoConta | button.tsx, input.tsx, dialog.tsx, use-toast.ts |
| 20 | `src/components/layout.tsx` | `js/93-layout.js` | tela | AppLayout, SideNavItem, MobileNavItem | utils.ts, use-mobile.tsx |
| 21 | `src/components/ui/label.tsx` | `js/94-label.js` | tela | — | utils.ts |
| 22 | `src/components/ui/alert-dialog.tsx` | `js/95-alert-dialog.js` | tela | AlertDialogHeader, AlertDialogFooter | button.tsx, utils.ts |
| 23 | `src/pages/home.tsx` | `js/96-home.js` | tela | projectColor, Home, handleFileSelect, handleDelete | github-conta.tsx, use-toast.ts, layout.tsx, button.tsx |
| 24 | `src/components/ui/context-menu.tsx` | `js/97-context-menu.js` | tela | ContextMenuShortcut | utils.ts |
| 25 | `src/components/ui/dropdown-menu.tsx` | `js/98-dropdown-menu.js` | tela | DropdownMenuShortcut | utils.ts |
| 26 | `src/components/file-tree.tsx` | `js/98-file-tree.js` | tela | InlineInput, FileIcon, ContextMenuItems, DropdownMenuItems | utils.ts, context-menu.tsx, dropdown-menu.tsx, use-mobile.tsx |
| 27 | `src/components/code-editor.tsx` | `js/98-code-editor.js` | tela | getLanguage, CodeEditor | — |
| 28 | `src/components/code-viewer.tsx` | `js/98-code-viewer.js` | tela | CodeViewer, ViewerBody | use-toast.ts, code-editor.tsx |
| 29 | `src/components/ui/textarea.tsx` | `js/98-textarea.js` | tela | — | utils.ts |
| 30 | `src/components/ai-panel.tsx` | `js/98-ai-panel.js` | tela | useVoice, parseAiMessage, FileChangeCard, handleApply | button.tsx, textarea.tsx, utils.ts, dropdown-menu.tsx |
| 31 | `src/components/terminal-panel.tsx` | `js/98-terminal-panel.js` | tela | useVoice, detectMissingPackage, getBase, ChunkLine | button.tsx, utils.ts |
| 32 | `src/components/packages-panel.tsx` | `js/98-packages-panel.js` | tela | detectManager, collectFileNames, formatDownloads, searchNpm | button.tsx, utils.ts |
| 33 | `src/components/preview-panel.tsx` | `js/98-preview-panel.js` | tela | PreviewPanel, init, startServer, stopServer | utils.ts |
| 34 | `src/components/ui/switch.tsx` | `js/98-switch.js` | tela | — | utils.ts |
| 35 | `src/components/github-deploy-modal.tsx` | `js/98-github-deploy-modal.js` | tela | GithubDeployModal, startSendingAnimation, stopSendingAnimation, handleSaveToken | dialog.tsx, input.tsx, button.tsx, switch.tsx |
| 36 | `src/components/git-history-modal.tsx` | `js/98-git-history-modal.js` | tela | base, api, dataBR, GitHistoryModal | dialog.tsx, button.tsx, input.tsx, use-toast.ts |
| 37 | `src/components/ui/resizable.tsx` | `js/98-resizable.js` | tela | ResizablePanelGroup, ResizableHandle | utils.ts |
| 38 | `src/pages/project-explorer.tsx` | `js/98-project-explorer.js` | tela | ProjectExplorer, triggerFileAnalysis, handleAnalyzeFileClick, handleAnalyzeFolderClick | layout.tsx, file-tree.tsx, use-file-ops.ts, code-viewer.tsx |
| 39 | `src/pages/settings.tsx` | `js/98-settings.js` | tela | detectProvider, detectProviderOption, loadProfiles, saveProfiles | layout.tsx, button.tsx, input.tsx, label.tsx |
| 40 | `src/components/ui/tabs.tsx` | `js/98-tabs.js` | tela | — | utils.ts |
| 41 | `src/pages/playground.tsx` | `js/98-playground.js` | tela | apiBase, apiFetch, App, detectMode | button.tsx, tabs.tsx, input.tsx, use-toast.ts |
| 42 | `src/pages/assistant.tsx` | `js/98-assistant.js` | tela | detectProvider, CodeBlock, RenderContent, startVoiceRecognition | button.tsx, textarea.tsx, input.tsx, label.tsx |
| 43 | `src/components/ui/card.tsx` | `js/98-card.js` | tela | — | utils.ts |
| 44 | `src/pages/not-found.tsx` | `js/98-not-found.js` | tela | NotFound | card.tsx |
| 45 | `src/App.tsx` | `js/98-app.js` | tela | App | error-boundary.tsx, toaster.tsx, theme-provider.tsx, home.tsx |
| 46 | `src/main.tsx` | css/app.css | logica | — | App.tsx |
| 47 | `vite.config.ts` | `js/98-vite-config.js` | logica | Receita da TELA (vite). Antes, a da Replit desligava sozinha sem PORT e BASE_PATH e trazia | — |
| 48 | `server/routes/health.ts` | `js/98-health.js` | servidor | — | — |
| 49 | `server/routes/projects.ts` | `js/98-projects.js` | servidor | testar, App, addDirectory | storage.js, persistFiles.js, tar.js, style.css |
| 50 | `server/routes/import-github.ts` | `js/98-import-github.js` | servidor | parseGithubUrl | storage.js, persistFiles.js |
| 51 | `server/routes/files.ts` | `js/98-files.js` | servidor | resolveProjectPath, copyRecursive | storage.js, persistFiles.js |
| 52 | `server/routes/exec.ts` | `js/98-exec.js` | servidor | detectBinPaths, tryResolve, isCommandBlocked, normalizeCommand | shell.js, devServerRegistry.js, persistFiles.js |
| 53 | `server/routes/ai.ts` | `js/98-ai.js` | servidor | buildProjectContext, collectFiles, getAiSettings, getGeminiFallback | tts.js, storage.js, persistFiles.js |
| 54 | `server/routes/github.ts` | `js/98-github.js` | servidor | collectAllFiles, tokenSalvo, contaDe, pai | storage.js |
| 55 | `server/routes/settings.ts` | `js/98-settings.js` | servidor | — | — |
| 56 | `server/routes/preview.ts` | `js/98-preview.js` | servidor | findEntryPoint, resolveProject | — |
| 57 | `server/routes/dev-server.ts` | `js/98-dev-server.js` | servidor | resolveProject, serializeBody, proxyRequest, extractSearch | devServerRegistry.js, persistFiles.js |
| 58 | `server/routes/snippets.ts` | `js/98-snippets.js` | servidor | — | — |
| 59 | `server/routes/code-run.ts` | `js/98-code-run.js` | servidor | — | — |
| 60 | `server/routes/code-assistant.ts` | `js/98-code-assistant.js` | servidor | sendChunk, sendError, sendDone | — |
| 61 | `server/routes/git.ts` | `js/98-git.js` | servidor | Histórico (Git) do projeto — ver versões antigas, procurar texto em todas as versões, ver/ | persistFiles.js |
| 62 | `server/routes/index.ts` | `js/98-routes.js` | servidor | — | health.ts, projects.ts, import-github.ts, files.ts |
| 63 | `server/lib/logger.ts` | `js/98-logger.js` | servidor | — | — |
| 64 | `server/app.ts` | css/app.css | servidor | — | index.ts, logger.ts |
| 65 | `server/index.ts` | `js/98-server.js` | servidor | — | app.ts, logger.ts |
| 66 | `server/lib/devServerRegistry.ts` | `js/98-devserverregistry.js` | servidor | detectPort, detectStartCommand, needsInstall, isAllowedCommand | shell.js |
| 67 | `server/lib/gemini-ponte.ts` | `js/98-gemini-ponte.js` | servidor | Ponte do Gemini — chave nova "AQ." (e a antiga "AIza"). O Google trocou o formato das chav | — |
| 68 | `server/lib/persistFiles.ts` | `js/98-persistfiles.js` | servidor | Persistent file storage using PostgreSQL. Ensures project files survive server restarts an | storage.js |
| 69 | `server/lib/shell.ts` | `js/98-shell.js` | servidor | Terminal que funciona no Windows, no Linux, no Mac e no Termux. Antes o código só chamava  | — |
| 70 | `server/lib/storage.ts` | `js/98-storage.js` | servidor | ensureStorageDir, getProjectDir, ensureProjectDir, deleteProjectDir | — |
| 71 | `server/lib/tar.ts` | `js/98-tar.js` | servidor | Leitor de .tar, .tar.gz e .tgz sem bibliotecas (os "exports" antigos da Replit). Devolve s | — |
| 72 | `server/lib/tts.ts` | `js/98-tts.js` | servidor | Voz neural da Microsoft (a mesma do Edge), grátis, precisa de internet. Padrão: voz Franci | — |
| 73 | `dados/projetos/3c38bdee-2fa1-4211-8670-ac4e723b9523/style.css` | css/app.css | estilo | — | — |
| 74 | `dados/projetos/3c38bdee-2fa1-4211-8670-ac4e723b9523/index.html` | `js/98-3c38bdee-2fa1-4211-8670-ac4e72.js` | tela | Meu Projeto — Olá, mundo! | style.css, script.js |
| 75 | `index.html` | `js/98-inicio.js` | tela | CodeLens | icon-192.png, manifest.json, main.tsx |
| 76 | `src/components/ui/accordion.tsx` | `js/98-accordion.js` | tela | — | utils.ts |
| 77 | `src/components/ui/alert.tsx` | `js/98-alert.js` | tela | — | utils.ts |
| 78 | `src/components/ui/aspect-ratio.tsx` | `js/98-aspect-ratio.js` | tela | — | — |
| 79 | `src/components/ui/avatar.tsx` | `js/98-avatar.js` | tela | — | utils.ts |
| 80 | `src/components/ui/badge.tsx` | `js/98-badge.js` | tela | Badge | utils.ts |
| 81 | `src/components/ui/breadcrumb.tsx` | `js/98-breadcrumb.js` | tela | BreadcrumbSeparator, BreadcrumbEllipsis | utils.ts |
| 82 | `src/components/ui/separator.tsx` | `js/98-separator.js` | tela | — | utils.ts |
| 83 | `src/components/ui/button-group.tsx` | `js/98-button-group.js` | tela | ButtonGroup, ButtonGroupText, ButtonGroupSeparator | separator.tsx, utils.ts |
| 84 | `src/components/ui/calendar.tsx` | `js/98-calendar.js` | tela | Calendar, CalendarDayButton | button.tsx, utils.ts |
| 85 | `src/components/ui/carousel.tsx` | `js/98-carousel.js` | tela | useCarousel | button.tsx, utils.ts |
| 86 | `src/components/ui/chart.tsx` | `js/98-chart.js` | tela | useChart, ChartStyle, getPayloadConfigFromPayload | utils.ts |
| 87 | `src/components/ui/checkbox.tsx` | `js/98-checkbox.js` | tela | — | utils.ts |
| 88 | `src/components/ui/collapsible.tsx` | `js/98-collapsible.js` | tela | — | — |
| 89 | `src/components/ui/command.tsx` | `js/98-command.js` | tela | CommandDialog, CommandShortcut | dialog.tsx, utils.ts |
| 90 | `src/components/ui/drawer.tsx` | `js/98-drawer.js` | tela | Drawer, DrawerHeader, DrawerFooter | utils.ts |
| 91 | `src/components/ui/empty.tsx` | `js/98-empty.js` | tela | Empty, EmptyHeader, EmptyMedia, EmptyTitle | utils.ts |
| 92 | `src/components/ui/field.tsx` | `js/98-field.js` | tela | FieldSet, FieldLegend, FieldGroup, Field | label.tsx, separator.tsx, utils.ts |
| 93 | `src/components/ui/form.tsx` | `js/98-form.js` | tela | useFormField | label.tsx, utils.ts |
| 94 | `src/components/ui/hover-card.tsx` | `js/98-hover-card.js` | tela | — | utils.ts |
| 95 | `src/components/ui/input-group.tsx` | `js/98-input-group.js` | tela | InputGroup, InputGroupAddon, InputGroupButton, InputGroupText | button.tsx, input.tsx, textarea.tsx, utils.ts |
| 96 | `src/components/ui/input-otp.tsx` | `js/98-input-otp.js` | tela | — | utils.ts |
| 97 | `src/components/ui/item.tsx` | `js/98-item.js` | tela | ItemGroup, ItemSeparator, Item, ItemMedia | separator.tsx, utils.ts |
| 98 | `src/components/ui/kbd.tsx` | `js/98-kbd.js` | tela | Kbd, KbdGroup | utils.ts |
| 99 | `src/components/ui/menubar.tsx` | `js/98-menubar.js` | tela | MenubarMenu, MenubarGroup, MenubarPortal, MenubarRadioGroup | utils.ts |
| 100 | `src/components/ui/navigation-menu.tsx` | `js/98-navigation-menu.js` | tela | — | utils.ts |
| 101 | `src/components/ui/pagination.tsx` | `js/98-pagination.js` | tela | Pagination, PaginationLink, PaginationPrevious, PaginationNext | button.tsx, utils.ts |
| 102 | `src/components/ui/popover.tsx` | `js/98-popover.js` | tela | — | utils.ts |
| 103 | `src/components/ui/progress.tsx` | `js/98-progress.js` | tela | — | utils.ts |
| 104 | `src/components/ui/radio-group.tsx` | `js/98-radio-group.js` | tela | — | utils.ts |
| 105 | `src/components/ui/scroll-area.tsx` | `js/98-scroll-area.js` | tela | — | utils.ts |
| 106 | `src/components/ui/select.tsx` | `js/98-select.js` | tela | — | utils.ts |
| 107 | `src/components/ui/sheet.tsx` | `js/98-sheet.js` | tela | SheetHeader, SheetFooter | utils.ts |
| 108 | `src/components/ui/skeleton.tsx` | `js/98-skeleton.js` | tela | Skeleton | utils.ts |
| 109 | `src/components/ui/tooltip.tsx` | `js/98-tooltip.js` | tela | — | utils.ts |
| 110 | `src/components/ui/sidebar.tsx` | `js/98-sidebar.js` | tela | useSidebar, SidebarProvider, handleKeyDown, Sidebar | button.tsx, input.tsx, separator.tsx, sheet.tsx |
| 111 | `src/components/ui/slider.tsx` | `js/98-slider.js` | tela | — | utils.ts |
| 112 | `src/components/ui/sonner.tsx` | `js/98-sonner.js` | tela | Toaster | — |
| 113 | `src/components/ui/spinner.tsx` | `js/98-spinner.js` | tela | Spinner | utils.ts |
| 114 | `src/components/ui/table.tsx` | `js/98-table.js` | tela | — | utils.ts |
| 115 | `src/components/ui/toggle.tsx` | `js/98-toggle.js` | tela | — | utils.ts |
| 116 | `src/components/ui/toggle-group.tsx` | `js/98-toggle-group.js` | tela | — | toggle.tsx, utils.ts |
| 117 | `src/index.css` | css/app.css | estilo | — | — |

## 4. Montar passo a passo (cada bloco é um pedido pronto: 📋 Copiar → colar na IA)

### Passo 0 — combinar as regras com a IA

```text
Vamos recriar o app "Meu Projeto" como HTML MODULAR, que abre pelo index.html, sem servidor e sem nada da Replit.
Regras: (1) index.html chama os arquivos js/ na ordem, antes do </body>; (2) js/00-core.js cria window.APP com APP.registrar(modulo), APP.guardar(chave, valor) em IndexedDB/localStorage e APP.avisar(texto); (3) cada arquivo js/NN-nome.js cuida de UM assunto, começa com (function (APP) { e termina com })(window.APP); (4) js/99-app.js vem por último e monta a tela com os módulos registrados; (5) textos em português do Brasil.
Vou pedir UM arquivo por vez. Responda só com o arquivo completo, sem cortar nada. Primeiro: crie index.html, css/app.css e js/00-core.js.
```

### Passo 1 — `js/10-db.js` (era `lib/db/index.ts`, 198 linhas)

```text
Crie js/10-db.js. Ele faz: Banco de dados local — substitui o "@workspace/db" que ficou preso na Replit. Antes: Postgres na nuvem (Neon), precisava de DATABASE_URL e senha. Agora: PGlite — o mesmo Postgres, só que rodando dentro do próprio Node, guardado na pasta  dados/banco  ao lado do programa. Sem internet, sem senha.
No app original ele tinha estas funções/partes: pastaDoBanco, tirarTrava, abrirComRede, fim, pega, abrirBancoSeguro, fecharBanco, reencontrarProjetos, anda.
O original usava as bibliotecas path, fs, @electric-sql/pglite, drizzle-orm: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 2 — `js/15-server.js` (era `dados/projetos/173460f2-5b78-4456-a1eb-562527a54353/server.js`, 35 linhas)

```text
Crie js/15-server.js. Ele é uma parte de logica do app.
O original usava as bibliotecas http: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 3 — `js/20-script.js` (era `dados/projetos/3c38bdee-2fa1-4211-8670-ac4e723b9523/script.js`, 3 linhas)

```text
Crie js/20-script.js. Ele faz: Seu código JavaScript aqui.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 4 — `js/25-api-client-react.js` (era `lib/api-client-react/index.ts`, 208 linhas)

```text
Crie js/25-api-client-react.js. Ele faz: Ligação da tela com o servidor — substitui o "@workspace/api-client-react" que ficou preso na Replit. Cada função aqui chama um endereço /api/.
No app original ele tinha estas funções/partes: ApiError, apiFetch, json, getListProjectsQueryKey, getGetProjectQueryKey, getGetFileContentQueryKey, getGetSettingsQueryKey, useListProjects, useGetProject, useGetFileContent, useGetSettings, useUpdateSettings, useUploadProject, useDeleteProject, useImportFromGithub, useWriteFile, useDeleteFile, useAiChat.
O original usava as bibliotecas @tanstack/react-query: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Ele chamava estes endereços: ${BASE}/api${path}. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 5 — `js/30-api-zod.js` (era `lib/api-zod/index.ts`, 60 linhas)

```text
Crie js/30-api-zod.js. Ele faz: Regras de conferência dos pedidos — substitui o "@workspace/api-zod" que ficou preso na Replit. Só confere o essencial e deixa passar o resto.
O original usava as bibliotecas zod: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 6 — `js/35-abrir-pronto.js` (era `scripts/abrir-pronto.mjs`, 32 linhas)

```text
Crie js/35-abrir-pronto.js. Ele faz: Usado pelo app pronto para Windows (Abrir-CodeLens.bat): liga o servidor com o Node que vem junto, espera ficar pronto e abre o navegador.
No app original ele tinha estas funções/partes: tick.
O original usava as bibliotecas child_process, path, http, url: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 7 — `js/40-iniciar.js` (era `scripts/iniciar.mjs`, 95 linhas)

```text
Crie js/40-iniciar.js. Ele faz: Liga o CodeLens com um comando só: 1) instala as peças na primeira vez (npm install) 2) monta a tela se ela ainda não existe ou se você mudou algo em src/.
No app original ele tinha estas funções/partes: say, fail, run, newestMtime, walk, waitUp, tick, openBrowser.
O original usava as bibliotecas child_process, fs, path, http, url: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 8 — `js/45-use-file-ops.js` (era `src/hooks/use-file-ops.ts`, 110 linhas)

```text
Crie js/45-use-file-ops.js. Ele é uma parte de logica do app.
No app original ele tinha estas funções/partes: apiFetch, useFileOps.
O original usava as bibliotecas react, @tanstack/react-query, @workspace/api-client-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Ele chamava estes endereços: ${base}/api${url}. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 9 — `js/50-use-mobile.js` (era `src/hooks/use-mobile.tsx`, 22 linhas)

```text
Crie js/50-use-mobile.js. Ele é uma parte de logica do app.
No app original ele tinha estas funções/partes: useIsMobile, onChange.
O original usava as bibliotecas react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 10 — `js/55-utils.js` (era `src/lib/utils.ts`, 16 linhas)

```text
Crie js/55-utils.js. Ele é uma parte de logica do app.
No app original ele tinha estas funções/partes: formatBytes.
O original usava as bibliotecas clsx, tailwind-merge: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 11 — `js/60-toast.js` (era `src/components/ui/toast.tsx`, 127 linhas)

```text
Crie js/60-toast.js. Ele é uma parte de tela do app.
Ele usa o que já foi criado em: js/55-utils.js (pelo APP).
O original usava as bibliotecas react, @radix-ui/react-toast, class-variance-authority, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 12 — `js/65-use-toast.js` (era `src/hooks/use-toast.ts`, 188 linhas)

```text
Crie js/65-use-toast.js. Ele é uma parte de logica do app.
No app original ele tinha estas funções/partes: genId, addToRemoveQueue, dispatch, toast, update, dismiss, useToast.
Ele usa o que já foi criado em: js/60-toast.js (pelo APP).
O original usava as bibliotecas react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 13 — `js/70-error-boundary.js` (era `src/components/error-boundary.tsx`, 107 linhas)

```text
Crie js/70-error-boundary.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: toError, DefaultFallback, ErrorBoundary.
O original usava as bibliotecas react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 14 — `js/75-toaster.js` (era `src/components/ui/toaster.tsx`, 34 linhas)

```text
Crie js/75-toaster.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: Toaster.
Ele usa o que já foi criado em: js/60-toast.js, js/65-use-toast.js (pelo APP).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 15 — `js/80-theme-provider.js` (era `src/components/theme-provider.tsx`, 72 linhas)

```text
Crie js/80-theme-provider.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: ThemeProvider, useTheme.
O original usava as bibliotecas react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 16 — `js/85-button.js` (era `src/components/ui/button.tsx`, 65 linhas)

```text
Crie js/85-button.js. Ele é uma parte de tela do app.
Ele usa o que já foi criado em: js/55-utils.js (pelo APP).
O original usava as bibliotecas react, @radix-ui/react-slot, class-variance-authority: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 17 — `js/90-input.js` (era `src/components/ui/input.tsx`, 22 linhas)

```text
Crie js/90-input.js. Ele é uma parte de tela do app.
Ele usa o que já foi criado em: js/55-utils.js (pelo APP).
O original usava as bibliotecas react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 18 — `js/91-dialog.js` (era `src/components/ui/dialog.tsx`, 120 linhas)

```text
Crie js/91-dialog.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: DialogHeader, DialogFooter.
Ele usa o que já foi criado em: js/55-utils.js (pelo APP).
O original usava as bibliotecas react, @radix-ui/react-dialog, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 19 — `js/92-github-conta.js` (era `src/components/github-conta.tsx`, 132 linhas)

```text
Crie js/92-github-conta.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: base, api, useContaGithub, CartaoConta, salvar, sair, ListaRepos, GithubEnviarModal, enviar.
Ele usa o que já foi criado em: js/85-button.js, js/90-input.js, js/91-dialog.js, js/65-use-toast.js (pelo APP).
O original usava as bibliotecas react, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 20 — `js/93-layout.js` (era `src/components/layout.tsx`, 161 linhas)

```text
Crie js/93-layout.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: AppLayout, SideNavItem, MobileNavItem.
Ele usa o que já foi criado em: js/55-utils.js, js/50-use-mobile.js (pelo APP).
O original usava as bibliotecas react, wouter, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 21 — `js/94-label.js` (era `src/components/ui/label.tsx`, 26 linhas)

```text
Crie js/94-label.js. Ele é uma parte de tela do app.
Ele usa o que já foi criado em: js/55-utils.js (pelo APP).
O original usava as bibliotecas react, @radix-ui/react-label, class-variance-authority: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 22 — `js/95-alert-dialog.js` (era `src/components/ui/alert-dialog.tsx`, 139 linhas)

```text
Crie js/95-alert-dialog.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: AlertDialogHeader, AlertDialogFooter.
Ele usa o que já foi criado em: js/85-button.js, js/55-utils.js (pelo APP).
O original usava as bibliotecas react, @radix-ui/react-alert-dialog: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 23 — `js/96-home.js` (era `src/pages/home.tsx`, 672 linhas)

```text
Crie js/96-home.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: projectColor, Home, handleFileSelect, handleDelete, confirmDelete, handleGithubImport, handleCreateBlank.
Ele usa o que já foi criado em: js/92-github-conta.js, js/65-use-toast.js, js/93-layout.js, js/85-button.js, js/91-dialog.js, js/90-input.js, js/94-label.js, js/95-alert-dialog.js, js/55-utils.js (pelo APP).
O original usava as bibliotecas react, wouter, date-fns, @workspace/api-client-react, @tanstack/react-query, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Ele chamava estes endereços: ${base}/api/projects/blank. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 24 — `js/97-context-menu.js` (era `src/components/ui/context-menu.tsx`, 198 linhas)

```text
Crie js/97-context-menu.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: ContextMenuShortcut.
Ele usa o que já foi criado em: js/55-utils.js (pelo APP).
O original usava as bibliotecas react, @radix-ui/react-context-menu, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 25 — `js/98-dropdown-menu.js` (era `src/components/ui/dropdown-menu.tsx`, 201 linhas)

```text
Crie js/98-dropdown-menu.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: DropdownMenuShortcut.
Ele usa o que já foi criado em: js/55-utils.js (pelo APP).
O original usava as bibliotecas react, @radix-ui/react-dropdown-menu, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 26 — `js/98-file-tree.js` (era `src/components/file-tree.tsx`, 389 linhas)

```text
Crie js/98-file-tree.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: InlineInput, FileIcon, ContextMenuItems, DropdownMenuItems, FileTree, parentPath, handleNewFile, handleNewFolder, confirmCreate, confirmRename, handleDelete, pasteTarget, SmallBtn.
Ele usa o que já foi criado em: js/55-utils.js, js/97-context-menu.js, js/98-dropdown-menu.js, js/50-use-mobile.js, js/45-use-file-ops.js (pelo APP).
O original usava as bibliotecas react, lucide-react, @workspace/api-client-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 27 — `js/98-code-editor.js` (era `src/components/code-editor.tsx`, 241 linhas)

```text
Crie js/98-code-editor.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: getLanguage, CodeEditor.
O original usava as bibliotecas react, @codemirror/state, @codemirror/view, @codemirror/commands, @codemirror/language, @codemirror/autocomplete, @codemirror/theme-one-dark, @codemirror/lang-javascript, @codemirror/lang-python, @codemirror/lang-html, @codemirror/lang-css, @codemirror/lang-json, @codemirror/lang-markdown, @codemirror/lang-rust, @codemirror/lang-sql: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 28 — `js/98-code-viewer.js` (era `src/components/code-viewer.tsx`, 302 linhas)

```text
Crie js/98-code-viewer.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: CodeViewer, ViewerBody.
Ele usa o que já foi criado em: js/65-use-toast.js, js/98-code-editor.js (pelo APP).
O original usava as bibliotecas react, lucide-react, @workspace/api-client-react, @tanstack/react-query, highlight.js: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 29 — `js/98-textarea.js` (era `src/components/ui/textarea.tsx`, 22 linhas)

```text
Crie js/98-textarea.js. Ele é uma parte de tela do app.
Ele usa o que já foi criado em: js/55-utils.js (pelo APP).
O original usava as bibliotecas react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 30 — `js/98-ai-panel.js` (era `src/components/ai-panel.tsx`, 1187 linhas)

```text
Crie js/98-ai-panel.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: useVoice, parseAiMessage, FileChangeCard, handleApply, ExecCommandCard, CopyButton, handleCopy, AssistantMessage, useActiveModel, update, AiPanel, startMic, changeContextMode, sendMessage, handleSubmit, handleKeyDown.
Ele usa o que já foi criado em: js/85-button.js, js/98-textarea.js, js/55-utils.js, js/98-dropdown-menu.js, js/91-dialog.js (pelo APP).
O original usava as bibliotecas react, react-markdown, remark-gfm, rehype-highlight, lucide-react, @workspace/api-client-react, @tanstack/react-query: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Ele chamava estes endereços: ${base}/api/ai/tts. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 31 — `js/98-terminal-panel.js` (era `src/components/terminal-panel.tsx`, 555 linhas)

```text
Crie js/98-terminal-panel.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: useVoice, detectMissingPackage, getBase, ChunkLine, EntryView, TerminalPanel, handleKeyDown, copyOutput.
Ele usa o que já foi criado em: js/85-button.js, js/55-utils.js (pelo APP).
O original usava as bibliotecas react, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Ele chamava estes endereços: ${getBase()}/api/projects/${projectId}/exec-stream. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 32 — `js/98-packages-panel.js` (era `src/components/packages-panel.tsx`, 537 linhas)

```text
Crie js/98-packages-panel.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: detectManager, collectFileNames, formatDownloads, searchNpm, PackagesPanel, installCmd, handleInstall.
Ele usa o que já foi criado em: js/85-button.js, js/55-utils.js (pelo APP).
O original usava as bibliotecas react, lucide-react, @workspace/api-client-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 33 — `js/98-preview-panel.js` (era `src/components/preview-panel.tsx`, 592 linhas)

```text
Crie js/98-preview-panel.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: PreviewPanel, init, startServer, stopServer, reload, IframeView, LiveEmptyState, StaticEmptyState, runInstallAndBuild.
Ele usa o que já foi criado em: js/55-utils.js (pelo APP).
O original usava as bibliotecas react, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Ele chamava estes endereços: ${base}/api/projects/${projectId}/preview/status, ${base}/api/projects/${projectId}/dev-server/status, ${base}/api/projects/${projectId}/dev-server/start, ${base}/api/projects/${projectId}/dev-server/stop. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 34 — `js/98-switch.js` (era `src/components/ui/switch.tsx`, 27 linhas)

```text
Crie js/98-switch.js. Ele é uma parte de tela do app.
Ele usa o que já foi criado em: js/55-utils.js (pelo APP).
O original usava as bibliotecas react, @radix-ui/react-switch: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 35 — `js/98-github-deploy-modal.js` (era `src/components/github-deploy-modal.tsx`, 626 linhas)

```text
Crie js/98-github-deploy-modal.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: GithubDeployModal, startSendingAnimation, stopSendingAnimation, handleSaveToken, handleSend, handleTryDifferentName.
Ele usa o que já foi criado em: js/91-dialog.js, js/90-input.js, js/85-button.js, js/98-switch.js, js/94-label.js, js/65-use-toast.js, js/55-utils.js (pelo APP).
O original usava as bibliotecas react, @workspace/api-client-react, @tanstack/react-query, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 36 — `js/98-git-history-modal.js` (era `src/components/git-history-modal.tsx`, 168 linhas)

```text
Crie js/98-git-history-modal.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: base, api, dataBR, GitHistoryModal, procurar, abrirCommit, ver, restaurar, baixar, importarBundle, linhaCommit.
Ele usa o que já foi criado em: js/91-dialog.js, js/85-button.js, js/90-input.js, js/65-use-toast.js (pelo APP).
O original usava as bibliotecas react, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 37 — `js/98-resizable.js` (era `src/components/ui/resizable.tsx`, 45 linhas)

```text
Crie js/98-resizable.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: ResizablePanelGroup, ResizableHandle.
Ele usa o que já foi criado em: js/55-utils.js (pelo APP).
O original usava as bibliotecas react-resizable-panels, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 38 — `js/98-project-explorer.js` (era `src/pages/project-explorer.tsx`, 700 linhas)

```text
Crie js/98-project-explorer.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: ProjectExplorer, triggerFileAnalysis, handleAnalyzeFileClick, handleAnalyzeFolderClick, handleSelectFile, DesktopCodePreview, MobileTabButton.
Ele usa o que já foi criado em: js/93-layout.js, js/98-file-tree.js, js/45-use-file-ops.js, js/98-code-viewer.js, js/98-ai-panel.js, js/98-terminal-panel.js, js/98-packages-panel.js, js/98-preview-panel.js, js/98-github-deploy-modal.js, js/98-git-history-modal.js, js/92-github-conta.js, js/98-resizable.js, js/85-button.js, js/65-use-toast.js, js/50-use-mobile.js, js/55-utils.js (pelo APP).
O original usava as bibliotecas react, wouter, @workspace/api-client-react, @tanstack/react-query, lucide-react, react-resizable-panels: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Ele chamava estes endereços: ${base}/api/projects/${projectId}/download. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 39 — `js/98-settings.js` (era `src/pages/settings.tsx`, 666 linhas)

```text
Crie js/98-settings.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: detectProvider, detectProviderOption, loadProfiles, saveProfiles, loadActiveSlot, PasswordInput, SettingsPage, updateCurrentProfile, handleKeyChange, handleProviderChange, handleClearProfile, handleActivate, handleSaveGithub, slotName.
Ele usa o que já foi criado em: js/93-layout.js, js/85-button.js, js/90-input.js, js/94-label.js, js/65-use-toast.js, js/55-utils.js (pelo APP).
O original usava as bibliotecas react, @workspace/api-client-react, @tanstack/react-query, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 40 — `js/98-tabs.js` (era `src/components/ui/tabs.tsx`, 53 linhas)

```text
Crie js/98-tabs.js. Ele é uma parte de tela do app.
Ele usa o que já foi criado em: js/55-utils.js (pelo APP).
O original usava as bibliotecas react, @radix-ui/react-tabs: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 41 — `js/98-playground.js` (era `src/pages/playground.tsx`, 668 linhas)

```text
Crie js/98-playground.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: apiBase, apiFetch, App, detectMode, preprocessJSX, Playground, runPython, esc, loadSnippet, handleDownload, handleFullScreen, switchMode, getEditorValue, setEditorValue, getTabIcon, PythonOutput.
Ele usa o que já foi criado em: js/85-button.js, js/98-tabs.js, js/90-input.js, js/65-use-toast.js, js/91-dialog.js (pelo APP).
O original usava as bibliotecas react, wouter, lucide-react, @tanstack/react-query: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Ele chamava estes endereços: ${apiBase()}/api${path}. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 42 — `js/98-assistant.js` (era `src/pages/assistant.tsx`, 515 linhas)

```text
Crie js/98-assistant.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: detectProvider, CodeBlock, RenderContent, startVoiceRecognition, Assistant, applyKey, saveCurrentKey, toggleVoice, exportConversation, clearHistory.
Ele usa o que já foi criado em: js/85-button.js, js/98-textarea.js, js/90-input.js, js/94-label.js, js/65-use-toast.js (pelo APP).
O original usava as bibliotecas react, lucide-react, wouter: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Ele chamava estes endereços: ${apiBase}/api/code-assistant. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 43 — `js/98-card.js` (era `src/components/ui/card.tsx`, 83 linhas)

```text
Crie js/98-card.js. Ele é uma parte de tela do app.
Ele usa o que já foi criado em: js/55-utils.js (pelo APP).
O original usava as bibliotecas react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 44 — `js/98-not-found.js` (era `src/pages/not-found.tsx`, 22 linhas)

```text
Crie js/98-not-found.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: NotFound.
Ele usa o que já foi criado em: js/98-card.js (pelo APP).
O original usava as bibliotecas lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 45 — `js/98-app.js` (era `src/App.tsx`, 43 linhas)

```text
Crie js/98-app.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: App.
Ele usa o que já foi criado em: js/70-error-boundary.js, js/75-toaster.js, js/80-theme-provider.js, js/96-home.js, js/98-project-explorer.js, js/98-settings.js, js/98-playground.js, js/98-assistant.js, js/98-not-found.js (pelo APP).
O original usava as bibliotecas @tanstack/react-query, wouter: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 46 — `js/98-vite-config.js` (era `vite.config.ts`, 27 linhas)

```text
Crie js/98-vite-config.js. Ele faz: Receita da TELA (vite). Antes, a da Replit desligava sozinha sem PORT e BASE_PATH e trazia 3 plugins da Replit. Esta não precisa de nada disso.
O original usava as bibliotecas vite, @vitejs/plugin-react, @tailwindcss/vite, path: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 47 — `js/98-health.js` (era `server/routes/health.ts`, 12 linhas)

```text
Crie js/98-health.js. Ele é uma parte de servidor do app.
O original usava as bibliotecas express, @workspace/api-zod: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
No original isto era SERVIDOR com as rotas GET /healthz. Em HTML, troque por funções que guardam no aparelho (APP.guardar) ou que chamam a IA direto.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 48 — `js/98-projects.js` (era `server/routes/projects.ts`, 531 linhas)

```text
Crie js/98-projects.js. Ele é uma parte de servidor do app.
No app original ele tinha estas funções/partes: testar, App, addDirectory.
O original usava as bibliotecas express, drizzle-orm, @workspace/db, @workspace/api-zod, multer, adm-zip, crypto, path, fs, http, vite, @vitejs/plugin-react, react, react-dom: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
No original isto era SERVIDOR com as rotas GET /projects, POST /projects, GET /, GET /api/hello, POST /projects/blank, GET /projects/:projectId, GET /projects/:projectId/download, DELETE /projects/:projectId. Em HTML, troque por funções que guardam no aparelho (APP.guardar) ou que chamam a IA direto.
Ele chamava estes endereços: /api/hello. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 49 — `js/98-import-github.js` (era `server/routes/import-github.ts`, 169 linhas)

```text
Crie js/98-import-github.js. Ele é uma parte de servidor do app.
No app original ele tinha estas funções/partes: parseGithubUrl.
O original usava as bibliotecas express, @workspace/db, @workspace/api-zod, adm-zip, crypto, path, fs: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
No original isto era SERVIDOR com as rotas POST /projects/import-github. Em HTML, troque por funções que guardam no aparelho (APP.guardar) ou que chamam a IA direto.
Ele chamava estes endereços: https://api.github.com/repos/${owner}/${repo}. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 50 — `js/98-files.js` (era `server/routes/files.ts`, 184 linhas)

```text
Crie js/98-files.js. Ele é uma parte de servidor do app.
No app original ele tinha estas funções/partes: resolveProjectPath, copyRecursive.
O original usava as bibliotecas express, drizzle-orm, @workspace/db, @workspace/api-zod, path, fs, zod: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
No original isto era SERVIDOR com as rotas GET /projects/:projectId/files, PUT /projects/:projectId/files, DELETE /projects/:projectId/files, POST /projects/:projectId/files/mkdir, PATCH /projects/:projectId/files, POST /projects/:projectId/files/copy. Em HTML, troque por funções que guardam no aparelho (APP.guardar) ou que chamam a IA direto.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 51 — `js/98-exec.js` (era `server/routes/exec.ts`, 347 linhas)

```text
Crie js/98-exec.js. Ele é uma parte de servidor do app.
No app original ele tinha estas funções/partes: detectBinPaths, tryResolve, isCommandBlocked, normalizeCommand, buildEnv, detectPort, enrichStderr, send, handleChunk.
O original usava as bibliotecas express, drizzle-orm, @workspace/db, @workspace/api-zod, path: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
No original isto era SERVIDOR com as rotas POST /projects/:projectId/exec-stream, POST /projects/:projectId/exec. Em HTML, troque por funções que guardam no aparelho (APP.guardar) ou que chamam a IA direto.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 52 — `js/98-ai.js` (era `server/routes/ai.ts`, 686 linhas)

```text
Crie js/98-ai.js. Ele é uma parte de servidor do app.
No app original ele tinha estas funções/partes: buildProjectContext, collectFiles, getAiSettings, getGeminiFallback, callGemini, callOpenAiCompatible, callAnthropic, detectProviderFromKey, getDefaultBaseUrl, getDefaultModel, callWithProvider, callAi.
O original usava as bibliotecas express, drizzle-orm, @workspace/db, @workspace/api-zod, @google/genai, path, fs: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
No original isto era SERVIDOR com as rotas POST /ai/chat, POST /ai/analyze-file, POST /ai/analyze-folder, POST /ai/tts. Em HTML, troque por funções que guardam no aparelho (APP.guardar) ou que chamam a IA direto.
Ele chamava estes endereços: https://api.anthropic.com/v1/messages. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 53 — `js/98-github.js` (era `server/routes/github.ts`, 258 linhas)

```text
Crie js/98-github.js. Ele é uma parte de servidor do app.
No app original ele tinha estas funções/partes: collectAllFiles, tokenSalvo, contaDe, pai.
O original usava as bibliotecas express, drizzle-orm, @workspace/db, @workspace/api-zod, @octokit/rest, path, fs: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
No original isto era SERVIDOR com as rotas POST /github/create-repo, GET /github/conta, POST /github/token, DELETE /github/token, GET /github/repos, POST /github/enviar. Em HTML, troque por funções que guardam no aparelho (APP.guardar) ou que chamam a IA direto.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 54 — `js/98-settings.js` (era `server/routes/settings.ts`, 78 linhas)

```text
Crie js/98-settings.js. Ele é uma parte de servidor do app.
O original usava as bibliotecas express, drizzle-orm, @workspace/db, @workspace/api-zod: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
No original isto era SERVIDOR com as rotas GET /settings, PUT /settings. Em HTML, troque por funções que guardam no aparelho (APP.guardar) ou que chamam a IA direto.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 55 — `js/98-preview.js` (era `server/routes/preview.ts`, 141 linhas)

```text
Crie js/98-preview.js. Ele é uma parte de servidor do app.
No app original ele tinha estas funções/partes: findEntryPoint, resolveProject.
O original usava as bibliotecas express, drizzle-orm, @workspace/db, path, fs, mime-types: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
No original isto era SERVIDOR com as rotas GET /projects/:projectId/preview/status, GET /projects/:projectId/preview{/*path}. Em HTML, troque por funções que guardam no aparelho (APP.guardar) ou que chamam a IA direto.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 56 — `js/98-dev-server.js` (era `server/routes/dev-server.ts`, 231 linhas)

```text
Crie js/98-dev-server.js. Ele é uma parte de servidor do app.
No app original ele tinha estas funções/partes: resolveProject, serializeBody, proxyRequest, extractSearch, connectionErrorHtml.
O original usava as bibliotecas express, drizzle-orm, @workspace/db, http: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
No original isto era SERVIDOR com as rotas POST /projects/:projectId/dev-server/start, DELETE /projects/:projectId/dev-server/stop, GET /projects/:projectId/dev-server/status. Em HTML, troque por funções que guardam no aparelho (APP.guardar) ou que chamam a IA direto.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 57 — `js/98-snippets.js` (era `server/routes/snippets.ts`, 67 linhas)

```text
Crie js/98-snippets.js. Ele é uma parte de servidor do app.
O original usava as bibliotecas express, drizzle-orm, @workspace/db: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
No original isto era SERVIDOR com as rotas GET /snippets, POST /snippets, PATCH /snippets/:id, DELETE /snippets/:id. Em HTML, troque por funções que guardam no aparelho (APP.guardar) ou que chamam a IA direto.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 58 — `js/98-code-run.js` (era `server/routes/code-run.ts`, 47 linhas)

```text
Crie js/98-code-run.js. Ele é uma parte de servidor do app.
O original usava as bibliotecas express, child_process, os, path, fs: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
No original isto era SERVIDOR com as rotas POST /code/run. Em HTML, troque por funções que guardam no aparelho (APP.guardar) ou que chamam a IA direto.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 59 — `js/98-code-assistant.js` (era `server/routes/code-assistant.ts`, 162 linhas)

```text
Crie js/98-code-assistant.js. Ele é uma parte de servidor do app.
No app original ele tinha estas funções/partes: sendChunk, sendError, sendDone.
O original usava as bibliotecas express: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
No original isto era SERVIDOR com as rotas POST /code-assistant. Em HTML, troque por funções que guardam no aparelho (APP.guardar) ou que chamam a IA direto.
Ele chamava estes endereços: ${effectiveUrl}/chat/completions. Em HTML, ligue cada um à função equivalente do módulo certo.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 60 — `js/98-git.js` (era `server/routes/git.ts`, 215 linhas)

```text
Crie js/98-git.js. Ele faz: Histórico (Git) do projeto — ver versões antigas, procurar texto em todas as versões, ver/restaurar um arquivo como era e baixar uma versão inteira. Usa o programa "git" instalado no computador (sem shell: argumentos separados, nada é interpretado pelo terminal).
No app original ele tinha estas funções/partes: git, pastaDoProjeto, caminhoSeguro, erro, ehRepo, lerCommits.
O original usava as bibliotecas express, drizzle-orm, @workspace/db, child_process, multer, path, os, fs, crypto: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
No original isto era SERVIDOR com as rotas GET /projects/:projectId/git/info, GET /projects/:projectId/git/log, GET /projects/:projectId/git/procurar, GET /projects/:projectId/git/mudancas, GET /projects/:projectId/git/arquivos, GET /projects/:projectId/git/ver, GET /projects/:projectId/git/diferencas, POST /projects/:projectId/git/restaurar, GET /projects/:projectId/git/zip, GET /projects/:projectId/git/relatorio, POST /projects/:projectId/git/importar-bundle. Em HTML, troque por funções que guardam no aparelho (APP.guardar) ou que chamam a IA direto.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 61 — `js/98-routes.js` (era `server/routes/index.ts`, 35 linhas)

```text
Crie js/98-routes.js. Ele é uma parte de servidor do app.
Ele usa o que já foi criado em: js/98-health.js, js/98-projects.js, js/98-import-github.js, js/98-files.js, js/98-exec.js, js/98-ai.js, js/98-github.js, js/98-settings.js, js/98-preview.js, js/98-dev-server.js, js/98-snippets.js, js/98-code-run.js, js/98-code-assistant.js, js/98-git.js (pelo APP).
O original usava as bibliotecas express: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 62 — `js/98-logger.js` (era `server/lib/logger.ts`, 25 linhas)

```text
Crie js/98-logger.js. Ele é uma parte de servidor do app.
O original usava as bibliotecas pino, module: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 63 — `js/98-server.js` (era `server/index.ts`, 21 linhas)

```text
Crie js/98-server.js. Ele é uma parte de servidor do app.
Ele usa o que já foi criado em: js/98-logger.js (pelo APP).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 64 — `js/98-devserverregistry.js` (era `server/lib/devServerRegistry.ts`, 350 linhas)

```text
Crie js/98-devserverregistry.js. Ele é uma parte de servidor do app.
No app original ele tinha estas funções/partes: detectPort, detectStartCommand, needsInstall, isAllowedCommand, buildCleanEnv, spawnInProject, killProcessGroup, isPortFree, waitForPortFree, startDevServer, attachListeners, handleOutput, launchServer, stopDevServer, getDevServer, registerTerminalProcess, listDevServers.
O original usava as bibliotecas child_process, path, fs, net: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 65 — `js/98-gemini-ponte.js` (era `server/lib/gemini-ponte.ts`, 139 linhas)

```text
Crie js/98-gemini-ponte.js. Ele faz: Ponte do Gemini — chave nova "AQ." (e a antiga "AIza"). O Google trocou o formato das chaves (2026): as novas começam com "AQ." e são RECUSADAS no caminho "compatível com OpenAI" (…/v1beta/openai/…) quando vão como "Authorization: Bearer". No caminho próprio do Gemini elas funcionam.
No app original ele tinha estas funções/partes: partes, corpoNativo, erroOpenAI, chat, pedaco, modelos.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 66 — `js/98-persistfiles.js` (era `server/lib/persistFiles.ts`, 143 linhas)

```text
Crie js/98-persistfiles.js. Ele faz: Persistent file storage using PostgreSQL. Ensures project files survive server restarts and redeployments.
No app original ele tinha estas funções/partes: dbSaveFile, dbDeleteFile, dbDeleteAllFiles, restoreProjectFromDb, ensureProjectOnDisk, dbSaveDirectoryTree, walk.
O original usava as bibliotecas @workspace/db, drizzle-orm, fs, path: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 67 — `js/98-shell.js` (era `server/lib/shell.ts`, 49 linhas)

```text
Crie js/98-shell.js. Ele faz: Terminal que funciona no Windows, no Linux, no Mac e no Termux. Antes o código só chamava "sh", que não existe no Windows.
No app original ele tinha estas funções/partes: spawnShell, whichDir, killTree, freePort.
O original usava as bibliotecas child_process: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 68 — `js/98-storage.js` (era `server/lib/storage.ts`, 161 linhas)

```text
Crie js/98-storage.js. Ele é uma parte de servidor do app.
No app original ele tinha estas funções/partes: ensureStorageDir, getProjectDir, ensureProjectDir, deleteProjectDir, buildFileTree, countFiles, walk, detectLanguage, isBinaryFile.
O original usava as bibliotecas path, fs, @workspace/db: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 69 — `js/98-tar.js` (era `server/lib/tar.ts`, 50 linhas)

```text
Crie js/98-tar.js. Ele faz: Leitor de .tar, .tar.gz e .tgz sem bibliotecas (os "exports" antigos da Replit). Devolve só arquivos comuns; pastas, atalhos e links são ignorados.
No app original ele tinha estas funções/partes: oct, texto, ehTarOuGz, lerTar.
O original usava as bibliotecas zlib: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 70 — `js/98-tts.js` (era `server/lib/tts.ts`, 87 linhas)

```text
Crie js/98-tts.js. Ele faz: Voz neural da Microsoft (a mesma do Edge), grátis, precisa de internet. Padrão: voz Francisco, velocidade 1,15, tom 5% mais grave — dá para trocar no .env: TTS_VOZ=pt-BR-FranciscoNeural   (ou pt-BR-FranciscaNeural, pt-BR-AntonioNeural…) TTS_VELOCIDADE=1.15.
No app original ele tinha estas funções/partes: VOZ, VELOCIDADE, TOM, pedacos, umPedacoNode, umPedacoPython, edgeTts.
O original usava as bibliotecas os, path, fs, child_process, util, msedge-tts: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 71 — `js/98-3c38bdee-2fa1-4211-8670-ac4e72.js` (era `dados/projetos/3c38bdee-2fa1-4211-8670-ac4e723b9523/index.html`, 15 linhas)

```text
Crie js/98-3c38bdee-2fa1-4211-8670-ac4e72.js. Ele faz: Meu Projeto — Olá, mundo!.
Ele usa o que já foi criado em: js/20-script.js (pelo APP).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 72 — `js/98-inicio.js` (era `index.html`, 17 linhas)

```text
Crie js/98-inicio.js. Ele faz: CodeLens.
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 73 — `js/98-accordion.js` (era `src/components/ui/accordion.tsx`, 55 linhas)

```text
Crie js/98-accordion.js. Ele é uma parte de tela do app.
Ele usa o que já foi criado em: js/55-utils.js (pelo APP).
O original usava as bibliotecas react, @radix-ui/react-accordion, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 74 — `js/98-alert.js` (era `src/components/ui/alert.tsx`, 59 linhas)

```text
Crie js/98-alert.js. Ele é uma parte de tela do app.
Ele usa o que já foi criado em: js/55-utils.js (pelo APP).
O original usava as bibliotecas react, class-variance-authority: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 75 — `js/98-aspect-ratio.js` (era `src/components/ui/aspect-ratio.tsx`, 6 linhas)

```text
Crie js/98-aspect-ratio.js. Ele é uma parte de tela do app.
O original usava as bibliotecas @radix-ui/react-aspect-ratio: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 76 — `js/98-avatar.js` (era `src/components/ui/avatar.tsx`, 50 linhas)

```text
Crie js/98-avatar.js. Ele é uma parte de tela do app.
Ele usa o que já foi criado em: js/55-utils.js (pelo APP).
O original usava as bibliotecas react, @radix-ui/react-avatar: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 77 — `js/98-badge.js` (era `src/components/ui/badge.tsx`, 43 linhas)

```text
Crie js/98-badge.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: Badge.
Ele usa o que já foi criado em: js/55-utils.js (pelo APP).
O original usava as bibliotecas react, class-variance-authority: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 78 — `js/98-breadcrumb.js` (era `src/components/ui/breadcrumb.tsx`, 115 linhas)

```text
Crie js/98-breadcrumb.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: BreadcrumbSeparator, BreadcrumbEllipsis.
Ele usa o que já foi criado em: js/55-utils.js (pelo APP).
O original usava as bibliotecas react, @radix-ui/react-slot, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 79 — `js/98-separator.js` (era `src/components/ui/separator.tsx`, 29 linhas)

```text
Crie js/98-separator.js. Ele é uma parte de tela do app.
Ele usa o que já foi criado em: js/55-utils.js (pelo APP).
O original usava as bibliotecas react, @radix-ui/react-separator: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 80 — `js/98-button-group.js` (era `src/components/ui/button-group.tsx`, 83 linhas)

```text
Crie js/98-button-group.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: ButtonGroup, ButtonGroupText, ButtonGroupSeparator.
Ele usa o que já foi criado em: js/98-separator.js, js/55-utils.js (pelo APP).
O original usava as bibliotecas @radix-ui/react-slot, class-variance-authority: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 81 — `js/98-calendar.js` (era `src/components/ui/calendar.tsx`, 213 linhas)

```text
Crie js/98-calendar.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: Calendar, CalendarDayButton.
Ele usa o que já foi criado em: js/85-button.js, js/55-utils.js (pelo APP).
O original usava as bibliotecas react, react-day-picker, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 82 — `js/98-carousel.js` (era `src/components/ui/carousel.tsx`, 260 linhas)

```text
Crie js/98-carousel.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: useCarousel.
Ele usa o que já foi criado em: js/85-button.js, js/55-utils.js (pelo APP).
O original usava as bibliotecas react, embla-carousel-react, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 83 — `js/98-chart.js` (era `src/components/ui/chart.tsx`, 367 linhas)

```text
Crie js/98-chart.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: useChart, ChartStyle, getPayloadConfigFromPayload.
Ele usa o que já foi criado em: js/55-utils.js (pelo APP).
O original usava as bibliotecas react, recharts: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 84 — `js/98-checkbox.js` (era `src/components/ui/checkbox.tsx`, 28 linhas)

```text
Crie js/98-checkbox.js. Ele é uma parte de tela do app.
Ele usa o que já foi criado em: js/55-utils.js (pelo APP).
O original usava as bibliotecas react, @radix-ui/react-checkbox, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 85 — `js/98-collapsible.js` (era `src/components/ui/collapsible.tsx`, 12 linhas)

```text
Crie js/98-collapsible.js. Ele é uma parte de tela do app.
O original usava as bibliotecas @radix-ui/react-collapsible: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 86 — `js/98-command.js` (era `src/components/ui/command.tsx`, 153 linhas)

```text
Crie js/98-command.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: CommandDialog, CommandShortcut.
Ele usa o que já foi criado em: js/91-dialog.js, js/55-utils.js (pelo APP).
O original usava as bibliotecas react, @radix-ui/react-dialog, cmdk, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 87 — `js/98-drawer.js` (era `src/components/ui/drawer.tsx`, 116 linhas)

```text
Crie js/98-drawer.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: Drawer, DrawerHeader, DrawerFooter.
Ele usa o que já foi criado em: js/55-utils.js (pelo APP).
O original usava as bibliotecas react, vaul: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 88 — `js/98-empty.js` (era `src/components/ui/empty.tsx`, 104 linhas)

```text
Crie js/98-empty.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription, EmptyContent.
Ele usa o que já foi criado em: js/55-utils.js (pelo APP).
O original usava as bibliotecas class-variance-authority: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 89 — `js/98-field.js` (era `src/components/ui/field.tsx`, 244 linhas)

```text
Crie js/98-field.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: FieldSet, FieldLegend, FieldGroup, Field, FieldContent, FieldLabel, FieldTitle, FieldDescription, FieldSeparator, FieldError.
Ele usa o que já foi criado em: js/94-label.js, js/98-separator.js, js/55-utils.js (pelo APP).
O original usava as bibliotecas react, class-variance-authority: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 90 — `js/98-form.js` (era `src/components/ui/form.tsx`, 179 linhas)

```text
Crie js/98-form.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: useFormField.
Ele usa o que já foi criado em: js/94-label.js, js/55-utils.js (pelo APP).
O original usava as bibliotecas react, @radix-ui/react-label, @radix-ui/react-slot, react-hook-form: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 91 — `js/98-hover-card.js` (era `src/components/ui/hover-card.tsx`, 27 linhas)

```text
Crie js/98-hover-card.js. Ele é uma parte de tela do app.
Ele usa o que já foi criado em: js/55-utils.js (pelo APP).
O original usava as bibliotecas react, @radix-ui/react-hover-card: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 92 — `js/98-input-group.js` (era `src/components/ui/input-group.tsx`, 168 linhas)

```text
Crie js/98-input-group.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: InputGroup, InputGroupAddon, InputGroupButton, InputGroupText, InputGroupInput, InputGroupTextarea.
Ele usa o que já foi criado em: js/85-button.js, js/90-input.js, js/98-textarea.js, js/55-utils.js (pelo APP).
O original usava as bibliotecas react, class-variance-authority: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 93 — `js/98-input-otp.js` (era `src/components/ui/input-otp.tsx`, 69 linhas)

```text
Crie js/98-input-otp.js. Ele é uma parte de tela do app.
Ele usa o que já foi criado em: js/55-utils.js (pelo APP).
O original usava as bibliotecas react, input-otp, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 94 — `js/98-item.js` (era `src/components/ui/item.tsx`, 193 linhas)

```text
Crie js/98-item.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: ItemGroup, ItemSeparator, Item, ItemMedia, ItemContent, ItemTitle, ItemDescription, ItemActions, ItemHeader, ItemFooter.
Ele usa o que já foi criado em: js/98-separator.js, js/55-utils.js (pelo APP).
O original usava as bibliotecas react, @radix-ui/react-slot, class-variance-authority: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 95 — `js/98-kbd.js` (era `src/components/ui/kbd.tsx`, 29 linhas)

```text
Crie js/98-kbd.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: Kbd, KbdGroup.
Ele usa o que já foi criado em: js/55-utils.js (pelo APP).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 96 — `js/98-menubar.js` (era `src/components/ui/menubar.tsx`, 254 linhas)

```text
Crie js/98-menubar.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: MenubarMenu, MenubarGroup, MenubarPortal, MenubarRadioGroup, MenubarSub, MenubarShortcut.
Ele usa o que já foi criado em: js/55-utils.js (pelo APP).
O original usava as bibliotecas react, @radix-ui/react-menubar, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 97 — `js/98-navigation-menu.js` (era `src/components/ui/navigation-menu.tsx`, 128 linhas)

```text
Crie js/98-navigation-menu.js. Ele é uma parte de tela do app.
Ele usa o que já foi criado em: js/55-utils.js (pelo APP).
O original usava as bibliotecas react, @radix-ui/react-navigation-menu, class-variance-authority, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 98 — `js/98-pagination.js` (era `src/components/ui/pagination.tsx`, 117 linhas)

```text
Crie js/98-pagination.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: Pagination, PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis.
Ele usa o que já foi criado em: js/85-button.js, js/55-utils.js (pelo APP).
O original usava as bibliotecas react, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 99 — `js/98-popover.js` (era `src/components/ui/popover.tsx`, 31 linhas)

```text
Crie js/98-popover.js. Ele é uma parte de tela do app.
Ele usa o que já foi criado em: js/55-utils.js (pelo APP).
O original usava as bibliotecas react, @radix-ui/react-popover: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 100 — `js/98-progress.js` (era `src/components/ui/progress.tsx`, 28 linhas)

```text
Crie js/98-progress.js. Ele é uma parte de tela do app.
Ele usa o que já foi criado em: js/55-utils.js (pelo APP).
O original usava as bibliotecas react, @radix-ui/react-progress: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 101 — `js/98-radio-group.js` (era `src/components/ui/radio-group.tsx`, 42 linhas)

```text
Crie js/98-radio-group.js. Ele é uma parte de tela do app.
Ele usa o que já foi criado em: js/55-utils.js (pelo APP).
O original usava as bibliotecas react, @radix-ui/react-radio-group, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 102 — `js/98-scroll-area.js` (era `src/components/ui/scroll-area.tsx`, 46 linhas)

```text
Crie js/98-scroll-area.js. Ele é uma parte de tela do app.
Ele usa o que já foi criado em: js/55-utils.js (pelo APP).
O original usava as bibliotecas react, @radix-ui/react-scroll-area: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 103 — `js/98-select.js` (era `src/components/ui/select.tsx`, 159 linhas)

```text
Crie js/98-select.js. Ele é uma parte de tela do app.
Ele usa o que já foi criado em: js/55-utils.js (pelo APP).
O original usava as bibliotecas react, @radix-ui/react-select, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 104 — `js/98-sheet.js` (era `src/components/ui/sheet.tsx`, 140 linhas)

```text
Crie js/98-sheet.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: SheetHeader, SheetFooter.
Ele usa o que já foi criado em: js/55-utils.js (pelo APP).
O original usava as bibliotecas react, @radix-ui/react-dialog, class-variance-authority, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 105 — `js/98-skeleton.js` (era `src/components/ui/skeleton.tsx`, 16 linhas)

```text
Crie js/98-skeleton.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: Skeleton.
Ele usa o que já foi criado em: js/55-utils.js (pelo APP).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 106 — `js/98-tooltip.js` (era `src/components/ui/tooltip.tsx`, 32 linhas)

```text
Crie js/98-tooltip.js. Ele é uma parte de tela do app.
Ele usa o que já foi criado em: js/55-utils.js (pelo APP).
O original usava as bibliotecas react, @radix-ui/react-tooltip: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 107 — `js/98-sidebar.js` (era `src/components/ui/sidebar.tsx`, 727 linhas)

```text
Crie js/98-sidebar.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: useSidebar, SidebarProvider, handleKeyDown, Sidebar, SidebarTrigger, SidebarRail, SidebarInset, SidebarInput, SidebarHeader, SidebarFooter, SidebarSeparator, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarGroupAction, SidebarGroupContent, SidebarMenu, SidebarMenuItem.
Ele usa o que já foi criado em: js/85-button.js, js/90-input.js, js/98-separator.js, js/98-sheet.js, js/98-skeleton.js, js/98-tooltip.js, js/50-use-mobile.js, js/55-utils.js (pelo APP).
O original usava as bibliotecas react, @radix-ui/react-slot, class-variance-authority, lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 108 — `js/98-slider.js` (era `src/components/ui/slider.tsx`, 26 linhas)

```text
Crie js/98-slider.js. Ele é uma parte de tela do app.
Ele usa o que já foi criado em: js/55-utils.js (pelo APP).
O original usava as bibliotecas react, @radix-ui/react-slider: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 109 — `js/98-sonner.js` (era `src/components/ui/sonner.tsx`, 32 linhas)

```text
Crie js/98-sonner.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: Toaster.
O original usava as bibliotecas next-themes, sonner: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 110 — `js/98-spinner.js` (era `src/components/ui/spinner.tsx`, 16 linhas)

```text
Crie js/98-spinner.js. Ele é uma parte de tela do app.
No app original ele tinha estas funções/partes: Spinner.
Ele usa o que já foi criado em: js/55-utils.js (pelo APP).
O original usava as bibliotecas lucide-react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 111 — `js/98-table.js` (era `src/components/ui/table.tsx`, 120 linhas)

```text
Crie js/98-table.js. Ele é uma parte de tela do app.
Ele usa o que já foi criado em: js/55-utils.js (pelo APP).
O original usava as bibliotecas react: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 112 — `js/98-toggle.js` (era `src/components/ui/toggle.tsx`, 43 linhas)

```text
Crie js/98-toggle.js. Ele é uma parte de tela do app.
Ele usa o que já foi criado em: js/55-utils.js (pelo APP).
O original usava as bibliotecas react, @radix-ui/react-toggle, class-variance-authority: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 113 — `js/98-toggle-group.js` (era `src/components/ui/toggle-group.tsx`, 61 linhas)

```text
Crie js/98-toggle-group.js. Ele é uma parte de tela do app.
Ele usa o que já foi criado em: js/98-toggle.js, js/55-utils.js (pelo APP).
O original usava as bibliotecas react, @radix-ui/react-toggle-group, class-variance-authority: em HTML puro, use a versão de CDN (ou faça sem ela, se for simples).
Registre com APP.registrar({ nome, icone, abrir }). Devolva só o arquivo completo.
```

### Passo 114 — `js/99-app.js` e conferir

```text
Crie js/99-app.js: ele olha APP.modulos e monta o menu/abas com um botão para cada módulo. Depois, me mande o index.html atualizado com todos os <script src="js/…"> na ordem certa: js/00-core.js, js/10-db.js, js/15-server.js, js/20-script.js, js/25-api-client-react.js, js/30-api-zod.js, js/35-abrir-pronto.js, js/40-iniciar.js, js/45-use-file-ops.js, js/50-use-mobile.js, js/55-utils.js, js/60-toast.js, js/65-use-toast.js, js/70-error-boundary.js, js/75-toaster.js, js/80-theme-provider.js, js/85-button.js, js/90-input.js, js/91-dialog.js, js/92-github-conta.js, js/93-layout.js, js/94-label.js, js/95-alert-dialog.js, js/96-home.js, js/97-context-menu.js, js/98-dropdown-menu.js, js/98-file-tree.js, js/98-code-editor.js, js/98-code-viewer.js, js/98-textarea.js, js/98-ai-panel.js, js/98-terminal-panel.js, js/98-packages-panel.js, js/98-preview-panel.js, js/98-switch.js, js/98-github-deploy-modal.js, js/98-git-history-modal.js, js/98-resizable.js, js/98-project-explorer.js, js/98-settings.js, js/98-tabs.js, js/98-playground.js, js/98-assistant.js, js/98-card.js, js/98-not-found.js, js/98-app.js, js/98-vite-config.js, js/98-health.js, js/98-projects.js, js/98-import-github.js, js/98-files.js, js/98-exec.js, js/98-ai.js, js/98-github.js, js/98-settings.js, js/98-preview.js, js/98-dev-server.js, js/98-snippets.js, js/98-code-run.js, js/98-code-assistant.js, js/98-git.js, js/98-routes.js, js/98-logger.js, js/98-server.js, js/98-devserverregistry.js, js/98-gemini-ponte.js, js/98-persistfiles.js, js/98-shell.js, js/98-storage.js, js/98-tar.js, js/98-tts.js, js/98-3c38bdee-2fa1-4211-8670-ac4e72.js, js/98-inicio.js, js/98-accordion.js, js/98-alert.js, js/98-aspect-ratio.js, js/98-avatar.js, js/98-badge.js, js/98-breadcrumb.js, js/98-separator.js, js/98-button-group.js, js/98-calendar.js, js/98-carousel.js, js/98-chart.js, js/98-checkbox.js, js/98-collapsible.js, js/98-command.js, js/98-drawer.js, js/98-empty.js, js/98-field.js, js/98-form.js, js/98-hover-card.js, js/98-input-group.js, js/98-input-otp.js, js/98-item.js, js/98-kbd.js, js/98-menubar.js, js/98-navigation-menu.js, js/98-pagination.js, js/98-popover.js, js/98-progress.js, js/98-radio-group.js, js/98-scroll-area.js, js/98-select.js, js/98-sheet.js, js/98-skeleton.js, js/98-tooltip.js, js/98-sidebar.js, js/98-slider.js, js/98-sonner.js, js/98-spinner.js, js/98-table.js, js/98-toggle.js, js/98-toggle-group.js, js/99-app.js.
```

## 5. Conferir no final

- [ ] Abrir o index.html na prévia: aparece a tela sem erro (▤ console vazio)?
- [ ] Cada botão abre a sua parte?
- [ ] Fechar e abrir de novo: os dados continuam?
- [ ] Nada com "replit", "REPL_", "@workspace" no código (🏗️ Preparar confere).
- [ ] 📱 PWA → deixar instalável; 📦 APK ou 🖥️ .exe.
