import React, {useEffect, useState} from 'react';
import axios from "axios";
import {BASE_API_URL} from "../utils/constants";

export default function ShowStories(props) {
    const { id } = props.match.params;
    const [thisPost, setThisPost] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingComments, setIsLoadingComments] = useState(true);
    const [allComments, setAllComments] = useState([]);
    const allComments2 = [];

    useEffect(() => {
        axios.get(`${BASE_API_URL}/item/${id}.json`)
            .then(res => {
                setThisPost(res.data);

                let comments = res.data.kids;

                if(comments !== undefined && comments.length > 0) {
                    comments.map((commentId, index) => {
                        axios.get(`${BASE_API_URL}/item/${commentId}.json`)
                            .then(res => {
                                allComments2.push(res.data);
                                setIsLoadingComments(true);
                                setAllComments(allComments2);
                                setIsLoadingComments(false);console.log(allComments);
                            })
                            .catch(error => {
                                console.log(error);
                            })
                    })
                }
            })
            .catch(error => {
                setThisPost([])
                console.log(error);
            })
    },[]);

    useEffect(() => {
        if(thisPost.length < 1) {
            setIsLoading(false);
        }
    },[thisPost]);

    return (
        <>
            {isLoading ?
                <p className="loading">Loading...</p>
                :
                <div className="one-post my-2 my-md-4 p-2 p-md-4 rounded-2">
                    <div className="row">
                        <div className="col-12 col-md-7 col-xl-8 mb-3 mb-md-0">
                            <div className="one-post__title pt-2 pt-md-0">
                                <a target="_blank"
                                   href={thisPost.url}
                                   title={thisPost.title}>
                                    {thisPost.title}
                                    {thisPost.url !== undefined &&
                                        <span className="d-inline-block px-2 py-1 ml-1 my-1 rounded">Go to site</span>
                                    }
                                </a>
                            </div>
                            {thisPost.kids !== undefined &&
                                <span className={thisPost.kids.length > 0 ? 'font-weight-bold' : ''}>
                                    {`${thisPost.kids && thisPost.kids.length > 0 ? thisPost.kids.length : 0} comments`}
                                </span>
                            }
                            {thisPost.text !== undefined &&
                                <p>{thisPost.text}</p>
                            }
                        </div>
                        <div className="d-flex justify-content-center justify-content-md-end align-content-center col-12 col-md-5 col-xl-4">
                            <div className="story-info d-flex align-content-center">
                            <span className="mr-1">
                              by{' '}
                                <b>{thisPost.by}</b>
                            </span>
                                |
                                <span className="ml-1">
                              {new Date(thisPost.time * 1000).toLocaleDateString('en-US', {
                                  hour: 'numeric',
                                  minute: 'numeric'
                              })}
                            </span>
                            </div>
                        </div>
                        <div className="col-12">
                            {allComments.map((comment, index) => {console.log('popalo');
                                return (
                                    <div key={`comment-${index}`} className="comment p-3 p-md-4 rounded-2 mb-2 mb-xl-3 mt-3 mt-xl-4">
                                        <div className="mb-2 mb-xl-3 font-weight-bold">{comment.by}</div>
                                        <div dangerouslySetInnerHTML={{__html: comment.text}} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            }
        </>
    );
};