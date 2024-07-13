import './card.css'
const Card = (image,title,description,duration) => {

    return (
        <div className="card">
            <img className="cardimage" src={image} alt="" />
            <div className="cardContent">
                <h3>{title}</h3>
                <p className="description">{description}</p>
                <span className="duration">{duration}</span>
            </div>

        </div>
    )
}

export default Card