import React, { useState } from 'react';
import './index.css';

export const Card = (props) => {
    const { name = '', type = '', cost, visible, id = '', choose, setChoose } = props;
    return (
        <div className={`card ${choose === id ? 'choosedCard' : ''}`} onMouseOver={() => setChoose(id)}>
            <div className='cardTitle'>
                <p>{name}</p>
                <div className='costContainer flexCenter'>{cost}</div>
            </div>
            <div className='descriptContainer flexCenter'>
                卡牌描述
            </div>
        </div>
    )
}