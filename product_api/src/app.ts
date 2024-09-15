import { createServer, IncomingMessage, ServerResponse } from "http";

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  // Configurar o cabeçalho de resposta para JSON
  res.setHeader("Content-Type", "application/json");

  // Roteamento simples baseado no método e na URL
  if (req.method === "GET" && req.url === "/products") {
    res.writeHead(200);
    res.end(JSON.stringify({ message: "Products api" }));
  } else {
    // Caso não seja encontrado, retornar 404
    res.writeHead(404);
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

// Definir a porta e iniciar o servidor
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
