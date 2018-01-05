import React from 'react';
import { Link } from 'react-router-dom';
//===============================================================================================//

// note 4:30am. Downland and change social media icons to match actual posting

export default function contentCreatorResults(data) {

    console.log(data);

    let comboArr = [];
    // let arr = [];

    // iterate through dynamically sized object holding all contentPost objects and split each post individually
    for (let i = 0; i < data.length; i++) {
        // let temp = [];

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

        // arr[i] = data[i]['content_post_id'];

        // console.log(comboArr[i][0]);
        // // console.log(comboArr[i]);
        // console.log(comboArr[i-1]);
        // if (i > 0 && comboArr[i-1][0] > comboArr[i][0]) {
        //     console.log('yes');
        //     temp = comboArr[i];
        //     comboArr[i-1] = comboArr[i];
        //     comboArr[i] = temp;
        //     // temp = comboArr[i-1];
        //     // comboArr[i] = comboArr[i-1];
        //     // comboArr[i-1] = temp;
        //     // if present id greater than last (ex 7 > 6)
        //     // temp variable = future (temp = 6)
        //     // present = future (present = 7)
        //     // future = temp (future = 6)
        // }

    }

    // function bubbleSort(arr){
    //     let len = arr.length;
    //     for (let i = len-1; i>=0; i--){
    //         for(let j = 1; j<=i; j++){
    //             if(arr[j-1]>arr[j]){
    //                 let temp = arr[j-1];
    //                 arr[j-1] = arr[j];
    //                 arr[j] = temp;
    //             }
    //         }
    //     }
    //     return arr;
    // }
    //
    // // bubbleSort(arr);
    // // // works. need to implement
    // //
    // // console.log(arr);
    // console.log(comboArr);


    return (
        <div>
            {comboArr.map((item) => {
                return (
                    <div className='singleContentPost' key={item[0]}>
                        <div id="postSummary">
                            <Link to={"/contentPost/view/id:" + item[0]}>
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