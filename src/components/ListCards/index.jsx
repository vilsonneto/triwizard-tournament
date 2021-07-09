import "./style.css";
import { Card } from "../Card";

export const ListCards = ({ summonParticipants, studentsSelected }) => {
  return (
    <>
      <div className="ListCards">
        {studentsSelected.map((student, index) => {
          return <Card key={index} student={student} />;
        })}
      </div>
      <button className="Retry" onClick={summonParticipants}>
        Tentar novamente
      </button>
    </>
  );
};
