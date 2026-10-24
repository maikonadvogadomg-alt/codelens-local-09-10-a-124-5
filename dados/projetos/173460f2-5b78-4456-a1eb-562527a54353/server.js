const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meu Servidor Node.js</title>
  <style>
    body { font-family: system-ui, sans-serif; padding: 2rem; background: #0d1117; color: #e6edf3; max-width: 600px; margin: 0 auto; }
    h1 { color: #58a6ff; margin-bottom: 0.5rem; }
    p { color: #8b949e; line-height: 1.6; }
    code { background: #161b22; padding: 0.2em 0.5em; border-radius: 4px; color: #79c0ff; font-size: 0.9em; }
    .card { background: #161b22; border: 1px solid #30363d; border-radius: 8px; padding: 1rem; margin-top: 1.5rem; }
  </style>
</head>
<body>
  <h1>✅ Servidor Node.js rodando!</h1>
  <p>Servidor HTTP puro — sem dependências externas.</p>
  <div class="card">
    <p>URL acessada: <code>${req.url}</code></p>
    <p>Hora: <code>${new Date().toLocaleString('pt-BR')}</code></p>
  </div>
  <p style="margin-top:1.5rem">Edite <code>server.js</code> para personalizar o servidor.</p>
</body>
</html>`);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
