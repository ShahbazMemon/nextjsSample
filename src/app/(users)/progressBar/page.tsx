import React from 'react'
import CircleProgressBar from './CircleProgressBar';

const Page = () => {

    const progress = 60; // adjust this value to change the progress percentage

    return (
      <div>
        <h1>Circle Progress Bar</h1>
        <CircleProgressBar progress={progress} />
      </div>
    );
}

export default Page