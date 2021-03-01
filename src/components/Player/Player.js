
import { useEffect, useState } from 'react';
import './Player.css';
import userData from '../../data/data.json';
import Profile from '../Profile/Profile';
import PlayerCart from '../PlayerCart/PlayerCart';
const Player = () => {
    const [users, setUser]= useState([]);
    const [list, setList]= useState([]);
    useEffect(()=>{
        setUser(userData);
    },[])
    const handleAddFriend=(playerInfo)=>{
        console.log(playerInfo);
        if(list.indexOf(playerInfo)!==-1){
            alert('Already added in friend list!');
        }else{
            const newList=[...list, playerInfo];
            setList(newList);
        }
    }
    const handleDeletePlayer=(playerInfo)=>{
        const newList=[...list];
        const idx=newList.indexOf(playerInfo);
        newList.splice(idx,1);
        setList(newList);

    }
    return (
        <div className='container'>
            <div className='users'>
            {
                users.map(user =><Profile 
                    playerInfo={user}key={user.id} handleAddFriend={handleAddFriend}
                    ></Profile>)
            }
            </div>
            <div className='cart'>
                <PlayerCart handleDeletePlayer={handleDeletePlayer} playerInfo={list}></PlayerCart>
            </div>
        </div>
    );
};

export default Player;