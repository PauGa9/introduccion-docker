# docker run
## a.
Instancía un contenedor a partir de la imagen `alpine`, y haz que este contenedor printe por consola `Hello World` (puedes ejecutar el comando `echo` dentro del contenedor).

## b.
Levanta un contenedor como el del apartado anterior y que se llame `provando-uno-dos`. Posteriormente, asegúrate de que está parado y elimínalo.

## c.
La imagen `alpine` incluye el directorio `/var/lib`. Instancía un contenedor de la imagen `alpine`, con el directorio `/var/lib` como directorio de trabajo, es decir, que cualquier comando se ejecutará usando este directorio como base. Puedes comprobar que es correcto pasando el command `pwd` (muestra el directorio de trabajo actual) al contenedor.

## d.
En el ejercicio anterior hemos usado `pwd` como command. Una vez el proceso `pwd` ha finalizado, el contenedor pasa al estado `stopped`. Si no le pasamos ningún command, la imagen de alpine ejecuta el comando `/bin/sh`, el cual se trata de la shell sh. Instancía un contenedor de la imagen `alpine` de manera que se pueda interactuar con él (como si se tratara de una ejecución de `ssh` con una máquina en remoto).
