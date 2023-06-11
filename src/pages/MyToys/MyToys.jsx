import { useContext, useEffect, useState } from "react";
import MyToysRow from "./MyToysRow";
import { AuthContext } from "../../contexts/AuthProvider";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const MyToys = () => {
  const [toysData, setToysData] = useState([]);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://toytopia-server-xi.vercel.app/toys`)
      .then((res) => res.json())
      .then((data) => {
        setToysData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const myToysData = toysData?.filter((toyData) => toyData.sellerEmail === user?.email);

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Toy Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Sub-category</th>
              <th>Seller</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {/* row  */}
            {myToysData.map((myToyData) => (
              <MyToysRow key={myToyData._id} myToyData={myToyData}></MyToysRow>
            ))}
            {/* row  */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
