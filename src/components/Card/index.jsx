import { useEffect } from "react";
import "./style.css";

export const Card = ({ student }) => {
  const { image, name, ancestry, house } = student;

  return (
    <div className={`Card Card-${house}`}>
      <div className="image-container">
        <img src={image} alt={student.name} />
      </div>
      <h3 className="Card__name">{name}</h3>
      <p className="Card__info">{house}</p>
      <p className="Card__info">Ancestry: {ancestry === "" ? "?" : ancestry}</p>
    </div>
  );
};
