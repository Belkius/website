//import './App.css';
import React, {ReactDOM, useState, useEffect} from 'react';
import axios from 'axios';
import {render} from 'react-dom';
import { useHistory } from 'react-router-dom';





const Dart = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [score, setScore] = useState(301)
  const [multiplier, setMultiplier] = useState(3)
  const [playerTurn, setPlayerTurn] = useState(1)

  const fetchData = async () => {
    setLoading(true)
    const result = await axios.get('http://127.0.0.1:8000/Dart')
    setData(result.data)
    setLoading(false)
  }
  const handlePoints = (value) => {
    if (value == 25 || value == 50) {
      setScore(player1.score - value)
    }
    else{
    setScore(score - (value * multiplier))
    }
  }

  function handleThrow(value) {
    const currentPlayer = player1;

  if (value === 25 || value === 50) {
    currentPlayer.score -= value;
  } else {
    currentPlayer.score -= value * multiplier;
  }

  if (currentPlayer.score < 0) {
    currentPlayer.score = 0;
  }
 
  // Switch turns
  setPlayerTurn(playerTurn === 1 ? 2 : 1);

  // Update the score of player one
  setScore(currentPlayer.score);

  }

  const points = [
    { label: '20', value: 20, color: "bg-[#C4344F]" },
    { label: '19', value: 19, color: "bg-[#22d3ee]" },
    { label: '18', value: 18, color: "bg-[#C4344F]" },
    { label: '17', value: 17, color: "bg-[#22d3ee]" },
    { label: '16', value: 16, color: "bg-[#C4344F]" },
    { label: '15', value: 15, color: "bg-[#22d3ee]" },
    { label: '14', value: 14, color: "bg-[#C4344F]" },
    { label: '13', value: 13, color: "bg-[#22d3ee]" },
    { label: '12', value: 12, color: "bg-[#C4344F]" },
    { label: '11', value: 11, color: "bg-[#22d3ee]" },
    { label: '10', value: 10, color: "bg-[#C4344F]" },
    { label: '9', value: 9, color: "bg-[#22d3ee]" },
    { label: '8', value: 8, color: "bg-[#C4344F]" },
    { label: '7', value: 7, color: "bg-[#22d3ee]" },
    { label: '6', value: 6, color: "bg-[#C4344F]" },
    { label: '5', value: 5, color: "bg-[#22d3ee]" },
    { label: '4', value: 4, color: "bg-[#C4344F]" },
    { label: '3', value: 3, color: "bg-[#22d3ee]" },
    { label: '2', value: 2, color: "bg-[#C4344F]" },
    { label: '1', value: 1, color: "bg-[#22d3ee]" },
    { label: 'Miss', value: 0, color: "bg-[#C4344F]" },
  ]

  class Player {
    constructor(name, score) {
      this.name = name
      this.score = score
      this.throws = 3
      this.average = 0
    }
    updateScore(value){
      this.score = this.score - value
    }
  }

  class Match {
    constructor(players) {
      this.players = players
      this.rounds = 0
      this.sets = 0
      this.legs = 0
    }

  }

  const player1 = new Player("John", 201)
  const player2 = new Player("Jane", 301)

  const match = new Match([player1, player2])

  player2.updateScore(2)

  return (
    <>

      <div>
        <h1 className="font-primary font-semibold text-2xl lg:text-5xl text-center text-white mb-2 md:py-6">Dart Scoreboard</h1>
      </div>
{/*
      <div>
        <h2 className="text-center font-semibold text-xl text-white mb-6 ">Play | Leaderboard</h2>
      </div>
*/}

      <div className="grid grid-cols-5 place-items-center justify-between gap-4 mx-10 my-4">
        <button className="h-16 w-16 md:h-24 md:w-24 lg:h-32 lg:w-32 py-2 px-2 rounded-md text-white font-medium bg-[#C4344F]"
        onClick={() => {}}>New game</button>
        <button className="h-16 w-16 md:h-24 md:w-24 lg:h-32 lg:w-32 py-2 px-2 rounded-md text-white font-medium bg-[#C4344F]"
        onClick={() => {}}>Undo</button>
        <button className={`h-16 w-16 md:h-24 md:w-24 lg:h-32 lg:w-32 py-2 px-2 border-4 rounded-md text-white font-medium bg-[#22d3ee] ${multiplier === 1 ? 'border-[#C4344F]' : 'border-transparent'}`}
        onClick={() => setMultiplier(1)}>x1</button>
        <button className={`h-16 w-16 md:h-24 md:w-24 lg:h-32 lg:w-32 py-2 px-2 border-4 rounded-md text-white font-medium bg-[#22d3ee] ${multiplier === 2 ? 'border-[#C4344F]' : 'border-transparent'}`}
        onClick={() => setMultiplier(2)}>x2</button>
        <button className={`h-16 w-16 md:h-24 md:w-24 lg:h-32 lg:w-32 py-2 px-2 border-4 rounded-md text-white font-medium bg-[#22d3ee] ${multiplier === 3 ? 'border-[#C4344F]' : 'border-transparent'}`}
        onClick={() => setMultiplier(3)}>x3</button>
      </div>
      <div className="border-2 border-[#1f1f1f] rounded-xl mx-5 lg:mx-16"></div>

      <div className="grid grid-cols-5 place-items-center justify-evenly md:grid-cols-6 lg:grid-cols-9 gap-4 mx-10 my-4">
        {points.map((button) => (
          <button
            key={button.label}
            className={`h-16 w-16 md:h-24 md:w-24 lg:h-32 lg:w-32 py-2 px-2 rounded-md text-white font-medium ${button.color}`}
            onClick={() => handlePoints(button.value)}
          >
            {button.label}
          </button>
        ))}
        <div></div><div className="block md:hidden lg:block"></div>
        <div className="hidden lg:block"></div><div className="hidden lg:block"></div>
        <button className="h-16 w-16 md:h-24 md:w-24 lg:h-32 lg:w-32 py-2 px-2 rounded-md text-white font-medium bg-[#22d3ee]"
        onClick={() => handlePoints(25)}>25</button>
        <button className="h-16 w-16 md:h-24 md:w-24 lg:h-32 lg:w-32 py-2 px-2 rounded-md text-white font-medium bg-[#C4344F]"
        onClick={() => handlePoints(50)}>50</button>
      </div>


      <div className="py-12 grid grid-cols-2 place-items-center justify-between lg:grid-cols-4 gap-x-2 gap-y-4">
          <div className="h-24 w-48 relative bg-[#1A1A1A]">
            <div className="font-primary text-white group-hover:text-[#C4344F] text-2xl pt-2 px-4 font-semibold">
              {player2.name}<br/>
              Score: {player1.score}
            </div>
          </div>
          <div className="h-24 w-48 relative bg-[#1A1A1A]">
            <div className="font-primary text-white group-hover:text-[#C4344F] text-2xl pt-2 px-4 font-semibold">
              Throws
            </div>
            <div className="flex justify-between">
              <div className={`h-4 w-4 mx-4 mt-3 border-2 border-white ${player1.throws > 0 ? 'bg-[#ffffff]' : ''}`}></div>
              <div className={`h-4 w-4 mx-4 mt-3 border-2 border-white ${player1.throws > 1 ? 'bg-[#ffffff]' : ''}`}></div>
              <div className={`h-4 w-4 mx-4 mt-3 border-2 border-white ${player1.throws > 2 ? 'bg-[#ffffff]' : ''}`}></div>
            </div>
          </div> 
          <div className="h-24 w-48 relative bg-[#1A1A1A]">
            <div className="font-primary text-white group-hover:text-[#C4344F] text-2xl pt-2 px-4 font-semibold">
              {player2.name}<br/>
              Score: {player2.score}
            </div>
          </div>
          <div className="h-24 w-48 relative bg-[#1A1A1A]">
            <div className="font-primary text-white group-hover:text-[#C4344F] text-2xl pt-2 px-4 font-semibold">
              Throws
            </div>
            <div className="flex justify-between">
              <div className={`h-4 w-4 mx-4 mt-3 border-2 border-white ${player2.throws > 0 ? 'bg-[#ffffff]' : ''}`}></div>
              <div className={`h-4 w-4 mx-4 mt-3 border-2 border-white ${player2.throws > 1 ? 'bg-[#ffffff]' : ''}`}></div>
              <div className={`h-4 w-4 mx-4 mt-3 border-2 border-white ${player2.throws > 2 ? 'bg-[#ffffff]' : ''}`}></div>
            </div>
          </div>
      </div>
    </>
  );
}
export default Dart;
