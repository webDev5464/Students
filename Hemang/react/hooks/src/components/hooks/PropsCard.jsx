/* eslint-disable react/prop-types */
export default function PropsCard({ myProps }) {
  return (
    <div className="cardParent">
      {/* card todo */}
      <p>Todo Title : {myProps.todo}</p>

      <hr />

      <p className="cardPriceDetail">
        {/* complete */}
        <span>Task : {myProps.process}</span>

        {/* user id */}
        <span>User Id : {myProps.id}</span>
      </p>
    </div>
  )
}