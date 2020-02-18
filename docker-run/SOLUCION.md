# docker run (soluciones)
## a.
`docker run alpine echo "Hello World"`

## b.
`docker run --name provando-uno-dos alpine echo "Hello World"`

Es necesario usar el parámetro `--name` con el valor `provando-uno-dos` para darle este nombre al contenedor. El contenedor estará en estado `stopped`, ya que el command printará por consola y finalizará. Para asegurarlo, `docker ps -a` nos debería mostrar este contenedor.

Para eliminarlo

`docker rm provando-uno-dos` o `docker rm <id contenedor>`.

## c.
`docker run -w /var/lib alpine`

Es necesario el parámetro `-w /var/lib` para definir el directorio de trabajo.

## d.
`docker run -it alpine`

El parámetro `-t` ejecuta el contenedor en una pseudo-tty, tal y como indica la documentación de Docker. Esto quiere decir que el output (STDOUT o standard output) del proceso estará formateado, tal y como pasa cuando ejecutamos comandos en el terminal de nuestra máquina. La opción `-i` es el modo interactivo: conecta el input del contenedor (el canal STDIN o standard input) con el input del terminal de nuestra máquina.
