import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function App() {

  let foodItems = ['aloo','dal','rooti','gobhi',"ghee"];
  // let foodItems = [];


  // if(foodItems.length === 0){
  //   return <h3>I am still hungry</h3>
  // }

  let emptyMessage =  foodItems.length === 0 ? <h3>I am still hungry</h3> : null;

  return <>
    <h1>Healthy food</h1>

    {
      emptyMessage
    }

    <ul className="list-group">
      {
        foodItems.map
          (item =>
            (<li key = {item} className="list-group-item">{item}</li>)
        )
      }
    </ul>
  </>
}

export default App
