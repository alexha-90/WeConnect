import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function contentCreatorResults(data) {

    // all individual contentPost objects will be placed in this array
    let comboArr = [];

    // iterate through dynamically sized object holding all contentPost objects and split each post individually
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
                    <div className='contentCreatorContainer' key={item[0]}>
                        <ul>
                            <li key={'postID:' + item[0] + '-temp-1'}>Medium: {item[1]}</li>
                            <li key={'postID:' + item[0] + '-temp-2'}>Content summary: {item[2]}</li>
                            <li key={'postID:' + item[0] + '-temp-3'}>Content description: {item[3]}</li>
                            <li key={'postID:' + item[0] + '-temp-4'}>Content ideal match: {item[4]}</li>
                            <li key={'postID:' + item[0] + '-temp-5'}>YouTube upload frequency: {item[5]}</li>
                            <li key={'postID:' + item[0] + '-temp-6'}>YouTube typical video length: {item[6]}</li>
                            <li key={'postID:' + item[0] + '-temp-7'}>YouTube subscriber count: {item[7]}</li>
                            <li key={'postID:' + item[0] + '-temp-8'}>YouTube channel view count: {item[8]}</li>
                        </ul>

                        <Button bsStyle="success">
                            <Link to={"/contentPost/id:" + item[0]}>
                                See more
                            </Link>
                        </Button>

                    </div>
                )
            })}
        </div>
    );
}