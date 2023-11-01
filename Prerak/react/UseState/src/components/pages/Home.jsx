import images from '../assets/images.jpg'
import { AiFillAndroid, AiFillBug } from 'react-icons/ai'
import { BiBrain } from 'react-icons/bi'

export default function Home() {
  return (
    <div style={{ fontSize: "22px" }}>
      <div style={styles.card}>
        <div>
          <img src={images} alt="" style={{ width: "400px" }} />
        </div>
        <div style={styles.cardDetail}>
          <h3>Mountain <span className='androidIcon'>{<AiFillAndroid />}</span> {<AiFillBug />}</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem facilis illo ducimus deserunt excepturi soluta. Nesciunt dolor commodi earum qui deleniti assumenda id quas totam voluptatum! Commodi eveniet reiciendis eum!</p>
          <BiBrain />
        </div>
      </div>
    </div>
  )
}

const styles = {
  card: {
    width: "410px",
    border: "3px solid black",
    margin: 20
  },
  cardDetail: {
    borderTop: "3px solid black",
    padding: "5px"
  }
}