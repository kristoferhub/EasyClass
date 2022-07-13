import React, { useState } from "react";
import { useParams } from "react-router-dom";
import logo from "../../../assets/logo.jpeg"
import Bar from "../Bar"
import {Container} from "./style"
import Board from "./Board";
import { useSessionContext } from "../../../context/SessionContextProvider";

function DashBoard(props) {
	const { user } = useSessionContext();
	return (
		<Container>
			<Bar logo={logo} name={user.displayName} type={props.type} msg={4} />
			<Board
				logo={user.photoURL? user.photoURL : logo}
				name={user.displayName}
				type={props.type}
				year={21}
				email={user.email}
			/>
		</Container>
	);
}

export default DashBoard;
