import React from 'react';
import loaderAnim from '../../assets/anim/bumrungradLoader.json';
import Lottie from 'lottie-react';

export default function Loader() {
  const style = {
    height : 100
  }
  return (
    <div className='min-h-[40vh] flex justify-center items-center gap-4'>
        <Lottie style={style} animationData={loaderAnim} loop={true} />
    </div>
  )
}
