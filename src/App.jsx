import { useState, useEffect } from "react";
import Card from "./Card.jsx";

import "./App.css";

function FetchData() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isChange, setIsChange] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something Went Wrong");
        }
        return res.json();
      })
      .then((data) => setData(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      {error && <div>Error:{error}</div>}
      {!data.length && !error && <div className="loader"></div>}
      {data &&
        data.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            email={item.email}
            address={item.address}
            isSelected={isChange?.id === item.id}
            onSelect={() => setIsChange(item)}
          />
        ))}
    </>
  );
}

export default FetchData;
