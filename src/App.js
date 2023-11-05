import './App.css';
// filename -App.js

import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/home"
import {
	BrowserRouter as Router,
	Routes,
	Route,
  Switch
} from "react-router-dom";
import SignUp from "./pages/signup";
import Login from "./pages/login";
import Form from "./pages/form";
import Dash from "./pages/dashboard"


function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
        <Route
					path="/"
					element={<Homepage />}
				/>
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
        <Route
					path="/pages/dashboard"
					element={<Dash />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
