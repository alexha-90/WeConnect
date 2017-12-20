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
            data[1][i]['user_message'], data[1][i]['timestamp'], data[1][i]['post_id']
        ];
    }
    return (
        <div>
            {comboArr.map((item) => {
                return (
                    <div className='contentCreatorSection' key={item[0] + '-section'}>
                        <div className='contentCreatorContainer' key={item[0]}>
                            <ul>
                                <li key={'postID:' + item[0] + '-1'}>Poster's ID (change to screen name): {item[1]}</li>
                                <li key={'postID:' + item[0] + '-2'}>Poster's message: {item[2]}</li>
                                <li key={'postID:' + item[0] + '-3'}>Your message: {item[3]}</li>
                                <li key={'postID:' + item[0] + '-4'}>Timestamp: {item[4]}</li>
                                <li key={'postID:' + item[0] + '-5'}>post ID: {item[5]}</li>
                            </ul>


                            <Button bsStyle="info">
                                <Link to={"/contentPost/view/id:" + item[0]}>
                                    View post
                                </Link>
                            </Button>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}