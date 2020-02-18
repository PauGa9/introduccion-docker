# volúmenes y bind-mount

## a.
El objetivo de este ejercicio es usar un volumen de Docker. Crea un volumen y levanta un contenedor de MySQL que use el volumen que has creado. Pásale al contenedor la variable de entorno `MYSQL_ROOT_PASSWORD` con la password que quieras usar para conectarte a MySQL.
Pista: MySQL guarda los datos a persistir en el directorio `/var/lib/mysql`.

## b.
El objetivo de este ejercicio es usar un bind-mount de Docker. Levanta un contenedor Alpine y ejecuta, en el contenedor, el script que encontrarás en esta carpeta (`script.sh`). Recuerda que deberás usar bind-mount en el comando `docker run`. Como resultado, deberías ver por consola el mensaje `Hola mundo`.
