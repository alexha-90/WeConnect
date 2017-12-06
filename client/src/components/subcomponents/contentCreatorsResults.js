import React from 'react';
import { Link } from 'react-router-dom';

export default function contentCreatorResults(data) {

    // all individual contentPost objects will be placed in this array
    let comboArr = [];

    // iterate through dynamically sized object holding all contentPost objects and split each post individually
    for (let i = 0; i < data.length; i++) {
        comboArr[i] = [
            data[i]['content_post_id'], data[i]['content_medium'], data[i]['content_summary'], data[i]['content_ideal_match']];

        if (comboArr[i][1] === 'Instagram') {
            comboArr[i][1] = <img alt="Instagram" title="Instagram" src="https://png.icons8.com/instagram-old/dusk/30"/>
        }

        if (comboArr[i][1] === 'YouTube') {
            comboArr[i][1] = <img alt="YouTube" title="YouTube" src="https://png.icons8.com/facebook/dusk/30"/>
        }

        if (comboArr[i][1] === 'Twitter') {
            comboArr[i][1] = <img alt="Twitter" title="Twitter" src="https://png.icons8.com/twitter/dusk/30"/>
        }

        if (comboArr[i][1] === 'Snapchat') {
            comboArr[i][1] = <img alt="Snapchat" title="Snapchat" src="https://png.icons8.com/instagram-old/dusk/30"/>
        }
    }

    return (
        <div>
            {comboArr.map((item) => {
                return (
                    <div className='singleContentPost' key={item[0]}>
                        <div id="postSummary">
                            <Link to={"/contentPost/id:" + item[0]}>
                                {item[2]}
                            </Link>
                        </div>
                        <div id="postOtherDetails">
                            <span>Ideal match</span>: {item[3]}
                            <br/>
                            <span>Categories</span>: {item[2]}
                            <br/>
                            <span>Tags</span>: {item[2]}
                            <div id="socialIcons">
                                {item[1]}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}