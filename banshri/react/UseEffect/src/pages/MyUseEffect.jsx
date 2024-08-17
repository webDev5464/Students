import { useEffect } from "react";
import { useState } from "react";

function MyUseEffect() {
  const [products, setProducts] = useState();

  const fetchApi = async () => {
    const rowData = await fetch(
      "https://res.cloudinary.com/dpiiduvvx/raw/upload/v1703580765/API/productsAPI"
    );

    const jsonData = await rowData.json();

    setProducts(jsonData.earbud);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <div>
        {products
          ? products.map((x, i, a) => (
              <div key={x.id}>
                <h1>{x.title}</h1>

                <br />
              </div>
            ))
          : ""}
      </div>
    </>
  );
}

export default MyUseEffect;

// function noName (value, index, array) {

// }

// noName()
