import React from 'react';
import { Link } from 'react-router-dom';
import { bubbleSort } from '../helper_functions';
//================================================================================================//
export default function contentCreatorResults(data) {

    // console.log(data);

    let comboArr = [];
    // iterate through dynamically sized object holding all contentPost objects and split each post individually
    for (let i = 0; i < data.length; i++) {
        // 0 = ID, 1 = summary, 2 = location, 3 = idealMatch, 4 = categories, 5 = tags
        // 6 = youtube, 7 = instagram, 8 = twitter, 9 = snapchat
        comboArr[i] = [
            data[i]['content_post_id'], data[i]['content_summary'], data[i]['poster_location'],
            data[i]['content_ideal_match'], data[i]['content_categories'].join(', '), data[i]['content_tags'],
            data[i]['yt_upload_frequency'], data[i]['ig_post_frequency'], data[i]['tw_post_frequency'], data[i]['sc_post_frequency']
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

    let descendingComboArr = bubbleSort(comboArr).reverse();
    console.log(descendingComboArr);


    return (
        <div>
            {descendingComboArr.map((item) => {
                return (
                    <div className='singleContentPost' key={item[0]}>
                        <div id="postSummary">
                            <Link to={"/contentPost/view/id:" + item[0]}>
                                {item[1]}
                            </Link>
                        </div>

                        <div id="postOtherDetails">
                            <span>Tags</span>: {item[5]}
                            <br/>
                            <span>Ideal match</span>: {item[3]}
                            <br/>
                            <span>Categories</span>: {item[4]}
                            <br/>
                            <span>Location</span>: {item[2]}
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