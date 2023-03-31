import React from 'react'
import { useRouteError, Link } from 'react-router-dom';

const NotFound = () => {

  const error = useRouteError();
  console.log(error)
  return (
    <div>
      <h2>Página no encontrada</h2>
      <h1>404</h1>
      <p>{error.statusText || error.statusMessage}</p>
     <Link to='/'>volver a inicio</Link>
      </div>
  )
}

export default NotFound