import Nav from "./Navigation/Nav"
import Recommended from "./Recommended/Recommended"
import Sidebar from "./Sidebar/Sidebar"
import Products from "./Products/Products"
import {useState} from "react";
import  products from  "./db/data.js"
import Card from "./Components/Card.jsx";

function App(){
    const  [selectedCategory,setSelectedCategory] = useState(null);

    //Input Filter-------------
    const [query,setQuery] = useState("")
     
    const handleInputChange = (event)=>{
        setQuery(event.target.value)
    }
    const filteredItems = products.filter((product) =>product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()!== -1))
     //Radio Filter-------------
     const handleChange = event =>{
      setSelectedCategory(event.target.value)
     }
     //Buttons Filter-------------
     const handleClick = event =>{
      setSelectedCategory(event.target.value)
     }

     function filteredData  (products,selected,query){
      let filteredProducts = products

      //Filtering Input Items---
      if(query){
        filteredProducts=filteredItems
      }
      //selected filter
      if(selected){
        filteredProducts=filteredProducts.filter(
        ({category,color,company,newPrice,title}) =>
        category === selected ||
        color === selected ||
        company === selected ||
        newPrice === selected ||
        title === selected 
    )
      }
      return filteredProducts.map(({img,title,reviews,prevPrice,newPrice})=>(
        <Card
        img={img}
        title={title}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}
        key={Math.random()}/>
      ))
     }
     const result = filteredData(products,setSelectedCategory,query)
  return (
    <div>
      <Sidebar handleChange={handleChange}/>
      <Nav/>
      <Recommended/>
      <Products/>
    </div>
  )
}
export default App