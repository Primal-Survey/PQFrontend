import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

import axios from "axios";
const BACKEND = process.env.REACT_APP_BACKEND;

// 
// script for
// INVITIATION EMAIL FIELD 
// 

const InviteForm = () => {
	// 
	// Labels set here so you don't have to dig around
	// 
	const emailLabel = "EMAIL LABEL GOES HERE"
	const inviteButtonLabel = "BUTTON LABEL HERE"
	// end Labels

	const [inviteAddy, setInvite] = useState("");
	const [emailerr, setEmailerr] = useState("");

	const inviteChange = (e) => {
		setInvite(e.target.value);
	};

	const inviteSubmit = (e, inviteAddy) => {
		e.preventDefault();
		if (/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(inviteAddy)) {
			axios
				.post(`${BACKEND}/api/results/invite/`, {inviteAddy})
				.then((sent) => {
					console.log(32, "inside");
					if ((sent.data[0].statusCode = 202)) {
						setEmailerr(`Invitation sent to ${inviteAddy}!`);
					}
					setInvite("");
				})
				.catch((err) => {
					setEmailerr(`Invite email generated an error\n${err}`);
				});
		} else {
			console.log(45, "inside with error");
			setEmailerr("Please enter a valid email address for the invitation.");
			setInvite("");
		}
	};

	return (
		<Fade>
			<div
				style={{
					minWidth: "99vw",
					height: "auto",
				}}
			>
				<div className="row">
					<form id="invite"
						onSubmit={(e) => {
							inviteSubmit(e, inviteAddy);
						}}
						className="col s12"
						style={{
							// background: "salmon",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<div
							className="row" 
							style={{
								width: "50%",
							}}
						>
							<EmailErr>{emailerr}</EmailErr>
							<div
								className="input-field col s6 "
								style={{
									width: "100%",
									display: "flex",
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									
								}}
								>
								<i
									className="material-icons prefix teal-text"
									style={{ fontSize: "3em", textColor: "teal" }}
									>email</i>
								<label htmlFor="inviter">{emailLabel}</label>
								<input
									// ref={focuser}
									name="invite"
									id="inviter"
									type="text"
									className="validate"
									onChange={inviteChange}
									value={inviteAddy}
									style={{ minHeight: "50px"}}
								/>
							</div>
						</div>
					</form>{" "}
					<div
						style={{
							minWidth: "99vw",
							height: "auto",
						}}
					>
						<Link to="/results/">
							<Button
								className="waves-effect waves-light btn"
								onClick={(e) => {
									inviteSubmit(e, inviteAddy);
								}}
							>
								<i className="material-icons right">send</i>
								{inviteButtonLabel}
							</Button>
						</Link>
						<p>**Personal information is not collected**</p>
					</div>
				</div>
			</div>
		</Fade>
	);
};

const Button = styled.footer`
  margin-bottom: 20px;
  min-width: 275px;
`;

const EmailErr = styled.div`
  min-height: 2.5rem;
  margin: 1rem;
  font-weight: bolder;
`;

export default InviteForm;
