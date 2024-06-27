import axios from "axios";
import React from "react";

const FetchApiData = () => {
  const [userData, setUserData] = React.useState(null);
  React.useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      //   console.log(res.data);
      setUserData(res.data);
    });
  }, []);
  console.log(userData);
  return (
    <>
      <div className="flex flex-row flex-wrap ">
        {userData
          ? userData.map((item) => {
              return (
                <>
                  <div
                    key={item.id}
                    className="p-5 border-2 border-black bg-blue-100 m-5 w-[300px] max-h-[500px]"
                  >
                    <div className="py-1">
                      <strong className="text-red-800">ID:</strong> {item.id}
                    </div>
                    <div className="py-1">
                      <strong className="text-red-800">Name:</strong>{" "}
                      {item.name}
                    </div>
                    <div className="py-1">
                      <strong className="text-red-800">Username:</strong>{" "}
                      {item.username}
                    </div>
                    <div className="py-1">
                      <strong className="text-red-800">Email:</strong>{" "}
                      {item.email}
                    </div>
                    <div className="py-1">
                      <strong className="text-red-800">Address:</strong>
                      {item.address.city}
                      <div>{item.address.street}</div>
                      <div>{item.address.suite}</div>
                      {item.address.zipcode}
                    </div>
                    <div className="py-1">
                      <strong className="text-red-800">Company:</strong>
                      {item.company.name}
                      <div>{item.company.catchPhrase}</div>
                      <div>{item.company.bs}</div>
                    </div>
                    <div className="py-1">
                      <strong className="text-red-800">Phone:</strong>{" "}
                      {item.phone}
                    </div>
                  </div>
                </>
              );
            })
          : "Data is unavailable"}
      </div>
    </>
  );
};

export default FetchApiData;
