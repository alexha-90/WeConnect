import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//===============================================================================================//

export default function profileMessageData(data) {

    if (!data[1].length) {
        return (
            <div>
                <h1>No message history to show!</h1>
            </div>
        )
    }

    let comboArr = [];
    for (let i = 0; i < data[1].length; i++) {
        comboArr[i] = [
            data[1][i]['message_id'], data[1][i]['poster_id'], data[1][i]['poster_message'],
            data[1][i]['user_message'], data[1][i]['timestamp'], data[1][i]['post_summary'], data[1][i]['post_id']
        ];
    }
    return (
        <div>
            {comboArr.map((item) => {
                return (
                    <div className='contentCreatorSection' key={item[0] + '-section'}>
                        <div className='contentCreatorContainer' key={item[0]}>
                            <h3>
                                Conversation with user ID (change to screen name later): {item[1]} about:<br/>
                                <Link to={"/contentPost/view/id:" + item[6]}>
                                      {item[5]}
                                </Link>
                            </h3>
                            <ul>
                                <li key={'postID:' + item[0] + '-2'}>Your message: {item[2]}</li>
                                <li key={'postID:' + item[0] + '-3'}>User's message: {item[3]}</li>
                                <li key={'postID:' + item[0] + '-4'}>Timestamp: {item[4]}</li>
                            </ul>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}