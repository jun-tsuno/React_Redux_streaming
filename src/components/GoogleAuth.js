import React from "react";

class GoogleAuth extends React.Component {
	componentDidMount() {
		window.gapi.load("client:auth2", () => {
			window.gapi.client.init({
				clientId:
					"73936677955-3865tpv2h8a1vdtg8v107t014g0obqmn.apps.googleusercontent.com",
				scope: "email",
			});
		});
	}

	render() {
		return <div>GoogleAuth</div>;
	}
}

export default GoogleAuth;
