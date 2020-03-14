# Creación de Bots automatico (respondiendo mensajes en facebook)

### Un bot, recibe y contesta mensajes de manera automática. Esto te permite agilizar y automatizar el soporte de tu página, la plataforma de Facebook Messenger, desarrolla scripts que respondan automáticamente a los mensajes que recibes en tu FanPage.

# Tecnologías utilizadas:
- Creación de servidor node
- Instalacion de express
- Creación FanPage.
- Configuración de Webhook
- Obtención de un Token
- Instalacion y ejecución de Ngrok

# Ejecución del código index.js
- Crear un proyecto para la ejecución de index.js se le puede asignar cualquier nombre, en este caso mi proyecto se llama *Taller _node*
- Para la instalación de express se necesita ejecutar dentro del proyecto ahí se guardaran los paquetes descargados y se creará una carpeta llamada *node_modules*
- De la linea 3 a la 5 Se importa *express* *bodyParser* *request*
- La linea 7 Muestra el *Token* de nuestra aplicación  
- La linea 9 y 10 se llama una instancia que utiliza *bodyParse.json*
- De la linea 12 a la 14 Se le agrega a que puerto.
- La linea 16 a la 18 Se configura la ruta en la que se tiene que ejecutar.
- De la linea 20 a la 28 Solo es para validar los servidores, muestra nuestro *Webhook* facebook envia nuestro porpio token y nosotros podemos responder con su red.
- De la 31 a la 49 Solo es para validar los eventos
- De la linea 52 a la 57 Se crea una nueva funcion para obtener el destinatario y los datos de lo que venga dentro del mensajes.
- La linea 60 a la 63 Se evalua para poder responder
- De la linea 67 a la 100 Son los mensajes que se van a responder
- La linea 102 a la 112 Muestra la estructura de como se envirá el mensaje
- La linea 114 a la 131 Se hace una petición a la url (la url no se le puede cambiar por que facebook la tiene predefinida), se le define el token.
- La linea 133 a la 135 Esa funcion regresa true o false dependindo si se encuetra la palabra dentro de la sentencia.

![1Nodexpress](https://user-images.githubusercontent.com/52976520/76582132-06804700-649b-11ea-97c1-e14bdcd92032.png)
![index1](https://user-images.githubusercontent.com/52976520/76675858-a5806e00-6583-11ea-83a6-7747f77d280a.JPG)
![index2](https://user-images.githubusercontent.com/52976520/76675880-cf399500-6583-11ea-9cc8-d55ca8b2f3c7.JPG)
![index3](https://user-images.githubusercontent.com/52976520/76675894-eed0bd80-6583-11ea-8150-7852ebb8a667.JPG)
![index4](https://user-images.githubusercontent.com/52976520/76675904-0019ca00-6584-11ea-9ead-574233844ea6.JPG)

- FanPage
![2FanPage](https://user-images.githubusercontent.com/52976520/76582355-9faf5d80-649b-11ea-88ab-ab963c966d48.JPG)
- Obtención de Webhook y Token
![3Webhook](https://user-images.githubusercontent.com/52976520/76582584-48f65380-649c-11ea-97e7-e98e77afa30b.png)
![4Token](https://user-images.githubusercontent.com/52976520/76582631-78a55b80-649c-11ea-90c1-0d27de80e4b2.png)


# Ejecución de Ngrok
Es una herramienta que permite acceder nustro servidor local a cualquier persona en internet con la que compartamos una URL generada dinamicamente.
Se hace la descarga de ngrok dentro de su proyecto para que te de la url, se ejecuta con *ngrok http 3000* y dependiendo de que puerto se está ejecutando el servidor se le agrega a lado de http, en este caso yo tengo el puerto *3000* la aplicación solo nos sirve para el desarrollo, en caso de que se detenga y si la va a volver a ejecutar de manda otra url, no es recomendable que se detenga.
![5Ngrok](https://user-images.githubusercontent.com/52976520/76582803-e9e50e80-649c-11ea-89fd-30ae48df9f91.png)


# Resultado
![6Resultado](https://user-images.githubusercontent.com/52976520/76582829-084b0a00-649d-11ea-960b-4dd34f30f68f.png)


