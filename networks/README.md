# networks
## a.
El primer ejercicio tiene como objetivo levantar una API en un contenedor, que escuchará peticiones http (puerto 3000 del contenedor), y realizar peticiones http desde otro contenedor. A continuación tienes las indicaciones para hacerlo con Docker.

Primero crea una network con el nombre `network-ejercicio`, de tipo `bridge`.

Una vez creada, levanta un container con los siguientes requerimientos:
- imagen: `dockerparaprogramadores/api:latest`
- nombre: `api`
- network: `network-ejercicio`

Cuando tengas el contenedor en ejecución, abre otro terminal en tu máquina. Aquí levanta un contenedor con la imagen `tutum/curl:alpine`, y ejecuta dentro del contenedor el command `curl api:3000`.

Si lo has hecho correctamente, deberías obtener la respuesta de la api: `Hola mundo`. Si no la recibes, no te preocupes, en los vídeos encontrarás la respuesta. Dale duro!

## b.
En esta segunda parte, el objetivo es volver a levantar un contenedor con la api, pero que pueda recibir peticiones desde fuera el contenedor, por ejemplo desde el navegador de tu máquina. Deberás usar el mismo comando que en el ejercicio anterior, sustituyendo algún parámetro, se te ocurre cuáles?
