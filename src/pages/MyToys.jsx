import { useContext, useEffect, useState } from "react";
import MyToysRow from "../features/toys/MyToysRow";
import { AuthContext } from "../contexts/AuthProvider";
import LoadingSpinner from "../ui/LoadingSpinner";
import useTitle from "../hooks/useTitle";

const MyToys = () => {
  const [toysData, setToysData] = useState([]);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  useTitle("MyToys");

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
    <div>
      <div className="px-2 sm:px-5">
        <div className="text-center my-8">
          <h2 className="text-3xl inline-block underline underline-offset-8 uppercase font-semibold text-error">My Toys</h2>
        </div>
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
                <MyToysRow key={myToyData._id} myToyData={myToyData} toysData={toysData} setToysData={setToysData}></MyToysRow>
              ))}
              {/* row  */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
