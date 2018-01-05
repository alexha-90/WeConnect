import React from 'react';
import { Link } from 'react-router-dom';
//===============================================================================================//

export default function profilePostData(data) {

    if (!data[0].length) {
        return (
            <div>
                <h2>No posting history to show!</h2>
            </div>
        )
    }

    let comboArr = [];
    for (let i = 0; i < data[0].length; i++) {
        comboArr[i] = [
            data[0][i]['content_post_id'], data[0][i]['content_summary'], data[0][i]['content_description'],
            data[0][i]['content_ideal_match'], data[0][i]['content_categories'].join(', '), data[0][i]['content_tags'],
            data[0][i]['yt_upload_frequency'], data[0][i]['ig_post_frequency'], data[0][i]['tw_post_frequency'], data[0][i]['sc_post_frequency']
        ];

        if (comboArr[i][6] !== null) {
            comboArr[i][6] = <img alt="YouTube" title="YouTube" src="https://i.imgur.com/OgKnkx6.png" style={{margin: '0 4px'}}/>
        }

        if (comboArr[i][7] !== null) {
            comboArr[i][7] = <img alt="Instagram" title="Instagram" src="https://i.imgur.com/ua8nc0a.png" style={{margin: '0 4px'}}/>
        }

        if (comboArr[i][8] !== null) {
            comboArr[i][8] = <img alt="Twitter" title="Twitter" src="https://i.imgur.com/rqlMTDJ.png" style={{margin: '0 4px'}}/>
        }

        if (comboArr[i][9] !== null) {
            comboArr[i][9] = <img alt="Snapchat" title="Snapchat" src="https://i.imgur.com/37IM31N.png" style={{margin: '0 4px'}}/>
        }
    }
    return (
        <div>
            {comboArr.map((item) => {
                return (
                    <div className='contentPostsSection' key={item[0] + '-section'}>
                        <div className='contentPostsContainer' key={item[0]}>
                            <div id="postSummary">
                                <Link to={"/contentPost/view/id:" + item[0]}>
                                    {item[1]}
                                </Link>
                            </div>
                            <div id="postOtherDetails">
                                <span>Description</span>: {item[2]}
                                <br/>
                                <span>Ideal match</span>: {item[3]}
                                <br/>
                                <span>Categories</span>: {item[4]}
                                <br/>
                                <span>Content tags</span>: {item[5]}
                                <div id="socialIcons">
                                    {item[6]}
                                    {item[7]}
                                    {item[8]}
                                    {item[9]}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}