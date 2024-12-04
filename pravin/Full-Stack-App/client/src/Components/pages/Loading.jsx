import { lineSpinner } from "ldrs";

const Loading = () => {
  lineSpinner.register();
  return (
    <>
      <section style={{display:"flex", height: "75%", justifyContent:"center",justifyItems:"center",alignItems:"center"}}>
        <l-line-spinner
          size="40"
          stroke="3"
          speed="1"
          color="black"
        ></l-line-spinner>
      </section>
    </>
  );
};

export default Loading;
