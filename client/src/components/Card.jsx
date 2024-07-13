import './card.css';

const Card = ({ image, title, description, duration }) => {
  return (
    <div className="card">
      <img className="card-image" src={image} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p className="description">{description}</p>
        <span className="duration">{duration} min read</span>
      </div>
    </div>
  );
};

export default Card;
