import React from 'react';

const Main = ({posts}) => (
    <div className="posts">
        {posts &&
            posts.map((post, index) => {
                return (
                <div className="post" key={index}>
                    <h2 onClick={() => {
                    window.location = `${post.url}`;
                    }}>{index + 1} {post.title}</h2>
                    <span>by {post.by}</span>

                </div>
            );
        })}
    </div>
);


export default Main;