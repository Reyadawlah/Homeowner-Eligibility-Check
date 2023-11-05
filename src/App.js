import './App.css';
// filename -App.js

import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
  Switch
} from "react-router-dom";
import SignUp from "./pages/signup";
import Login from "./pages/login";
import Form from "./pages/form";


function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
        <Route
					path="/pages/login"
					element={<Login />}
				/>
				<Route
					path="/pages/signup"
					element={<SignUp />}
				/>
        <Route
					path="/pages/form"
					element={<Form />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
