import React from 'react';
import GrandPa from './GrandPa';
import './FamilyTree.css'
const FamilyTree = () => {
const assets='diamond'

    return (
        <div className='family-tree'>
            <h2>Family Treee</h2>
            <GrandPa assets={assets}></GrandPa>
        </div>
    );
};

export default FamilyTree;