import { Link } from "react-router-dom";

const MyToysRow = ({ myToyData }) => {
  const { category, price, quantity, sellerName, toyName, toyPhotoUrl } = myToyData;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={toyPhotoUrl} alt="Avatar" />
            </div>
          </div>
          <div>
            <div className="font-bold">{toyName}</div>
          </div>
        </div>
      </td>

      <td>
        <span>$ </span>
        {price}
      </td>

      <td>{quantity}</td>
      <td>{category}</td>
      <td>{sellerName}</td>
      <td>
        <Link>
          <button className="btn btn-ghost btn-xs">update</button>
        </Link>
        <button className="btn btn-ghost btn-xs">delete</button>
      </td>
    </tr>
  );
};

export default MyToysRow;
