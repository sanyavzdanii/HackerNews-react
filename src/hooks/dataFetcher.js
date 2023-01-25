import { useState, useEffect } from 'react';
import {getStories} from '../utils/apis';

export default function useDataFetcher(type) {
    const [stories, setStories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [updateAfter5Sec, setUpdateAfter5Sec] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(true);
            getStories(type)
                .then((stories) => {
                    setStories(stories);
                    setIsLoading(false);
                })
                .catch(() => {
                    setIsLoading(false);
                });

            setUpdateAfter5Sec(updateAfter5Sec + 1);
        }, 300000);
    }, [updateAfter5Sec]);

    useEffect(() => {
        setIsLoading(true);
        getStories(type)
            .then((stories) => {
                setStories(stories);
                setIsLoading(false);
            })
            .catch(() => {
                setIsLoading(false);
            });
    }, []);

    return { isLoading, stories };
};