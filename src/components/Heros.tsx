import React from 'react';
import './Heros.css'

const BlogCard = () => {
    return (
        <div className="body">
            <div className="container-fluid">
                <div className="blog-card">
                    <div
                        className="media col-sm-6 col-xs-6"
                        style={{ backgroundImage: "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/bg_24.png)" }}
                    ></div>
                    <div className="card-body col-sm-6 col-xs-6">
                        <p className="tagline text-center">Featured</p>
                        <h3 className="title text-center">Blue Ocean Waves Crash</h3>
                        <div className="divider"></div>
                        <p className="paragraph text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam a incidunt fuga, ducimus nisi iusto ipsum sit deleniti suscipit atque aliquid, velit at? At quasi magni voluptates molestiae aperiam.
                        </p>
                        <a href="#" className="read-more glyphicon glyphicon-chevron-down"></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
