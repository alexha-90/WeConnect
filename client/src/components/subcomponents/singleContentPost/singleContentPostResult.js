import React from 'react';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';

export default function singleContentPostResult(data) {
    console.log(data);

    return (
        <div>
            <div id="headline">
                <div>
                    <h3>{data[0]['content_summary']}</h3>
                    <span>
                        (Posted: {data[0]['submitted_timestamp']} by {data[0]['username']})
                    </span>
                </div>
            </div>
            <hr />
            Categories: {data[0]['content_categories']}
            <br />
            Tags: {data[0]['content_tags']}
            <br />
            Location: {data[0]['poster_location']}
            <hr />
            <h4>{data[0]['content_description']}</h4>
            <hr />
            Ideal match: {data[0]['content_ideal_match']}
            <hr />

            <Grid>
                <Row className="gridTest">
                    <Col sm={12} lg={6}>
                        <div className="youtubeContainer">
                            <div>
                                <h3>YouTube</h3>
                            </div>
                            <li>Upload frequency: {data[0]['yt_upload_frequency']}</li>
                            <li>Typical video length: {data[0]['yt_video_length']}</li>
                            <li>Subscriber count: {data[0]['yt_sub_count']}</li>
                            <li>Channel view count: {data[0]['yt_view_count']}</li>
                        </div>
                    </Col>
                    <Col sm={12} lg={6}>
                        <div className="instagramContainer">
                            <div>
                                <h3>Instagram</h3>
                            </div>
                            <li>Post frequency: {data[0]['ig_post_frequency']}</li>
                            <li>Followers: {data[0]['ig_followers']}</li>
                            <li>Typical post likes: {data[0]['ig_likes']}</li>
                            <li>Typical post comments: {data[0]['ig_comments']}</li>
                        </div>
                    </Col>
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