import React from 'react';
import {NavLink} from "react-router-dom";

const Link = ({ url, title }) => (
    <a href={url} target="_blank" rel="noreferrer">
        {title}
    </a>
);

export default function Story({ story: { id, by, title, kids, time, url } }) {
    return (
        <div className="col-md-6 col-xl-4 mb-2 mb-md-3 mb-xl-4">
            <div className="story p-3 p-xl-4 rounded-2 d-flex flex-column justify-content-between">
                <div className="story__title pt-2 pt-md-0">
                    <NavLink to={`/${id}`}>{title}</NavLink>
                </div>
                <div className="story-info">
                    <span className="mr-2">
                      by{' '}
                        {by}
                    </span>
                    |
                    <span className="ml-2">
                      {new Date(time * 1000).toLocaleDateString('en-US', {
                          hour: 'numeric',
                          minute: 'numeric'
                      })}
                    </span>
                    {kids !== undefined &&
                        <>
                            | <span className={kids.length > 0 ? 'font-weight-bold' : ''}>
                            {`${kids && kids.length > 0 ? kids.length : 0} comments`}
                        </span>
                        </>

                    }
                </div>
            </div>
        </div>
    );
};