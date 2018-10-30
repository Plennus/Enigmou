import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { connect } from 'react-redux';

export class Welcome extends Component {

	render() {

		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.heading_1}>Bem vindo(a) ao Enigmou</Text>
					<Text style={styles.heading_2}>Envie sentimentos</Text>					
				</View>
				<View style={styles.body}>
					<Image source={require('../assets/bg.jpeg')} style={styles.bg} />
					<Button title="Entrar" onPress={() => {}} />
					<Text style={styles.heading_3}>Ainda não faz parte? Cadastra-se já!</Text>
				</View>
				<View style={styles.footer}>
					<Text style={styles.heading_4}>Trabalhe conosco lojista.</Text>
					<Text style={styles.heading_5}>Peça sua vaga</Text>
					<View style={styles.line}></View>
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
		alignItems: 'center',
		justifyContent: 'space-around',
		backgroundColor: '#FFFFFF'
	},
	header:{

	},
	body:{

	},
	bg:{
		width: 336,
		height: 260
	},
	heading_1:{

	},
	heading_2:{

	},
	heading_3:{

	},
	heading_4:{

	},
	heading_5:{

	},
	footer:{

	}
});

const WelcomeConnect = connect(mapStateToProps, {})(Welcome);
export default WelcomeConnect;
