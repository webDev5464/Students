export default function PersonData({ personValue }) {
  return (
    <>
      <h2>{personValue.fname} {personValue.lname}</h2>
      <p>{personValue.email}</p>
    </>
  )
}