import React from 'react';
import useDataFetcher from "../hooks/dataFetcher";
import Story from "./Story";

export default function HomePage() {
    const { isLoading, stories } = useDataFetcher('new');

    return (
        <>
            {isLoading ? (
                <div className="loading d-flex justify-content-center align-content-center text-center my-5 py-4">
                    <div className="lds-facebook">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <span className="font-weight-bold ml-3 ml-xl-4">Loading</span>
                </div>
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