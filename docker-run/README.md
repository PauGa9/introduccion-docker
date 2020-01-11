# docker run
a. Instancía un contenedor con la distribución Linux Alpine, con el directorio `/home` como directorio de trabajo. Puedes comprobar que es correcto pasando el command `pwd` (muestra el directorio de trabajo actual).

b. En el ejercicio anterior hemos usado `pwd` como command. Una vez el proceso `pwd` ha finalizado, el contenedor pasa al estado `stopped`. Si no le pasamos ningún command, la imagen de alpine ejecuta el comando `/bin/sh`, el cual se trata de la shell sh. Instancía un contenedor con la distribución Linux Alpine de manera que se pueda interactuar con el contenedor, como si se tratara de una ejecución de ssh con una máquina en remoto.