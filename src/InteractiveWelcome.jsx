import { useState } from "react"
import { Welcome } from "./Welcome"

export function InteractiveWelcome() {
  const [person, setPerson] = useState("")

  function handlePersonToGreet(event) {
    setPerson(event.target.value)
  }
  return(
    <div>
      <input onChange={handlePersonToGreet} type="text" />
      <Welcome name={person}/>
    </div>
  )
}