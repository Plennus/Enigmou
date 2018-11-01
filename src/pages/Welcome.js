import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import { connect } from 'react-redux';

export class Welcome extends Component {

	openUrl() {
		let url = "https://enigmou.com/sellers";
		Linking.openURL(url);

	}

	render() {

		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.heading_1}>Bem vindo(a) ao Enigmou</Text>
					<Text style={styles.heading_2}>Envie sentimentos</Text>					
				</View>
				<View style={styles.body}>
					<Image source={require('../assets/bg.png')} style={styles.bg} />
					<TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={styles.button}>
						<Text style={styles.buttonText}>Entrar</Text>
					</TouchableOpacity>
					<Text style={styles.heading_3}>Ainda não faz parte? Cadastra-se já!</Text>
					<View style={styles.footer}>
						<Text style={styles.heading_4}>Trabalhe conosco lojista.</Text>
						<TouchableOpacity onPress={this.openUrl}>
							<Text style={styles.heading_5}>Peça sua vaga</Text>					
						</TouchableOpacity>
						<View style={styles.line}></View>
					</View>
				</View>
			</View>
		);

	}

}

const mapStateToProps = (state) => {
	return {
		
	};
};

const styles = StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor: '#FFFFFF'
	},
	header:{
		margin: 20
	},
	body:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	bg:{
		width: 332,
		height: 255
	},
	button:{
		width: '90%',
		padding: 17,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#ff3c36',
		borderRadius: 10
	},
	buttonText:{
		fontWeight: 'bold',
		fontSize: 15,
		color: '#FFF'
	},
	heading_1:{
		fontWeight: 'bold',
		color: '#4a4f53',
		alignSelf: 'flex-start',
    marginTop: 20
	},
	heading_2:{
		color: '#ff3c36',
		fontWeight: 'bold',
		fontSize: 30
	},
	heading_3:{
		fontWeight: 'bold',
		color: '#a8a9ab',
		textAlign: 'center'
	},
	heading_4:{
		fontWeight: 'bold',
		color: '#4a4f53'
	},
	heading_5:{
		fontWeight: 'bold',
		color: '#ff3c36',
		textAlign: 'center',
		marginBottom: 20
	},
	line:{
		borderWidth: 3,
		borderColor: '#a9acb1',
		marginBottom: 5,
		borderRadius: 5		
	},
	footer:{

	}
});

const WelcomeConnect = connect(mapStateToProps, {})(Welcome);
export default WelcomeConnect;
