/* eslint-disable react/prop-types */

export default function ProductCard({ MyProps }) {
  return (
    <section className="card">
      <div>
        <img src={MyProps.img} alt="" />
      </div>
      <div>
        <p>{MyProps.title}</p>
      </div>
    </section>
  )
}
