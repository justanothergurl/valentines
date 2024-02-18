import React from "react";
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./Home";
import Yes from "./Yes";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						exact
						path="/"
						element={<Home />}
					/>
					<Route
						exact
						path="/yes"
						element={<Yes />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
