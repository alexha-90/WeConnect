import React from 'react';
import { Table } from 'react-bootstrap';
import ImageLightbox from './ImageLightbox';
import '../../../styles/carousel.css'

//===============================================================================================//
export default function singleContentPostResult(data) {
    console.log(data);

    let youtubeShow, instagramShow, twitterShow, snapchatShow;

    // hide respective container if no data available
    if (!data[0]['yt_upload_frequency']) {
        // alert('yt test');
        youtubeShow = {display: 'none'};
    }

    if (!data[0]['ig_post_frequency']) {
        // alert('ig test');
        instagramShow = {display: 'none'};
    }

    if (!data[0]['tw_post_frequency']) {
        twitterShow = {display: 'none'};
    }

    if (!data[0]['sc_post_frequency']) {
        snapchatShow = {display: 'none'};
    }

    const categories = data[0]['content_categories'].toString().replace(/,/gi, ', ');


    return (
        <div>
            <div id="imageLightbox">
                <ImageLightbox />

            </div>

            <div id="headline">
                <h3>{data[0]['content_summary']}</h3>
                <hr/>
                <ul>
                    <li><span>Categories:</span> {categories}</li>
                    <li><span>Ideal match:</span> {data[0]['content_ideal_match']}</li>
                    <li><span>Tags:</span> {data[0]['content_tags']}</li>
                </ul>
            </div>
            <hr />

            <div className="content">
                <h4>Summary</h4>

                {data[0]['content_description']}

                <hr/>

                <h4>Social account(s)</h4>

                <div className="socialMediums">

                    <div className="socialMediumContainer" style={youtubeShow}>
                        <h3>YouTube</h3>
                        <div id="socialLogoContainer">
                            <img src="http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c545.png" alt="youtubeLogo"/>
                        </div>
                        <div id="socialStatistics">
                            <Table condensed hover>
                                <tbody>
                                <tr>
                                    <td>Upload frequency</td>
                                    <td>{data[0]['yt_upload_frequency']}</td>
                                </tr>
                                <tr>
                                    <td>Typical video length</td>
                                    <td>{data[0]['yt_video_length']}</td>
                                </tr>
                                <tr>
                                    <td>Subscriber count</td>
                                    <td>{data[0]['yt_sub_count']}</td>
                                </tr>
                                <tr>
                                    <td>Channel view count</td>
                                    <td>{data[0]['yt_view_count']}</td>
                                </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>

                    <div className="socialMediumContainer" style={instagramShow}>
                        <h3>Instagram</h3>
                        <div id="socialLogoContainer">
                            <img src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c521.png" alt="instagramLogo"/>
                        </div>
                        <div id="socialStatistics">
                            <Table condensed hover>
                                <tbody>
                                <tr>
                                    <td>Post frequency</td>
                                    <td>{data[0]['ig_post_frequency']}</td>
                                </tr>
                                <tr>
                                    <td>Followers</td>
                                    <td>{data[0]['ig_followers']}</td>
                                </tr>
                                <tr>
                                    <td>Typical post likes</td>
                                    <td>{data[0]['ig_likes']}</td>
                                </tr>
                                <tr>
                                    <td>Typical post comments</td>
                                    <td>{data[0]['ig_comments']}</td>
                                </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>


                    <div className="socialMediumContainer" style={twitterShow}>
                        <h3>Twitter</h3>
                        <div id="socialLogoContainer">
                            <img src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c53e.png" alt="twitterLogo"/>
                        </div>
                        <div id="socialStatistics">
                            <Table condensed hover>
                                <tbody>
                                <tr>
                                    <td>Post frequency</td>
                                    <td>{data[0]['tw_post_frequency']}</td>
                                </tr>
                                <tr>
                                    <td>Followers</td>
                                    <td>{data[0]['tw_followers']}</td>
                                </tr>
                                <tr>
                                    <td>Typical post likes</td>
                                    <td>{data[0]['tw_post_likes']}</td>
                                </tr>
                                <tr>
                                    <td>Typical post comments</td>
                                    <td>{data[0]['tw_comments']}</td>
                                </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>

                    <div className="socialMediumContainer" style={snapchatShow}>
                        <h3>Snapchat</h3>
                        <div id="socialLogoContainer">
                            <img src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c536.png" alt="snapchatLogo"/>
                        </div>
                        <div id="socialStatistics">
                            <Table condensed hover>
                                <tbody>
                                <tr>
                                    <td>Post frequency</td>
                                    <td>{data[0]['sc_post_frequency']}</td>
                                </tr>
                                <tr>
                                    <td>Followers</td>
                                    <td>{data[0]['sc_followers']}</td>
                                </tr>
                                <tr>
                                    <td>Typical story opens</td>
                                    <td>{data[0]['sc_story_opens']}</td>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>

                </div>
            </div>

            <hr />
        </div>
    );
}