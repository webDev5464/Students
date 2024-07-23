import { useEffect, useState } from "react";

export default function MyUseEffect() {
  // const [reload, setReload] = useState(false);

  // const myFunction = () => {
  //   return "Hello World!";
  // };

  // useEffect(() => {
  //   console.log(myFunction());
  // }, [reload]);

  const [data, setData] = useState();

  const fetchRowData = async () => {
    const response = await fetch(
      "https://res.cloudinary.com/dpiiduvvx/raw/upload/v1703580765/API/productsAPI"
    );

    const objData = await response.json();

    setData([
      ...objData.earbud,
      ...objData.tshirt,
      ...objData.shoes,
      ...objData.tshirtWomen,
    ]);
  };

  useEffect(() => {
    fetchRowData();
  }, []);

  return (
    <>
      <div>
        {data?.map((val, i) => (
          <div key={i}>
            <img src={val.img1} alt="" />
          </div>
        ))}
      </div>
    </>
  );
}
