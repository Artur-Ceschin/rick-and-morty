import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Favorites } from '../pages/Favorites';
import { Home } from '../pages/Home';


const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/favorites" component={Favorites} />
    </Switch>
)

export default Routes