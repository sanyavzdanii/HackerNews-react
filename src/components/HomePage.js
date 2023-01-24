import React from 'react';
import useDataFetcher from "../hooks/dataFetcher";
import Story from "./Story";

export default function HomePage() {
    const { isLoading, stories } = useDataFetcher('new');

    return (
        <>
            {isLoading ? (
                <p className="loading">Loading...</p>
            ) : (
                <div className="row">
                    {stories.map(({ data: story }) => (
                        <Story key={story.id} story={story} />
                    ))}
                </div>
            )}
        </>
    );
};