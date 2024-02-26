import './Card.css'

function Card({id, title, body}){
    return(
        <div className="card">
            <h2>{id}</h2>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    )
}

export default Card;