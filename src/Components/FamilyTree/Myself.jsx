import React from 'react';
import Special from './Special';

const Myself = ({assets}) => {
    return (
        <div>
            <h3>Myself</h3>
            <Special assets={assets}></Special>
        </div>
    );
};

export default Myself;