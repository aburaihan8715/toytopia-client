import { useLoaderData, useNavigation } from "react-router-dom";
import ToyRow from "./ToyRow";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import useTitle from "../../hooks/useTitle";

const AllToy = () => {
  const toyData = useLoaderData();
  const navigation = useNavigation();
  useTitle("AllToy");

  if (navigation.state === "loading") {
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
            {toyData.map((toy) => (
              <ToyRow key={toy._id} toy={toy}></ToyRow>
            ))}
            {/* row  */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToy;
