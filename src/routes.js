import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon/index';
import Register from './pages/Register/index';
import Profile from './pages/Profile/index';
import NewIncidents from './pages/NewIncident/index';

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Logon}></Route>
				<Route path="/register" component={Register}></Route>
				<Route path="/profile" component={Profile}></Route>
				<Route
					path="/incidents/new"
					component={NewIncidents}
				></Route>
			</Switch>
		</BrowserRouter>
	);
}
