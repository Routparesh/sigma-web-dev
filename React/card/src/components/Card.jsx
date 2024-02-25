function Card(props) {
  
    return (
      <div>
         <h1>{props.name}</h1>
         <img src={props.image} alt=""  />
         <p>{props.food}</p>
      </div>
    )
  }
  
  export default Card;