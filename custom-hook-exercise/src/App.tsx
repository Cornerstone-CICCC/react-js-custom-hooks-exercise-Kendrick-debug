import useTime from "./Hooks/useTime";



const App = () => {
  const day = useTime("day")
  const hour = useTime("hour")
  const minute = useTime("minute")
  const fullTime = useTime("time")



  
return (

  <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
    <h2>Day: {day}</h2>
     <h2>Time: {fullTime}</h2>
    <h2>hour: {hour}</h2>
    <h2>Minutes: {minute}</h2>
    

  </div>
)
}

export default App