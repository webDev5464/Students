export default function App() {
  return (
    <form>
      <div>
        <input type="text" placeholder="Product Title" />
      </div>
      <div>
        <input type="text" placeholder="Image-1 URL" />
      </div>
      <div>
        <input type="text" placeholder="Image-2 URL" />
      </div>
      <div>
        <input type="number" placeholder="Price" />
      </div>
      <div>
        <input type="number" placeholder="Discount" />
      </div>
      {/* <div>
        <select name="" id="">
          <option value="Home">Home</option>
          <option value="About">About</option>
        </select>
      </div> */}
      <input type="submit" value="Add Product in Database" />
    </form>
  )
}