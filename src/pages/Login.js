import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

export class Login extends Component {

	render() {

		return (
			<View>
				<Text>Login</Text>
			</View>
		);

	}

}

const mapStateToProps = (state) => {
	return {

	};
};

const LoginConnect = connect(mapStateToProps, {})(Login);
export default LoginConnect;
