import React from 'react';
import Dad from './Dad';
import Uncle from './Uncle';
import Aunt from './Aunt';

const GrandPa = ({assets}) => {
    return (
        <div>
           <h3>GrandPa</h3> 
           <section className='flex'>
            <Dad assets={assets}></Dad>
            <Uncle></Uncle>
            <Aunt></Aunt>
           </section>
        </div>
    );
};

export default GrandPa;