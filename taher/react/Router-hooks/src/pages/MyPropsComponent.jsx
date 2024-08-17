/* eslint-disable react/prop-types */

function MyPropsComponent({ myValue }) {
  return (
    <div>
      <h1>{myValue.title}</h1>
      <img src={myValue.img} alt="" />
    </div>
  );
}

export default MyPropsComponent;
