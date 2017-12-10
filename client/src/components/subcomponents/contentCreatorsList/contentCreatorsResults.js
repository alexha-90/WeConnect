import React from 'react';
import { Link } from 'react-router-dom';
//===============================================================================================//

export default function contentCreatorResults(data) {

    console.log(data);

    let comboArr = [];

    // iterate through dynamically sized object holding all contentPost objects and split each post individually
    for (let i = 0; i < data.length; i++) {

        // 0 = ID, 1 = summary, 2 = location, 3 = idealMatch, 4 = categories, 5 = tags
        // 6 = youtube, 7 = instagram, 8 = twitter, 9 = snapchat
        comboArr[i] = [
            data[i]['content_post_id'], data[i]['content_summary'], data[i]['user_location'],
            data[i]['content_ideal_match'], data[i]['content_categories'].join(', '), data[i]['content_tags'],
            data[i]['yt_upload_frequency'], data[i]['ig_post_frequency'], data[i]['tw_post_frequency'], data[i]['sc_post_frequency']
        ];

        if (comboArr[i][6] !== null) {
            comboArr[i][6] = <img alt="YouTube" title="YouTube" src="https://png.icons8.com/play-button/dusk/30/000000"/>
        }

        if (comboArr[i][7] !== null) {
            comboArr[i][7] = <img alt="Instagram" title="Instagram" src="https://png.icons8.com/instagram-old/dusk/30"/>
        }

        if (comboArr[i][8] !== null) {
            comboArr[i][8] = <img alt="Twitter" title="Twitter" src="https://png.icons8.com/twitter/dusk/30"/>
        }

        if (comboArr[i][9] !== null) {
            comboArr[i][9] = <img alt="Snapchat" title="Snapchat" src="https://png.icons8.com/snapchat/dusk/30/000000"/>
        }
    }

    return (
        <div>
            {comboArr.reverse().map((item) => {
                return (
                    <div className='singleContentPost' key={item[0]}>
                        <div id="postSummary">
                            <Link to={"/contentPost/id:" + item[0]}>
                                {item[1]}
                            </Link>
                        </div>

                        <div id="postOtherDetails">
                            <span>Location</span>: {item[2]}
                            <br/>
                            <span>Ideal match</span>: {item[3]}
                            <br/>
                            <span>Categories</span>: {item[4]}
                            <br/>
                            <span>Tags</span>: {item[5]}
                            <div id="socialIcons">
                                {item[6]}
                                {item[7]}
                                {item[8]}
                                {item[9]}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}