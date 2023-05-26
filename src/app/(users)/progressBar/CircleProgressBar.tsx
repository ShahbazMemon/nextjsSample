import React from 'react';
import style from './CircleProgressBar.module.css';

const CircleProgressBar = ({ progress } : any) => {
  const radius = 50; // adjust this value to change the size of the progress bar
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg className={style.circleProgress} width={radius * 2} height={radius * 2}>
      <circle
        className={style.circleProgressBg}
        r={radius}
        cx={radius}
        cy={radius}
        strokeWidth="4"
      />
      <circle
        className={style.circleProgressBar}
        r={radius}
        cx={radius}
        cy={radius}
        strokeWidth="4"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
      />
    </svg>
  );
};

export default CircleProgressBar;
