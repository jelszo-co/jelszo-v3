import React from 'react';

const Webpage = () => {
  return (
    <div id='webpage'>
      <div className='top-bar'>
        <span className='dot'></span>
        <span className='dot'></span>
        <span className='dot'></span>
        <span className='search'></span>
      </div>
      <div className='center'>
        <div className='profile'>
          <span className='upper'></span>
          <span className='lower'></span>
          <span className='lower-dot'></span>
        </div>
        <div className='text'>
          <span className='t1'></span>
          <span className='t2'></span>
          <span className='t3'></span>
          <span className='t4'></span>
          <span className='t5'></span>
        </div>
        <div className='list'>
          <div className='li1'>
            <div className='heading'>
              <span className='line'></span>
            </div>
            <span className='l1'></span>
            <span className='l2'></span>
            <span className='l3'></span>
          </div>
          <div className='li2'>
            <div className='heading'>
              <span className='line'></span>
            </div>
            <span className='l1'></span>
            <span className='l2'></span>
            <span className='l3'></span>
          </div>
        </div>
      </div>
      <div className='bottom-text'>
        <span className='upper'></span>
        <span className='lower'></span>
        <span className='lower2'></span>
      </div>
    </div>
  );
};

export default Webpage;
