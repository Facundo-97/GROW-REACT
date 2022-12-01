import React, { useState, useEffect, Fragment } from "react";

export const FakeStoreApi = () => {
  const [store, setStore] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setStore(data);
    };
    fetchApi();
  }, []);

  return (
    <>
      <ul>
        {store ? (
          store.map((element) => <li key={element.id}>{element.title}</li>)
        ) : (
          <div>No hay stock</div>
        )}
      </ul>
    </>
  );
};
