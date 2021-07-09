import "./style.css";
import { Card } from "../Card";

export const ListCards = ({ summonParticipants, studentsSelected }) => {
  return (
    <div>
      <div>
        {studentsSelected.map((student, index) => {
          return <Card key={index} student={student} />;
        })}
      </div>
      <button onClick={summonParticipants}>Tentar novamente</button>
    </div>
  );
};
