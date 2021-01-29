import React from 'react';
import Road from '../assets/road.svg';

const FeatureItem = ({title, text, icon, children}) => {
  return (
    <div className="col-span-4 mb-5 lg:mb-7 flex flex-col items-center">
      <div className='mb-3'>{children}</div>
      <h3 className="mb-1 text-center">{title}</h3>
      <span className="text-base font-normal text-center">{text}</span>
    </div>
  )
}

export default FeatureItem;