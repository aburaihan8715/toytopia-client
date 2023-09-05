import { useLoaderData } from "react-router-dom";
import useTitle from "../hooks/useTitle";

const ToyDetails = () => {
  const data = useLoaderData();
  const { toyName, sellerName, sellerEmail, price, rating, quantity, description, toyPhotoUrl } = data;
  useTitle("ViewDetails");

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row space-x-4">
          <img src={toyPhotoUrl} className="w-full max-w-xl rounded-lg shadow-xl" />

          <div className="max-w-2xl space-y-3">
            <div className="space-y-3">
              <h3 className="text-4xl font-bold">{toyName}</h3>
              <p>
                <strong>Price : </strong>
                {price}
              </p>
              <p>
                <strong>Available quantity : </strong>
                {quantity}
              </p>
              <p>
                <strong>Rating : </strong>
                {rating}
              </p>
              <p>
                <strong>Description : </strong>
                {description}
              </p>
            </div>

            <div className="flex justify-start">
              <div className="border rounded p-2">
                <h4>seller info :</h4>
                <p>Name : {sellerName}</p>
                <p>Email : {sellerEmail}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
