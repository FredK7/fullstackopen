import {useState} from 'react'

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}
const Button = (props) =>{
  return(
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const App = () => {

  const [counter, setCounter] = useState(0)
  console.log('rendering with counter value', counter)

  const increaseByOne = () => {
    setCounter(counter + 1)
    console.log('increasing, value before', counter)
  }
  const decreaseByOne = () => {
    setCounter(counter - 1)
    console.log('decreasing, value before', counter)
  }
  const setToZero = () => {
    setCounter(0)
    console.log('resetting to zero, value before', counter)
  }
  return (
    <>
    <Display counter = {counter}/>
    <Button onClick = {increaseByOne} text="Increase"/>
    <Button onClick={setToZero} text="Zero"/> 
    <Button onClick={decreaseByOne} text="Decrease"/>
    </>
  )
}


export default App

