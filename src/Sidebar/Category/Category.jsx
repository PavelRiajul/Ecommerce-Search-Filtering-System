import Input from "../../Components/Input"
import "./Category.css"

function Category({handleChange}) {
  
  return (
    <div>
    <h2 className="sidebar-title">Category</h2>

    <div className="sidebar-items ">
     <label className="sidebar-label-container">
      <input onChange={handleChange} type="radio" value="" name="test" />
      <span className="checkmark"></span>All
     </label>
     <Input
     handleChange={handleChange}
     value="falts"
     title="Falts"
     name="test"
     />
     <Input
     handleChange={handleChange}
     value="sandals"
     title="Handals"
     name="test"
     />
     <Input
     handleChange={handleChange}
     value="heels"
     title="Heels"
     name="test"
     />
    </div>
  </div>
  )
}

export default Category