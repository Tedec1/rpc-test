import { useState } from "react"
import Option from "./Option"
const Home = () => {
  const [select, setSelect] = useState({})

  return (
    <div>
      <span id="title">Pick Rock, Paper, or Scissors!</span>
      <div id="list">
        <Option name="Rock" value={1} setSelect={setSelect} />
        <Option name="Paper" value={2} setSelect={setSelect} />
        <Option name="Scissor" value={3} setSelect={setSelect} />
      </div>
      <div>
        currently selected: {select && select.name ? select.name : "none"}
      </div>
    </div>
  )
}

export default Home
