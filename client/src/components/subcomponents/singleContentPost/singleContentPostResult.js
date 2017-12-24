import React from 'react';
import { Grid, Row, Col, Clearfix, Table } from 'react-bootstrap';

export default function singleContentPostResult(data) {
    console.log(data);

    return (
        <div>
            <div id="imageCarousel">
                placeholder image carousel


            </div>

            <div id="headline">
                <h3>{data[0]['content_summary']}</h3>
                <hr/>
                <ul>
                    <li><span>Categories:</span> {data[0]['content_categories']}</li>
                    <li><span>Ideal match:</span> {data[0]['content_ideal_match']}</li>
                    <li><span>Tags:</span> {data[0]['content_tags']}</li>
                </ul>
            </div>
            <hr />

            <div className="content">
                <h4>Summary</h4>

                {data[0]['content_description']}

                <hr/>

                <h4>Social accounts</h4>

                <div className="socialMediums">

                    <div className="socialMediumContainer">
                        <h3>YouTube</h3>
                        <div id="socialLogoContainer">
                            <img src="http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c545.png"/>
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

                    <div className="socialMediumContainer">
                        <h3>Instagram</h3>
                        <div id="socialLogoContainer">
                            <img src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c521.png"/>
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
                    

                </div>


                <hr />

            </div>


            <Grid>
                <Row className="gridTest">
                    <Clearfix visibleSmBlock><code>&lt;{'Clearfix visibleSmBlock'} /&gt;</code></Clearfix>
                    <Col sm={12} lg={6}>
                        <div className="twitterContainer">
                            <div>
                                <h3>Twitter</h3>
                            </div>
                            <li>Post frequency: {data[0]['tw_post_frequency']}</li>
                            <li>Followers: {data[0]['tw_followers']}</li>
                            <li>Typical post likes: {data[0]['tw_post_likes']}</li>
                            <li>Typical comments: {data[0]['tw_comments']}</li>
                        </div>
                    </Col>
                    <Col sm={12} lg={6}>
                        <div className="snapchatContainer">
                            <div>
                                <h3>Snapchat</h3>
                            </div>
                            <li>Post frequency: {data[0]['sc_post_frequency']}</li>
                            <li>Followers: {data[0]['sc_followers']}</li>
                            <li>Typical story opens: {data[0]['sc_story_opens']}</li>
                        </div>
                    </Col>
                </Row>
            </Grid>

            <hr />
        </div>
    );
}