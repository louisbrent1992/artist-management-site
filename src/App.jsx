import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "./Components/Loading";

// Lazy load components
const Home = lazy(() => import("./Pages/Home"));
const NoMatch = lazy(() => import("./Pages/NoMatch"));

function App() {
	return (
		<Router>
			<Suspense fallback={<Loading />}>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route>
						<NoMatch />
					</Route>
				</Switch>
			</Suspense>
		</Router>
	);
}

export default App;
