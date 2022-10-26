    Qu� aprenderemos como parte de este Proyecto?

- declaraci�n de funci�n
- window.onload function
- Fetch() method
- adjuntando onclick eventlistener a un elemento

   Solucion Implementada
Para implementar esta solucion utilice React desde 0 . 
Use la biblioteca Axios como una obtecion de chistes me parecio mejor opcion a la hora de menor codigo ,
ya que al usar el Fetch API solo necesitaba una devolucion de llamada .then para acceder a los datos JSON solicitados 

   Resultado Final

- Cree chistes aleatorias al hacer clic en el bot�n.  
- Agregue un filtro de categor�a que mostrar� chistes aleatorias de la categor�a elegida.


Estructura del proyecto

    Cree la lista de archivos como se indica a continuaci�n
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
1. un div "body-wrapper" tendr� la img class="body-img" y la etiqueta img que tendr� el �cono de chuck Norris de la API.
2. Secci�n para mostrar chistes  (body-joke-area) :  donde se mostrara el chiste 
2. Bot�n Generar chiste : este es el bot�n al hacer clic en el cual generaremos/recuperaremos una nuevo chiste de la API.
3. body-radio-wrapper : un campo simple con una lista de todas las categor�as disponibles en la API de Chuck Norris.
 Las opciones dentro del campo de selecci�n son creadas por la lista recuperada de aqu�  api.chucknorris.io/jokes/categories

    JavaScript
Vamos a dividir esto en cuatro pasos
1. Cree una funcion asincrona fetchCategories para llamar a una lista chistes por categoria aleatorio y llame a esa funci�n con window load.
2. Genere otra funcion asincrona fetchJoke para chiste basadas en la categor�a seleccionada
Para recuperar chistes aleatorias, la URL de la API que se utilizar� se encuentra a continuaci�n
api.chucknorris.io/jokes/random?category= {categor�a} .En esta URL, {categor�a} ser� el valor elegido del men� desplegable
api.chucknorris.io/jokes/random?category= {categor�a}
3. Usando el m�todo  fetch para tener todos los resultados
4. Generar chiste al hacer clic en el bot�n--
Esto se puede hacer f�cilmente agregando un addEventListener de clic, que llama a la funci�n async function al hacer clic.
 
    Header.js
hago un rfc por que tengo un complemento de fragmento de codificacion y exporto una function h1 que retorna un div - h1
Combino todo el codigo en un archivo y mantengo el encabezado sepaado.
Para que sea organizado

    Body.js
-Importo axios para hacer el llamado al API al sitio web en si para obtener la informacion
- Exporte una function Body, en la cual establesco algunas variables para que podamos controlar las categorias,categorias general,gategoria actual
- Usamos useState es una forma de almacenar y guardar chistes a medida que se realizan cambios en su aplicacion
- Cree una constante getJoke en la cual la URL a usar si ve a continuaci�n se decide en funci�n de una condici�n if/else.
En la carga de la p�gina inicial o si el usuario decide ver chistes de todas las categor�as, usamos la URL de la condici�n else, 
si la categor�a elegida es diferente a la opci�n "todas", por ejemplo. 
pel�cula o deportes, entonces usamos la URL dentro de la condici�n "si".

    App.js
importe 
Cree una funcion App donde exportara los archivos Header y Body
 