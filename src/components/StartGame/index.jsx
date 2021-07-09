import "./style.css";

export const StartGame = ({ setStartChallenge, summonParticipants }) => {
  return (
    <div className="Start-container">
      <img
        src="https://1.bp.blogspot.com/-TkkougmMVZI/WncxopDkfaI/AAAAAAAAEv8/ngBWLcZmfa0wu5xSZhleo3m5ydI6rBFQgCLcBGAs/s640/tumblr_n9skg4Fens1qzcmp3o2_500.gif"
        alt="award"
      />
      <h1>Torneio Tribruxo</h1>
      <p>Clique no botão para encontrar os feiticeiros</p>
      <button
        className="Start"
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
