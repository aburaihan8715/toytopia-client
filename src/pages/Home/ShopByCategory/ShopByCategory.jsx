import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";

const ShopByCategory = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const stemCategory = data?.filter((item) => item.category === "STEM");
  const creativeArtsAndCraftsCategory = data?.filter((item) => item.category === "Creative Arts and Crafts");
  const languageAndLiteracyCategory = data?.filter((item) => item.category === "Language and Literacy");

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="inline-block text-3xl underline underline-offset-8 uppercase">Shop by category</h2>
        </div>

        <Tabs forceRenderTabPanel defaultIndex={1}>
          <TabList>
            <Tab>STEM</Tab>
            <Tab>Creative Arts and Crafts</Tab>
            <Tab>Language and Literacy</Tab>
          </TabList>

          <TabPanel>
            <div className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {stemCategory?.map((item) => (
                  <div key={item._id} className="card  glass">
                    <figure className="">
                      <img className="w-full" src="http://placehold.it/400x250" alt="car!" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{item.toyName}</h2>
                      <p>Price : {item.price}</p>
                      <p>Rating : {item.rating}</p>
                      <div className="card-actions justify-end">
                        <Link to={`/viewDetails/${item._id}`}>
                          <button className="btn btn-primary">view details</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {creativeArtsAndCraftsCategory?.map((item) => (
                  <div key={item._id} className="card  glass">
                    <figure>
                      <img className="w-full" src="http://placehold.it/400x250" alt="car!" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{item.toyName}</h2>
                      <p>Price : {item.price}</p>
                      <p>Rating : {item.rating}</p>
                      <div className="card-actions justify-end">
                        <Link to={`/viewDetails/${item._id}`}>
                          <button className="btn btn-primary">view details</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {languageAndLiteracyCategory?.map((item) => (
                  <div key={item._id} className="card  glass">
                    <figure>
                      <img className="w-full" src="http://placehold.it/400x250" alt="car!" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{item.toyName}</h2>
                      <p>Price : {item.price}</p>
                      <p>Rating : {item.rating}</p>
                      <div className="card-actions justify-end">
                        <Link to={`/viewDetails/${item._id}`}>
                          <button className="btn btn-primary">view details</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopByCategory;
