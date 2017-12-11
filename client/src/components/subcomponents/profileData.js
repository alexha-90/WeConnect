import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//===============================================================================================//

export default function profileData(data) {

    if (!data.length) {
        return (
            <div>
                <h1>No history to show!</h1>
            </div>
        )
    }


    let comboArr = [];
    for (let i = 0; i < data.length; i++) {
        comboArr[i] = [
            data[i]['content_post_id'], data[i]['content_summary'], data[i]['content_description'],
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
            {comboArr.map((item) => {
                return (
                    <div className='contentCreatorSection' key={item[0] + '-section'}>
                        <div className='contentCreatorContainer' key={item[0]}>
                            <ul>
                                <li key={'postID:' + item[0] + '-0'}>Post ID: {item[0]}</li>
                                <li key={'postID:' + item[0] + '-1'}>Content summary: {item[1]}</li>
                                <li key={'postID:' + item[0] + '-2'}>Content description: {item[2]}</li>
                                <li key={'postID:' + item[0] + '-3'}>Content ideal match: {item[3]}</li>
                                <li key={'postID:' + item[0] + '-4'}>Content categories: {item[4]}</li>
                                <li key={'postID:' + item[0] + '-5'}>Content tags: {item[5]}</li>
                            </ul>

                            <div id="socialIcons">
                                {item[6]}
                                {item[7]}
                                {item[8]}
                                {item[9]}
                            </div>

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



/*
export default function profileData(data) {

    if (!data.length) {
        return (
            <div>
                <h1>No history to show!</h1>
            </div>
        )
    }


    let comboArr = [];
    for (let i = 0; i < data.length; i++) {
        comboArr[i] = [
            data[i]['content_post_id'], data[i]['content_medium'], data[i]['content_summary'], data[i]['content_description'],
            data[i]['content_ideal_match'], data[i]['yt_upload_frequency'], data[i]['yt_video_length'], data[i]['yt_sub_count'], data[i]['yt_view_count']
        ];
    }
    return (
        <div>
            {comboArr.map((item) => {
                return (
                    <div className='contentCreatorSection' key={item[0] + '-section'}>
                        <div className='contentCreatorContainer' key={item[0]}>
                            <ul>
                                <li key={'postID:' + item[0] + '-1'}>Medium: {item[1]}</li>
                                <li key={'postID:' + item[0] + '-2'}>Content summary: {item[2]}</li>
                                <li key={'postID:' + item[0] + '-3'}>Content description: {item[3]}</li>
                                <li key={'postID:' + item[0] + '-4'}>Content ideal match: {item[4]}</li>
                                <li key={'postID:' + item[0] + '-5'}>YouTube upload frequency: {item[5]}</li>
                                <li key={'postID:' + item[0] + '-6'}>YouTube typical video length: {item[6]}</li>
                                <li key={'postID:' + item[0] + '-7'}>YouTube subscriber count: {item[7]}</li>
                                <li key={'postID:' + item[0] + '-8'}>YouTube channel view count: {item[8]}</li>
                            </ul>

                            <Button bsStyle="info">
                                    Edit post
                            </Button>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}
 */