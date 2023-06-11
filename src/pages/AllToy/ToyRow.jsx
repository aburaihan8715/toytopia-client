import { Link } from "react-router-dom";

const ToyRow = ({ toy }) => {
  const { toyName, toyPhotoUrl, category, price, quantity, sellerName, _id } = toy;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              {toyPhotoUrl && <img src={toyPhotoUrl} alt="Avatar" />}
              {!toyPhotoUrl && <img src="http://placehold.it/50x50" alt="Avatar" />}
            </div>
          </div>
          <div>
            <div className="font-bold">{toyName}</div>
          </div>
        </div>
      </td>

      <td>
        <span>$</span>
        {price}
      </td>

      <td>{quantity}</td>
      <td>{category}</td>
      <td>{sellerName}</td>
      <td>
        <Link to={`/viewDetails/${_id}`}>
          <button className="btn btn-info btn-xs">view details</button>
        </Link>
      </td>
    </tr>
  );
};

export default ToyRow;
