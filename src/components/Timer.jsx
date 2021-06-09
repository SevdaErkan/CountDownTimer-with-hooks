import React, { useState, useEffect, useRef } from "react";
import "../styles.css";
import TodayIcon from "@material-ui/icons/Today";

const Timer = () => {
   const [days, setDays] = useState("00");
   const [hours, setHours] = useState("00");
   const [minutes, setMinutes] = useState("00");
   const [seconds, setSeconds] = useState("00");

   let interval = useRef();
   const startTimer = () => {
      const countDownDate = new Date("Aug 1,2021 00:00:00").getTime();
      interval = setInterval(() => {
         const now = new Date().getTime();
         const distance = countDownDate - now;
         const days = Math.floor(distance / (1000 * 60 * 60 * 24));
         const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
         );
         const minutes = Math.floor(
            (distance % (1000 * 60 * 60)) / (1000 * 60)
         );
         const seconds = Math.floor((distance % (1000 * 60)) / 1000);

         if (distance < 0) {
            //stop timer
            clearInterval(interval.current);
         } else {
            //update timer
            setDays(days);
            setHours(hours);
            setMinutes(minutes);
            setSeconds(seconds);
         }
      }, 1000);
   };
   useEffect(() => {
      startTimer();
      return () => {
         clearInterval(interval.current);
      };
   }, []);

   return (
      <div className="App">
         <section className="timer-container">
            <section className="timer">
               <div>
                  <TodayIcon style={{ fontSize: "60px" }} />
                  <h2>Countdown Timer</h2>
                  <p>Countdown to a really special date.</p>
               </div>
               <div>
                  <section>
                     <p>{days}</p>
                     <p>
                        <small>Days</small>
                     </p>
                  </section>
                  <span>:</span>
                  <section>
                     <p>{hours}</p>
                     <p>
                        <small>Hours</small>
                     </p>
                  </section>
                  <span>:</span>
                  <section>
                     <p>{minutes}</p>
                     <p>
                        <small>Minutes</small>
                     </p>
                  </section>
                  <span>:</span>
                  <section>
                     <p>{seconds}</p>
                     <p>
                        <small>Seconds</small>
                     </p>
                  </section>
               </div>
            </section>
         </section>
      </div>
   );
};
export default Timer;
