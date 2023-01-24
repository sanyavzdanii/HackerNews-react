import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <h1 className="site-name my-3 my-md-5 py-2 py-xl-4 text-center">Hacker <span className="px-3 py-1 rounded-2">News</span></h1>
            <div className="menu d-md-flex justify-content-between align-content-center mb-2 mb-xl-3">
                <NavLink to="/" activeClassName="active" className="d-block d-md-inline text-center px-3 px-xl-4 py-2 py-xl-3 mb-1 mb-md-0 rounded-2">
                    News List
                </NavLink>
            </div>
        </>
    );
};