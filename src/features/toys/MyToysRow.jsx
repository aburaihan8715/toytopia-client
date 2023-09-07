import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToysRow = (props) => {
  const { category, price, quantity, sellerName, toyName, toyPhotoUrl, _id } = props.myToyData;
  const toysData = props.toysData;
  const setToysData = props.setToysData;

  const deleteHandler = (id) => {
    Swal.fire({
      title: "Are you sure?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toytopia-server-xi.vercel.app/toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remainingToysData = toysData?.filter((toyData) => toyData._id !== id);
              setToysData(remainingToysData);
              Swal.fire("Deletion success!!");
            }
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
    });
  };

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
      <td className="space-x-2">
        <Link to={`/updateToy/${_id}`}>
          <button className="btn btn-accent btn-xs">update</button>
        </Link>
        <div className="inline-block">
          <button onClick={() => deleteHandler(_id)} className="btn btn-warning btn-xs">
            delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MyToysRow;
