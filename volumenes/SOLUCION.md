# volúmenes y bind-mount (soluciones)

a. Primero, es necesario crear el volumen.

`docker volume create datos-mysql`

Después, ya podemos instanciar el contenedor de MySQL:

`docker run -v datos-mysql:/var/lib/mysql -p 3306:3306 --rm -d -e MYSQL_ROOT_PASSWORD=1234 mysql:5.7`. Las opciones usados son:

- -v para usar el volumen `datos-mysql` en el directorio `/var/lib/mysql` del contenedor
- -p para mapear el puerto 3306 de mi máquina con el del 3306 del contenedor (para interactuar con MySQL con un programa como SequelPro)
- --rm para eliminar el contenedor cuando pare
- -d para ejecutarlo en modo detached, es decir, que se ejecute en segundo plano y nos deje el terminal de nuestra máquina libre
- -e para pasarle una variable de entorno, `MYSQL_ROOT_PASSWORD` con el valor `1234`

Para comprobar que ha funcionado, crea una tabla y realiza un insert. Seguidamente, para el contenedor de MySQL (`docker stop`), y vuelve a ejecutar el comando `docker run` anterior. Cuando te vuelvas a conectar a MySQL, deberías encontrar la tabla con el insert.

b. `docker run -v $(pwd):/home -w /home --rm alpine:latest sh script.sh`. Las opciones usadas son:

- -v para usar bind-mount: a diferencia del ejercicio anterior, aquí estamos usando <ruta-máquina-local>:<ruta-contenedor>; las rutas en ambos casos tienen que ser absolutas, y para evitar tener que escribir la ruta de nuestra máquina usamos _command substitution_ de bash con el comando `pwd` ([más info sobre $()](https://www.gnu.org/software/bash/manual/html_node/Command-Substitution.html))
- -w para definir el directorio de trabajo; en este caso, usaremos el directorio del bind-mount en el contenedor, `/home`
- --rm para eliminar el contenedor cuando pare

Como _command_ usamos `sh script.sh`, el cual ejecuta el archivo `script.sh` en una shell.