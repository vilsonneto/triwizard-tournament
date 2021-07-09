import "./App.css";
import { useEffect, useState } from "react";
import { ListCards } from "./components/ListCards";
import { StartGame } from "./components/StartGame";

function App() {
  const [studentsList, setStudentsList] = useState([]);
  const [studentsSelected, setStudentsSelected] = useState([]);
  const [startChallenge, setStartChallenge] = useState(false);

  useEffect(() => {
    fetch("http://hp-api.herokuapp.com/api/characters/students")
      .then((request) => request.json())
      .then((request) => setStudentsList([...request]))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log(studentsSelected);
  }, [studentsSelected]);

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  let witchs = [...studentsList];
  const summonParticipants = () => {
    witchs = [...studentsList];
    let witchsSelected = [];

    for (let i = 0; i < 3; i++) {
      console.log(witchs);
      let studentId = getRandomIntInclusive(0, witchs.length - 1);
      let selected = witchs[studentId];

      witchs = [...witchs].filter(
        (student) => student.house !== selected.house
      );

      witchsSelected = [...witchsSelected, selected];
      console.log(witchsSelected);
      setStudentsSelected([...witchsSelected]);
    }

    return setStudentsSelected([...witchsSelected]);
  };

  return (
    <div className="App">
      <div className="App-header">
        {startChallenge ? (
          <ListCards
            studentsSelected={studentsSelected}
            summonParticipants={summonParticipants}
          />
        ) : (
          <StartGame
            setStartChallenge={setStartChallenge}
            summonParticipants={summonParticipants}
          />
        )}
      </div>
    </div>
  );
}

export default App;
