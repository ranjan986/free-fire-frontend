import "./App.css";
import React from "react";
import Header from "./components/Header";
import TournamentInfo from "./components/TournamentInfo";
import QRPayment from "./components/QRPayment";
import RegisterForm from "./components/RegisterForm";
import Rules from "./components/Rules";
import Leaderboard from "./components/Leaderboard";
import MatchHistory from "./components/MatchHistory";
import UpcomingTournaments from "./components/UpcommingTournament";
import Sponsor from "./components/Sponsor";
import Footer from "./components/Footer"
import JoinGroups from "./components/JoinGroup";

function App() {
  return (
    <div>
      <Header />
      <TournamentInfo />
      <QRPayment />
      <RegisterForm />
      <JoinGroups />
      <Rules />
      <Leaderboard />
      <MatchHistory />
      <UpcomingTournaments />
      <Sponsor />
      <Footer />
    </div>
  )
}

export default App;