  Qué aprenderemos como parte de este Proyecto?

- declaración de función
- window.onload function
- Fetch() method
- adjuntando onclick eventlistener a un elemento

   Solucion Implementada
Para implementar esta solucion utilice React desde 0 . 
Use la biblioteca Axios como una obtecion de chistes me parecio mejor opcion a la hora de menor codigo ,
ya que al usar el Fetch API solo necesitaba una devolucion de llamada .then para acceder a los datos JSON solicitados 

   Resultado Final

- Cree chistes aleatorias al hacer clic en el botón.  
- Agregue un filtro de categoría que mostrará chistes aleatorias de la categoría elegida.


Estructura del proyecto

    Cree la lista de archivos como se indica a continuación
Carpeta - proyecto-chuck-std
- index.html
- script.js
- style.css 

Carpeta - proyecto-chuck-react
- Header.js
- Body.js
- App.js
- App.css



     HTML
HTML va a ser muy simple
1. un div "body-wrapper" tendrá la img class="body-img" y la etiqueta img que tendrá el ícono de chuck Norris de la API.
2. Sección para mostrar chistes  (body-joke-area) :  donde se mostrara el chiste 
2. Botón Generar chiste : este es el botón al hacer clic en el cual generaremos/recuperaremos una nuevo chiste de la API.
3. body-radio-wrapper : un campo simple con una lista de todas las categorías disponibles en la API de Chuck Norris.
 Las opciones dentro del campo de selección son creadas por la lista recuperada de aquí  api.chucknorris.io/jokes/categories

    JavaScript
Vamos a dividir esto en cuatro pasos
1. Cree una funcion asincrona fetchCategories para llamar a una lista chistes por categoria aleatorio y llame a esa función con window load.
2. Genere otra funcion asincrona fetchJoke para chiste basadas en la categoría seleccionada
Para recuperar chistes aleatorias, la URL de la API que se utilizará se encuentra a continuación
api.chucknorris.io/jokes/random?category= {categoría} .En esta URL, {categoría} será el valor elegido del menú desplegable
3. Usando el método  fetch para tener todos los resultados
4. Generar chiste al hacer clic en el botón--
Esto se puede hacer fácilmente agregando un addEventListener de clic, que llama a la función async function al hacer clic.
 
    Header.js
hago un rfc por que tengo un complemento de fragmento de codificacion y exporto una function h1 que retorna un div - h1
Combino todo el codigo en un archivo y mantengo el encabezado sepaado.
Para que sea organizado

    Body.js
-Importo axios para hacer el llamado al API al sitio web en si para obtener la informacion
- Exporte una function Body, en la cual establesco algunas variables para que podamos controlar las categorias,categorias general,gategoria actual
- Usamos useState es una forma de almacenar y guardar chistes a medida que se realizan cambios en su aplicacion
- Cree una constante getJoke en la cual la URL a usar si ve a continuación se decide en función de una condición if/else.
En la carga de la página inicial o si el usuario decide ver chistes de todas las categorías, usamos la URL de la condición else, 
si la categoría elegida es diferente a la opción "todas", por ejemplo. 
película o deportes, entonces usamos la URL dentro de la condición "si".

    App.js
Cree una funcion App donde exportara los archivos Header y Body
 
