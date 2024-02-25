import hotels from './Hotel.jsx'
import Card from "./components/Card"

function App() {
  
  return (
   <div>    
      {hotels.map((hotel,index) => (
        <Card 
          key={index}
          name={hotel.name}
          image={hotel.image}
          food={hotel.food[0]}
        />
      ))}
  </div>  
    
  )
}

export default App
