import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Ups! Un error ha ocurrido</h1>
      <p>No hemos encontrado la pagina a la que intentas acceder</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}