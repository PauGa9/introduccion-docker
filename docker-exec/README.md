# docker exec
a. Instancía un contenedor de mysql versión 5.7, accesible desde el puerto 2345 de tu máquina, que se ejecute en modo _detached_. Además, deberás introducir una variable de entorno en el contenedor, `MYSQL_ROOT_PASSWORD`, con el valor que quieras usar como contraseña.

Una vez esté en ejecución (estado _running_), conéctate al contenedor mediante `docker exec`, y prueba de realizar alguna operación SQL (select, crear una tabla, insert...). Dentro del contenedor necesitarás ejecutar
`mysql -uroot -p <valor-variable-entorno>`