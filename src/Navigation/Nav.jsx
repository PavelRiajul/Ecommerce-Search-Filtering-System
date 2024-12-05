
import { FiHeart } from "react-icons/fi"
import "./Nav.css"
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai"


function Nav({handleInputChange,query}) {
  return (
   <nav>
     <div className="nav_container">
      <input onChange={handleInputChange} value={query} className="search-input" type="text" placeholder="Enter your search shoes" />
     </div>
     <div className="profile-container">
      <a href="#"><FiHeart className="nav-icons"/></a>
      <a href="#"><AiOutlineShoppingCart className="nav-icons"/></a>
      <a href="#"><AiOutlineUserAdd className="nav-icons"/></a>
      
     </div>
   </nav>
  )
}

export default Nav