
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Profile.css';
const Profile = (props) => {
    const {img, name, country,role, batting,salary, bowling} = props.playerInfo;
    return (
        <div className='user'>
            <div className='profile'>
                <div className='profileImg'>
                    <div>
                        <img src={img} alt=""/>
                    </div>
                    <div>
                        <h4>{name}</h4>
                        <p><strong>{country}</strong></p> 
                        <p><strong>Salary: ${salary}</strong></p>
                    </div>
                </div>
                <div className='profileInfo'>
                    <p><strong>Role:</strong> {role}</p>
                    <p><strong>Batting:</strong> {batting}</p>
                    <p><strong>Bowling:</strong> {bowling}</p>
                    <button
                        style={{marginLeft:'150px'}}
                        className="button"
                        onClick={()=>props.handleAddFriend(props.playerInfo)}
                    > <FontAwesomeIcon icon={faUserPlus}style={{marginRight:'5px'}}></FontAwesomeIcon>
                        Add Player</button>
                </div>
                <hr style={{width:'400px'}}/> <br/>
            </div>
        </div>
    );
};

export default Profile;