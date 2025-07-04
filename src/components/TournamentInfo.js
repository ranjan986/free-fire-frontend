import { useEffect, useState } from 'react';

const TournamentInfo = () => {
  const [timer, setTimer] = useState("");

  useEffect(() => {
    const targetDate = new Date("2025-07-05T00:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimer("Event Started!");
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const second = Math.floor((distance % (1000*60)) /1000);
        setTimer(`${days}d ${hours}h ${minutes}m ${second}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="tournament-info">
      <div className="countdown">
        <h3>⏳ Time Left:</h3>
        <p id="timer">{timer}</p>
      </div>
      <h2>Tournament Details</h2>
      <ul>
        <li>🕒 Date: 5th July 2025</li>
        <li>🎮 Mode: Squad (4 Players)</li>
       <li>🏆 Prize Pool: ₹500 1st winner, ₹200 2nd winner</li>
        <li>💰 Entry Fee: ₹20 per player</li>
      </ul>
    </section>
  );
};
export default TournamentInfo;
