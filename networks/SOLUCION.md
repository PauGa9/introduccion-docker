# networks (soluciones)
## a.
`docker network create network-ejercicio`

`docker run --network network-ejercicio --name api --rm dockerparaprogramadores/api:latest`

Las opciones usadas son:
- network para conectarme a la red `network-ejercicio`;
- opción --name para identificarlo con nombre desde otros contenedores;
- opción --rm es para eliminar el contenedor cuando pare (no es necesario para este ejercicio)
- imagen `dockerparaprogramadores/api:latest`;

Desde el segundo terminal, ejecutando `docker run --network network-ejercicio tutum/curl:alpine curl api:3000` sería suficiente para ver la respuesta de nuestra api.

## b.
`docker run -p 5000:3000 --rm dockerparaprogramadores/api:latest`. Las opciones usadas son:
- opción -p para mapear un puerto de tu máquina (yo he usado el 5000, tú puedes usar cualquiera mientras no esté ocupado) con el puerto 3000 del contenedor
- opción --rm es para eliminar el contenedor cuando pare (no es necesario para este ejercicio)
- imagen `dockerparaprogramadores/api:latest`;

Desde un navegador, accediendo a `localhost:5000` deberías ver la respuesta de nuestra api.
