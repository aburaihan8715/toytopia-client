import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import useTitle from "../hooks/useTitle";
import { Toaster, toast } from "react-hot-toast";

const UpdateToy = () => {
  const [toyData, setToyData] = useState({});
  const data = useLoaderData();
  const { price, quantity, description, _id, toyName } = data;
  useTitle("UpdateToy");

  const changeHandler = (event) => {
    const value = event.target.value;
    const field = event.target.name;
    const newToyData = { ...toyData };
    newToyData[field] = value;
    setToyData(newToyData);
  };

  const updateToyHandler = (event) => {
    event.preventDefault();

    const updatedToy = {
      quantity: toyData.quantity || quantity,
      price: toyData.price || price,
      description: toyData.description || description,
    };

    // console.log(updatedToy);

    fetch(`https://toytopia-server-xi.vercel.app/toys/${_id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Successfully updated!");
        }
        event.target.reset();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="py-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl inline-block underline underline-offset-8 uppercase font-semibold text-error">update toy</h2>
        </div>

        <div>
          <form onSubmit={updateToyHandler}>
            <div className="space-y-3 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select
                  name="subCategory"
                  disabled
                  onChange={changeHandler}
                  className="select select-secondary w-full order-1"
                  defaultValue="sub category"
                >
                  <option disabled defaultValue="sub category">
                    sub category
                  </option>
                  <option disabled value="STEM">
                    STEM
                  </option>
                  <option disabled value="Creative Arts and Crafts">
                    Creative Arts and Crafts
                  </option>
                  <option disabled value="Language and Literacy">
                    Language and Literacy
                  </option>
                </select>

                <input
                  onChange={changeHandler}
                  className="input input-bordered input-secondary w-full order-2"
                  type="text"
                  name="toyName"
                  placeholder="Enter toy name"
                  required
                  defaultValue={toyName}
                  disabled
                />

                <input
                  onChange={changeHandler}
                  className="input input-bordered input-secondary w-full order-3"
                  type="url"
                  name="photo"
                  placeholder="Enter toy image URL"
                  required
                  disabled
                />

                <input
                  onChange={changeHandler}
                  className="input input-bordered input-secondary w-full order-4"
                  type="number"
                  name="price"
                  placeholder="Enter toy price"
                  required
                  defaultValue={price}
                />

                <input
                  onChange={changeHandler}
                  className="input input-bordered input-secondary w-full order-5"
                  type="number"
                  name="rating"
                  placeholder="Enter toy rating"
                  required
                  disabled
                />

                <input
                  onChange={changeHandler}
                  className="input input-bordered input-secondary w-full order-6"
                  type="number"
                  name="quantity"
                  placeholder="Enter toy quantity"
                  required
                  defaultValue={quantity}
                />

                <input
                  onChange={changeHandler}
                  className="input input-bordered input-secondary w-full order-7"
                  type="text"
                  name="description"
                  placeholder="Enter description"
                  required
                  defaultValue={description}
                />

                <input
                  onChange={changeHandler}
                  className="input input-bordered input-secondary w-full order-8"
                  type="text"
                  name="sellerName"
                  placeholder="Enter seller name"
                  required
                  disabled
                />

                <input
                  onChange={changeHandler}
                  className="input input-bordered input-secondary w-full order-9"
                  type="email"
                  name="email"
                  placeholder="Enter seller email"
                  required
                  disabled
                />

                <div className="order-10">
                  <button className="btn btn-accent w-full text-white" type="submit">
                    Update
                  </button>
                  <Toaster position="top-center" reverseOrder={false} />
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

export default UpdateToy;
