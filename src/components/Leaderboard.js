const Leaderboard = () => {
  const sampleLeaders = ["Team Alpha", "Team Bravo", "Team Legend"];
  
  return (
    <section className="leaderboard">
      <h2>🏅 Leaderboard</h2>
      <ol id="leaderboardList">
        {sampleLeaders.map((team, index) => (
          <li key={index}>{index + 1}. {team}</li>
        ))}
      </ol>
    </section>
  );
};

export default Leaderboard;
