import { Links } from "@remix-run/react"
import imagen from "../../public/img/nosotros.jpg"
import styles from "~/styles/nosotros.css"

export function meta() {
  return ( 
  [{
    title: "GuitarLA - Nosotros"
  }]
)}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles
    },
    {
      rel:"preload",
      href: imagen,
      as: "image"
    }
  ]
}

function Nosotros() {

    return (
      <main className="contenedor nosotros" >
        <h2 className="heading">Nosotros</h2>
        <div className="contenido">
          <img src={imagen} alt="imagen sobre nosotros"/>    

          <div>
            <p>
            Nullam bibendum finibus condimentum. Praesent ac faucibus nulla, nec imperdiet magna. 
            Cras quis nunc eget ex maximus facilisis. Mauris finibus at dolor a fringilla. 
            Donec accumsan sed ipsum a lobortis. Aenean tellus ex, hendrerit non nisl in,
             laoreet consequat justo. Nunc id eleifend eros, et pretium leo. Etiam ut arcu 
             vitae mauris elementum pharetra a sed mi. Nullam fermentum purus a augue viverra 
             tempor. Vestibulum ipsum metus, maximus vitae mattis quis, feugiat vitae erat. 
             Curabitur ultrices est purus, quis consequat elit volutpat sit amet
            </p>

            <p>
            Nullam bibendum finibus condimentum. Praesent ac faucibus nulla, nec imperdiet magna. 
            Cras quis nunc eget ex maximus facilisis. Mauris finibus at dolor a fringilla. 
            Donec accumsan sed ipsum a lobortis. Aenean tellus ex, hendrerit non nisl in,
             laoreet consequat justo. Nunc id eleifend eros, et pretium leo. Etiam ut arcu 
             vitae mauris elementum pharetra a sed mi. Nullam fermentum purus a augue viverra 
             tempor. Vestibulum ipsum metus, maximus vitae mattis quis, feugiat vitae erat. 
             Curabitur ultrices est purus, quis consequat elit volutpat sit amet
            </p>

          </div>

        </div>
      </main>
    )
}

export default Nosotros