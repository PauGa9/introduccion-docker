# networks
a. El primer ejercicio tiene como objetivo crear una API en un contenedor, que escuchará peticiones http (puerto 3000 del contenedor), y realizar peticiones http con otro contenedor. A continuación tienes las indicaciones para hacerlo con Docker.

Crea una network con el nombre `network-ejercicio`, de tipo `bridge`.

Una vez creada, instancia un container con los siguientes requerimientos:
- imagen: `node:10-alpine`
- directorio de trabajo: `/app`
- nombre: `api`
- network: `network-ejercicio`
- comando `node index.js`
- añade la opción `-v $(pwd):/app`; IMPORTANTE: asegúrate de ejecutar `docker run` desde el directorio donde tengas el fichero `index.js` que encontrarás en el directorio de este ejercicio.

Cuando tengas el contenedor en ejecución, abre otro terminal en tu máquina. Aquí, instancia un contenedor con la imagen `tutum/curl:alpine`, y con el command `curl api:3000`.

Si lo has hecho correctamente, deberías obtener la respuesta de la api: `Hola mundo`. Si no la recibes, no te preocupes, en los vídeos encontrarás la respuesta. Dale duro!

b. En esta segunda parte, el objetivo es volver a levantar un contenedor con una api, pero que pueda recibir peticiones de fuera el contenedor, por ejemplo desde tu máquina. Deberás usar el mismo comando que en el ejercicio anterior, añadiendo una opción más, se te ocurre cuál es?