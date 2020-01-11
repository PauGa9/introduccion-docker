# docker exec (soluciones)
a. `docker run --rm -d -e MYSQL_ROOT_PASSWORD=1234 mysql:5.7`. Las opciones usados son:
- --rm para eliminar el contenedor cuando pare
- -d para ejecutarlo en modo detached, es decir, que se ejecute en segundo plano y nos deje el terminal de nuestra máquina libre
- -e para pasarle una variable de entorno, `MYSQL_ROOT_PASSWORD` con el valor `1234`

Este comando me devuelvo un id del nuevo contenedor. Entonces, si ejecutas

`docker exec -it <id-contenedor> sh`

te conectas al contenedor, y ya puedes interactuar con la base de datos de MySQL:

`mysql -uroot -p1234`

Para seleccionar una base de datos, hay que ejecutar:

`use <nombre-base-datos>`

Para hacer un select, hay que ejecutar:

`select * FROM <nombre-tabla>`
