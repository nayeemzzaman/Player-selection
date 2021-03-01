import React from 'react';
import './PlayerCart.css';
const PlayerCart = (props) => {
    const playerInfo=props.playerInfo;  
 
    let total=0;
    for(let i=0;i<playerInfo.length;i++) {
        total+= parseInt(playerInfo[i].salary);
    }
    return (
        <div >
            <div className='cartFirstPart'>
                <h4>Selected Players: {props.playerInfo.length}</h4>
                <h5>Team Budget: ${total}</h5>
            </div>
            <div className="cartSecondPart">
                {
                    playerInfo.map(un =>
                    <div className='cartItem'>
                        <div>
                            <h6>{un.name}</h6>
                            <p><strong>Salary: ${un.salary}</strong></p>
                            <button 
                                onClick={()=>props.handleDeletePlayer(un)}
                                className='cartButton'>Delete</button>
                        </div>
                        <div>
                            <img src={un.img} alt=""/>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default PlayerCart;