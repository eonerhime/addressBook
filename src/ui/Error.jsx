import { useNavigate, useRouteError } from "react-router-dom";

function Error({status}) {
  const error = useRouteError();
  const navigate = useNavigate();

  return <div className="absolute inset-0 flex items-center justify-center flex-col gap-4 font-semibold">
    <h1>Something went wrong 😢</h1>
    <p>{error.data  || error.message}</p>
    {status != "home" && 
    <button onClick={() => navigate('/')}>&larr; Go back</button>}
  </div>;
}

export default Error;
