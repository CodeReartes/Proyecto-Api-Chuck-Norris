//importo axios para hacer el llamado al API al sitio web 
import React from "react";
import axios from "axios";

import Chuck from "../assets/chuck.png"
//function Body, en la cual establesco variables para que podamos controlar las categorias.
//usamos useState para almacenar y guardar chistes a medida que se realizan cambios. 
export default function Body() {
  const [category, setCategory] = React.useState([])
  const [currentCategory, setCurrentCategory] = React.useState("")
  const [currentJoke, setCurrentJoke] = React.useState("Haz clic en ese botón...")

  //Cuando hago click en el boton para obtener el chiste
  //me preguntara si la categoria actual esta vacia
  const getJoke = () => {
    if (currentCategory === "") {
      //obtendre un valor aleatorio y establecere el chiste actual en ese valor
      axios.get("https://api.chucknorris.io/jokes/random").then((res) => {
        setCurrentJoke(res.data.value)
      })
    } else {
      axios
        .get(
          `https://api.chucknorris.io/jokes/random?category=${currentCategory}`
        )
        .then((res) => {
          setCurrentJoke(res.data.value)
        })
    }
  }
//Hago el pedido como va a tardar me da una promesa, por eso el then
  React.useEffect(() => {
    axios.get("https://api.chucknorris.io/jokes/categories").then((res) => {
      setCategory(res.data)
    })
  }, [])
  return (
    <div className="body-wrapper">
      <img className="body-img" src={Chuck} alt="chuck norris" />
      <div className="body-joke-area">{currentJoke}</div>
      <div className="body-button-wrapper">
        <button className="body-joke-button" onClick={getJoke}>
         Obtener Chiste
        </button>
      </div>
      <div className="body-radio-wrapper">

    {category.map((cat) => {
          // retorno un componente como un div correcto
          return (
            <div className="body-radio-button">
              <input
                type="radio"
                name="radio"
                value={cat}
                id={cat}
                onClick={() => setCurrentCategory(cat)} // al hacer click establecemos la categoria actual
              />
              <label htmlFor={cat}>{cat}</label>
            </div>
          )
        })}
      </div>
    </div>
  )
}
