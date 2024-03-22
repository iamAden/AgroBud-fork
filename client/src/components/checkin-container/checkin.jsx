import React, { useState } from 'react';
import './checkin.css';
import coin from "./coin.png";

const Checkin = () => {

    const [coinData, setCoinData] = useState([
        { day: 1, claimed: true, value: "+1" },
        { day: 2, claimed: false, value: "+1" },
        { day: 3, claimed: false, value: "+1" },
        { day: 4, claimed: false, value: "+1" },
        { day: 5, claimed: false, value: "+1" },
        { day: 6, claimed: false, value: "+1" },
        { day: 7, claimed: false, value: "+1" },
    ]);

    const handleClaim = (index) => {
        const updatedCoinData = [...coinData];
        updatedCoinData[index].claimed = !updatedCoinData[index].claimed;
        setCoinData(updatedCoinData);
        
    };

    return(
        <div id='checkin'>
            <div id="checkin-container">
               {coinData.map((item, index) => (
                    <button
                        key={index}
                        className={`coin-btn ${item.claimed ? "true-btn" : "coin-btn"}`}
                        onClick={() => handleClaim(index)}
                        disabled={item.claimed} // Disable the button if claimed is true
                    >
                        Day: {item.day}
                        <br></br>
                        <img src={coin} id="illustration-big-coin" alt="Coin"></img>
                        <br></br>
                        {item.value}
                    </button>
                ))}
            </div>
         </div>
    );
}

export default Checkin;