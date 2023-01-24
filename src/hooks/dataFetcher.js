import { useState, useEffect } from 'react';
import {getStories} from '../utils/apis';

export default function useDataFetcher(type) {
    const [stories, setStories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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
    }, [type]);

    return { isLoading, stories };
};