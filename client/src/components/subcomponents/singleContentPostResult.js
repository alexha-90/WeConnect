import React from 'react';

export default function singleContentPostResult(data) {
    return (
        <div>
            <ul>
                <li>Medium: {data[0]['content_medium']}</li>
                <li>Content summary: {data[0]['content_summary']}</li>
                <li>Content description: {data[0]['content_description']}</li>
                <li>Content ideal match: {data[0]['content_ideal_match']}</li>
                <li>YouTube upload frequency: {data[0]['yt_upload_frequency']}</li>
                <li>YouTube typical video length: {data[0]['yt_video_length']}</li>
                <li>YouTube subscriber count: {data[0]['yt_sub_count']}</li>
                <li>YouTube channel view count: {data[0]['yt_view_count']}</li>
            </ul>
            <img src="https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_640.jpg" alt="temp" />
            <img src="https://cdn.pixabay.com/photo/2016/01/22/02/06/food-1155130_640.jpg" alt="temp2" />

            <hr />
            <h1>Recent reviews: (to be continued)</h1>
            <ul>
                <li>He promoted our content very well. Our sales went up!! 5/5</li>
                <li>Did not follow instructions we gave him. Subpar. 2/5</li>
            </ul>


        </div>
    );
}