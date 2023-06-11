import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddToy = () => {
  const [toy, setToy] = useState({});
  const { user } = useContext(AuthContext);

  const blurHandler = (event) => {
    const value = event.target.value;
    const field = event.target.name;
    const newToy = { ...toy };
    newToy[field] = value;
    setToy(newToy);
  };

  const addToyHandler = (event) => {
    event.preventDefault();
    console.log(toy);
    const toyData = {
      toyName: toy.toyName,
      toyPhotoUrl: toy.photo,
      price: Number(toy.price),
      quantity: Number(toy.quantity),
      rating: Number(toy.rating),
      category: toy.subCategory,
      sellerName: toy.sellerName,
      sellerEmail: toy.email,
      description: toy.description,
    };
    fetch("http://localhost:5000/toys", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(toyData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Toy added successfully!", {
            position: "top-center",
          });
        }
        event.target.reset();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="inline-block text-3xl uppercase underline underline-offset-8 mb-8">Add A Toy</h2>
        </div>

        <div>
          <form onSubmit={addToyHandler}>
            <div className="space-y-3 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select name="subCategory" onBlur={blurHandler} className="select select-primary w-full order-1" defaultValue={"sub-category"}>
                  <option disabled value="sub-category">
                    sub-category
                  </option>
                  <option value="STEM">STEM</option>
                  <option value="Creative Arts and Crafts">Creative Arts and Crafts</option>
                  <option value="Language and Literacy">Language and Literacy</option>
                </select>

                <input
                  onBlur={blurHandler}
                  className="input input-bordered input-primary w-full order-2"
                  type="text"
                  name="toyName"
                  placeholder="Enter toy name"
                  required
                />

                <input
                  onBlur={blurHandler}
                  className="input input-bordered input-primary w-full order-3"
                  type="url"
                  name="photo"
                  placeholder="Enter toy image URL"
                  required
                />

                <input
                  onBlur={blurHandler}
                  className="input input-bordered input-primary w-full order-4"
                  type="number"
                  name="price"
                  placeholder="Enter toy price"
                  required
                />

                <input
                  onBlur={blurHandler}
                  className="input input-bordered input-primary w-full order-5"
                  type="number"
                  name="rating"
                  placeholder="Enter toy rating"
                  required
                />

                <input
                  onBlur={blurHandler}
                  className="input input-bordered input-primary w-full order-6"
                  type="number"
                  name="quantity"
                  placeholder="Enter toy quantity"
                  required
                />

                <input
                  onBlur={blurHandler}
                  className="input input-bordered input-primary w-full order-7"
                  type="text"
                  name="description"
                  placeholder="Enter description"
                  required
                />

                <input
                  onBlur={blurHandler}
                  className="input input-bordered input-primary w-full order-8"
                  type="text"
                  name="sellerName"
                  placeholder="Enter seller name"
                  required
                  defaultValue={user?.name}
                />

                <input
                  onBlur={blurHandler}
                  className="input input-bordered input-primary w-full order-9"
                  type="email"
                  name="email"
                  placeholder="Enter seller email"
                  required
                  defaultValue={user?.email}
                />

                <div className="order-10">
                  <button className="btn btn-primary w-full text-gray-600" type="submit">
                    Add
                  </button>
                  <ToastContainer></ToastContainer>
                </div>
              </div>

              {/* error message */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddToy;
