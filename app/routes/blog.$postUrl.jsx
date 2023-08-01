import { getPost } from "../models/posts.server";
import {useLoaderData, isRouteErrorResponse, useRouteError, Link} from "@remix-run/react"
import {formatearFecha } from "~/utils/helpers"

export function meta({data}) {
  if(!data){
    return [
    { title: `GuitarLA - Entrada no encontrada`},
    {description: `Guitarras, venta de guitarras, entrada no encontrada `}
   ]
  }

  return [ 
    {title: `GuitarLA - ${data.data[0].attributes.titulo}`},
    {description: `Guitarras, venta de guitarras, entrada ${data.data[0].attributes.titulo} `}
]
}


export async function loader({params}) {
  // fyfytfuytfyut
    const { postUrl } = params
    const post = await getPost(postUrl)
    if(post.data.length === 0) {
      throw new Response(" ", {
        status: 404,
        statusText: "Entrada no encontrada"
      })
    }
    return post
    
}

export function ErrorBoundary() {
  const error = useRouteError() //AGREGAR EL HOOK DE useRouteError

  if(isRouteErrorResponse(error)){  //Agregar el hook de isRouteErrorResponse
   return (
        <p className="error">
          {error.status} {error.statusText}
          <p> 
          <Link className="error-enlace" to="/"> Talvez desea regresar a la pagina principal </Link>
          </p>
        </p>   
   )
 }
 return <p className="error"> Error desconocido </p>
}

export default function Post() {

  const post = useLoaderData()
  const {titulo, contenido, imagen, publishedAt} = post?.data[0]?.attributes

  return (
    <article className="post mt-3">
      <img className="imagen" src={imagen?.data?.attributes?.url} alt={`imagen blog ${titulo}`}/>
      <div className="contenido">
         <h3>{titulo}</h3>
         <p className="fecha"> {formatearFecha(publishedAt)}</p>
         <p className="texto">{contenido}</p>
        
      </div>
    </article>
  )
}