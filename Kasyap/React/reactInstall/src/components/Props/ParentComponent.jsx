import ChildComponent from "./ChildComponent";
import Demo from "./Demo";

export default function ParentComponents() {
  return (
    <>
      <ChildComponent MyProps={{
        heading: "First Card",
        impTitle: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur non quam minima dicta. Ducimus adipisci architecto neque, consequuntur amet inventore placeat nisi, nihil iure, itaque harum ut ipsum illo sit.",
        title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
      }} />

      <ChildComponent MyProps={
        {
          heading: "Second Card",
          impTitle: "No Title...",
          title: "Card is not rendering..."
        }
      } />

      <Demo DemoProps={{ heading: "Hello World!" }} />
      <Demo DemoProps={{ heading: "This is a react" }} />
      {/* <Demo /> */}
      {/* <Demo /> */}
      {/* <Demo /> */}
      {/* <Demo /> */}

    </>
  )
}