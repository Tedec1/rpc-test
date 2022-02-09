import { useState } from "react"
import Option from "./Option"
import './Home.css';

const numToVal = {
  0: "rock",
  1: "paper",
  2: "scissor"
}

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [select, setSelect] = useState({})
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      if(select.value === undefined) return;
      let result;
      result = await sendInput(select.value)
      console.log(result)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const sendInput = async (userInput) => {
    /*
    this will send user input and client wallet to the server and get a response,
    but for now it will just use a random number generator to test against
    */
    // console.log("loading...");
    const computerGuess = getRandomInt(3);
    if((userInput + 1) % 3 === computerGuess){
      return `the computer guessed ${numToVal[computerGuess]} you guessed ${numToVal[userInput]}, you lose!`
    } else if((userInput - 1) % 3 === computerGuess){
      return `the computer guessed ${numToVal[computerGuess]} you guessed ${numToVal[userInput]}, you win!`
    } else {
      return `the computer guessed ${numToVal[computerGuess]} you guessed ${numToVal[userInput]}, you tie!`
    }
  }

  const getRandomInt = (max) => {
    const rand = Math.floor(Math.random() * max);
    // console.log(rand);
    return rand
  }

  return (
    <div>
      <span id="title">Pick Rock, Paper, or Scissors!</span>
      <div id="list">
        <Option disabled={loading} name="Rock" value={0} setSelect={setSelect} />
        <Option disabled={loading} name="Paper" value={1} setSelect={setSelect} />
        <Option disabled={loading} name="Scissor" value={2} setSelect={setSelect} />
      </div>
      <div>
        currently selected: {select && select.name ? select.name : "none"}
      </div>
      <button disabled={loading} onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Home
