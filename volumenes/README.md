# volúmenes y bind-mount

a. El objetivo de este ejercicio es usar un volumen de Docker. Crea un volumen e instancia un contenedor de MySQL que use el volumen que has creado. Puedes aprovechar el comando de `docker run` que vimos en el ejercicio del vídeo anterior.
Pista: MySQL guarda los datos a persistir en el directorio `/var/lib/mysql`.

b. El objetivo de este ejercicio es unsar un bind-mount de Docker. Instancia un contenedor Alpine y ejecuta, en el contenedor, el script que encontrarás en esta carpeta (`script.sh`). Recuerda que deberás usar bind-mount en el comando `docker run`. Como resultado, deberías ver por consola el mensaje `Hola mundo`.