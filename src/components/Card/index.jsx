import "./style.css";

export const Card = ({ student }) => {
  const { image, ancestry, house } = student;
  return (
    <div className={`Card Card-${house}`}>
      <img src={image} alt={student.name} />
      <h3>{student.name}</h3>
      <p>{house}</p>
      <p>Ancestry: {ancestry}</p>
    </div>
  );
};
