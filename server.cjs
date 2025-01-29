// eslint-disable-next-line no-undef
const jsonServer = require('json-server');
// eslint-disable-next-line no-undef
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Habilitar CORS con configuración explícita
server.use(cors({
  origin: '*', // Permite todas las direcciones de origen
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'] // Cabeceras permitidas
}));

server.use(middlewares);  // Usar los middlewares predeterminados de json-server
server.use(router);  // Usar el router para db.json

server.listen(3000, () => {
  console.log('JSON Server is running on port 3000');
});
