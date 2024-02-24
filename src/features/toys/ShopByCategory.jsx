import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import LoadingSpinner from "../../ui/LoadingSpinner";

const ShopByCategory = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://toytopia-server-xi.vercel.app/toys")
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
    <div className="px-2 py-8 sm:px-10">
      <div className="">
        <div className="mb-10 text-center">
          <h2 className="inline-block text-3xl font-semibold underline uppercase underline-offset-8 text-error">Shop by category</h2>
        </div>

        <div className="">
          <Tabs forceRenderTabPanel defaultIndex={1}>
            <TabList className="flex gap-5">
              <Tab
                style={{ border: "1px solid gray", borderRadius: "5px", padding: "5px", color: "#555" }}
                className="transition-all duration-500 outline-none cursor-pointer"
              >
                STEM
              </Tab>
              <Tab
                style={{ border: "1px solid gray", borderRadius: "5px", padding: "5px", color: "#555" }}
                className="transition-all duration-500 outline-none cursor-pointer"
              >
                Creative Arts and Crafts
              </Tab>
              <Tab
                style={{ border: "1px solid gray", borderRadius: "5px", padding: "5px", color: "#555" }}
                className="transition-all duration-500 outline-none cursor-pointer"
              >
                Language and Literacy
              </Tab>
            </TabList>

            <TabPanel>
              <div className="mt-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:grid-cols-4">
                  {stemCategory?.map((item) => (
                    <div data-aos="zoom-in" key={item._id} className="border rounded-lg card">
                      <figure className="h-40">
                        <img className="object-cover w-full h-full" src={item.toyPhotoUrl} alt="toy" />
                      </figure>
                      <div className="card-body">
                        <h2 className="capitalize card-title">{item.toyName}</h2>
                        <p>Price : {item.price}</p>
                        <p>Rating : {item.rating}</p>
                        <div className="justify-end card-actions">
                          <Link to={`/viewDetails/${item._id}`}>
                            <button className="rounded btn btn-accent btn-sm">view details</button>
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
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:grid-cols-4">
                  {creativeArtsAndCraftsCategory?.map((item) => (
                    <div data-aos="zoom-in" key={item._id} className="border rounded-lg card">
                      <figure className="h-40">
                        <img className="object-cover w-full h-full" src={item.toyPhotoUrl} alt="car!" />
                      </figure>
                      <div className="card-body">
                        <h2 className="capitalize card-title">{item.toyName}</h2>
                        <p>Price : {item.price}</p>
                        <p>Rating : {item.rating}</p>
                        <div className="justify-end card-actions">
                          <Link to={`/viewDetails/${item._id}`}>
                            <button className="rounded btn btn-accent btn-sm">view details</button>
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
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:grid-cols-4">
                  {languageAndLiteracyCategory?.map((item) => (
                    <div data-aos="zoom-in" key={item._id} className="border rounded-lg card">
                      <figure className="h-40">
                        <img className="object-cover w-full h-full" src={item.toyPhotoUrl} alt="car!" />
                      </figure>
                      <div className="card-body">
                        <h2 className="capitalize card-title">{item.toyName}</h2>
                        <p>Price : {item.price}</p>
                        <p>Rating : {item.rating}</p>
                        <div className="justify-end card-actions">
                          <Link to={`/viewDetails/${item._id}`}>
                            <button className="rounded btn btn-accent btn-sm">view details</button>
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
    </div>
  );
};

export default ShopByCategory;
