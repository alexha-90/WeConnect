import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//===============================================================================================//

export default function profileMessageData(data, username) {

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
            data[1][i]['message_id'], data[1][i]['poster_username'], data[1][i]['username'], data[1][i]['poster_message'],
            data[1][i]['user_message'], data[1][i]['timestamp'], data[1][i]['post_summary'], data[1][i]['post_id']
        ];

        // case where user is post author
        if (username === comboArr[i][1]) {
            comboArr[i][1] = ''
        }
        // cas where user is inquirer
        else {
            comboArr[i][2] = ''
        }
    }

    return (
        <div>
            {comboArr.map((item) => {
                return (
                    <div className='' key={item[0] + '-section'}>
                        <div className='' key={item[0]}>
                            <h3>
                                Conversation with {item[1]}{item[2]} about:<br/>
                                <Link to={"/contentPost/view/id:" + item[7]}>
                                      {item[6]}
                                </Link>
                            </h3>
                            <ul>
                                <li key={'postID:' + item[0] + '-2'}>Your message: {item[3]}</li>
                                <li key={'postID:' + item[0] + '-3'}>User's message: {item[4]}</li>
                                <li key={'postID:' + item[0] + '-4'}>Timestamp: {item[5]}</li>
                            </ul>
                        </div>
                        <Button bsStyle="success">
                            Reply
                        </Button>


                    </div>
                )
            })}
        </div>
    );
}