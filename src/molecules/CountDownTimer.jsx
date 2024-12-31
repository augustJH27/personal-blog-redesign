import React, { useEffect, useRef, useState } from 'react';
import CountDownCard from './CountDownCard';

const CountDownTimer = () => {

  const SecondsCardRef = useRef(null);
  const MinutesCardRef = useRef(null);
  const HoursCardRef = useRef(null);
  const DaysCardRef = useRef(null);

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const targetDate = new Date('2025-02-27T00:00:00.000Z');

    const updateTimer = () => {
      const now = new Date();
      const timeRemaining = targetDate.getTime() - now.getTime();

      if (timeRemaining > 0) {
        const calculatedDays = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const calculatedHours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
        const calculatedMinutes = Math.floor((timeRemaining / 1000 / 60) % 60);
        const calculatedSeconds = Math.floor((timeRemaining / 1000) % 60);

        setDays(calculatedDays);
        setHours(calculatedHours);
        setMinutes(calculatedMinutes);
        setSeconds(calculatedSeconds);
      } else {
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    };

    updateTimer();

    const intervalId = setInterval(() => {
      updateTimer();
      SecondsCardRef.current.classList.toggle('rotate');
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="countdown__container">
      <CountDownCard
        label="days"
        number={days}
        cardRef={DaysCardRef}
      />
      <CountDownCard
        label="hours"
        number={hours}
        cardRef={HoursCardRef}
      />
      <CountDownCard
        label="minutes"
        number={minutes}
        cardRef={MinutesCardRef}
      />
      <CountDownCard
        label="seconds"
        number={seconds}
        cardRef={SecondsCardRef}
      />
    </div>
  );
};

export default CountDownTimer;