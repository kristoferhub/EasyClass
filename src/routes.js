import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./Pages/Home";

import About from "./Pages/About";
import DashBoardStudent from "./Pages/DashboardAluno";
import DashBoardTeacher from "./Pages/DashboardTeacher";
import Request from "./Pages/Request";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import ErrorPage from "./Pages/ErrorPage";
import SearchTeacherScreen from "./Pages/SearchTeacher";
import EditProfileScreen from "./Pages/EditProfile";
import PostsScreen from "./Pages/Posts";

import { UserContextProvider } from "./context/userContext";
import { PrivateRouter } from "./context/PrivateRouter";

export default function Routess() {
	return (
		<UserContextProvider>
			<Router>
				<Routes>
					{/* <Route exact path="/" element={<HomeScreen/>}/> */}
					<Route path="/" element={<HomeScreen />} />
					<Route path="/login" element={<Login />} />
					<Route path="/editprofile" element={<PrivateRouter />}>
						<Route path="/editprofile" element={<EditProfileScreen />} />
					</Route>
					<Route path="/about" element={<PrivateRouter />}>
						<Route path="/about" element={<About />} />
					</Route>
					<Route path="/request" element={<PrivateRouter />}>
						<Route path="/request" element={<Request />} />
					</Route>
					<Route path="/SearchTeacher" element={<PrivateRouter />}>
						<Route path="/SearchTeacher" element={<SearchTeacherScreen />} />
					</Route>
					<Route path="/posts" element={<PrivateRouter />}>
						<Route path="/posts" element={<PostsScreen />} />
					</Route>
					{/* <Route path="/DashBoardStudent" element={<DashBoardStudent />} />
					<Route path="/DashBoardTeacher" element={<DashBoardTeacher />} /> */}
					{/* <Route
						path="/DashBoardStudent/:username"
						element={<DashBoardStudent />}
					/> */}
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</Router>
		</UserContextProvider>
	);
}
