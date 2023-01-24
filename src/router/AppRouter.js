import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import PageNotFound from '../components/PageNotFound';
import ShowStories from "../components/ShowStories";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <div className="container">
                <Header />
                <Switch>
                    <Route path="/" component={HomePage} exact={true} />
                    <Route path="/:id" component={ShowStories} />
                    <Route component={PageNotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};