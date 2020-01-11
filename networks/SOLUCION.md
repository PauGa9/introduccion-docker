# networks (soluciones)
a. `docker run --network network-ejercicio --name api -v $(pwd):/app -w /app node:10-alpine node index.js`, ejecutándolo en el mismo directorio donde se encuentre el fichero `index.js`. Las opciones usadas son:
- network para conectarme a la red `network-ejercicio`;
- opción --name para identificarlo con nombre desde otros contenedores;
- opción -v para tener acceso desde el contenedor a los ficheros de mi máquina (lo veremos en otro vídeo con más detalle);
- imagen `node:10-alpine`, ya que necesito NodeJS para ejecutar el código, y la versión alpine es muy ligera;
- command `node index.js`;

Desde el segundo terminal, ejecutando `docker run --network network-ejercicio tutum/curl:alpine curl api:3000` sería suficiente para ver la respuesta de nuestra api.

b. `docker run -p 5000:3000 --rm -v $(pwd):/app -w /app node:10-alpine node index.js`, ejecutándolo en el mismo directorio donde se encuentre el fichero `index.js`. Las opciones usadas son:
- opción -p para mapear un puerto de tu máquina (yo he usado el 5000, tú puedes usar cualquiera mientras no esté ocupado) con el puerto 3000 del contenedor
- opción --rm es para eliminar el contenedor cuando pare (no es necesario para este ejercicio)
- opción -v para tener acceso desde el contenedor a los ficheros de mi máquina (lo veremos en otro vídeo con más detalle);
- imagen `node:10-alpine`, ya que necesito NodeJS para ejecutar el código, y la versión alpine es muy ligera;
- command `node index.js`;

Desde un navegador, accediendo a `localhost:5000` deberías ver la respuesta de nuestra api.