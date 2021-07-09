import "./style.css";

export const StartGame = ({ setStartChallenge, summonParticipants }) => {
  return (
    <div>
      <h1>Torneio Tribruxo</h1>
      <p>Clique no botão para encontrar os feiticeiros</p>
      <button
        onClick={() => {
          setStartChallenge(true);
          return summonParticipants();
        }}
      >
        Começar
      </button>
    </div>
  );
};
