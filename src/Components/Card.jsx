import { AiFillStar } from "react-icons/ai"
import { BsFillBagFill } from "react-icons/bs"
function Card({img, title, star, reviews, prevPrice, newPrice }) {
  return (
    <>
    <div className="card">
    <img className="card-img" src={img} alt={title} />
    <div className="card-details">
      <h3 className="card-title">{title}</h3>
      <div className="card-reviews">
        <AiFillStar className="rating-star"/> <AiFillStar className="rating-star"/> <AiFillStar className="rating-star"/> <AiFillStar className="rating-star"/>
        <span className="total-reviews">{reviews}</span>
      </div>
      <div className="card-price">
        <div className="price">
          <del>{prevPrice}</del>{newPrice}
        </div>
        <div className="bag">
          <BsFillBagFill className="bag-icon"/>
        </div>
      </div>
    </div>
  </div>
    </>
    
  )
}

export default Card