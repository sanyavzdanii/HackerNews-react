import React from 'react';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
    return (
        <p>
            Page Not found. Go to <Link to="/">Home</Link>
        </p>
    );
};