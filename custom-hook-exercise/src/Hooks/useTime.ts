import { useEffect, useState } from "react"


function useTime(date: string) {
   const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   const [time, setTime] = useState<string | number>('')





   useEffect(() => {
    const now = new Date()
      if (date === "day" ) {
            let weekDay = new Date().getDay()
            let day = dayNames[weekDay]
            setTime(day)      
         } else if (date === "hour") {
            let hour = new Date().getHours()
            setTime(hour)
         } else if (date  === 'minute') {
            let minute = now.getMinutes()
            setTime(minute)
         }else if (date === "time") {
            let hour = now.getHours().toString().padStart(2, '0')
            let minute = now.getMinutes().toString().padStart(2, '0')
            setTime(`${hour}:${minute}`)

         }
   }, [date])
      return time
   }
   

export default useTime