import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyToysRow = (props) => {
  const { category, price, quantity, sellerName, toyName, toyPhotoUrl, _id } = props.myToyData;
  const toysData = props.toysData;
  const setToysData = props.setToysData;

  const deleteHandler = (id) => {
    const agree = window.confirm("Sure! want to delete?");
    if (agree) {
      fetch(`http://localhost:5000/toys/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Toy added successfully!", {
              position: "top-center",
            });
          }

          const remainingToysData = toysData?.filter((toyData) => toyData._id !== id);
          setToysData(remainingToysData);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
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
        <Link>
          <button className="btn btn-accent btn-xs">update</button>
        </Link>
        <div className="inline-block">
          <button onClick={() => deleteHandler(_id)} className="btn btn-warning btn-xs">
            delete
          </button>
          <ToastContainer></ToastContainer>
        </div>
      </td>
    </tr>
  );
};

export default MyToysRow;
