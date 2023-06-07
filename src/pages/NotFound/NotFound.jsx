import { useNavigate, useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto">
      <div className="">
        <small onClick={() => navigate(-1)} className="text-blue-700 cursor-pointer">
          Go back
        </small>
      </div>
      <p className="text-center">
        <i>{error.statusText || error.message}</i>
      </p>
      <div className="flex justify-center items-center min-h-[calc(100vh-48px)]">
        <div className="text-5xl">
          <img loading="lazy" className="w-full" src="https://i.ibb.co/YhZ77K0/404.png" alt="error" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
