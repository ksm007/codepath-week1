export default function Card({ name, description, image, link }) {
  return (
    <div className="card">
      <img src={image} alt={name} loading="lazy" />
      <h2>{name}</h2>
      <p>{description}</p>
      <button
        className="visit-button"
        onClick={() => window.open(link, "_blank")}
      >
        Visit
      </button>
    </div>
  );
}
