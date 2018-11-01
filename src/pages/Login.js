import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { Item, Label, Input, Form, Content, Icon } from 'native-base';
import { changeEmail, changePassword } from '../actions/AuthActions';

export class Login extends Component {

	render() {

		return (
			<View style={styles.container}>
        <View>
          <Image source={require('../assets/wave-grey.png')} style={styles.bgImage} />
        </View>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.backButton}>
          <Image source={require('../assets/back.png')} style={styles.backText} />
        </TouchableOpacity>
        <View style={styles.logoArea}>
          <Image source={require('../assets/logo-black.png')} style={{width: 200, height: 50}} />
        </View>
        <View style={styles.formArea}>			
          <Item floatingLabel success={this.props.successEmail} error={this.props.errorEmail}>
            <Label style={styles.formLabel}>Nome de usuario ou E-mail</Label>
            <Input value={this.props.email} onChangeText={this.props.changeEmail} autoCapitalize="none" />
          </Item>
          <Item floatingLabel style={styles.formItem} error={this.props.errorPass} success={this.props.successPass}>
            <Label style={styles.formLabel}>Senha</Label>
            <Input value={this.props.password} onChangeText={this.props.changePassword} secureTextEntry={true} autoCapitalize="none" />
          </Item>
          <TouchableOpacity onPress={() => {}}>
            <Text style={[styles.formLabel, styles.forgetText]}>Esqueceu a senha?</Text>
          </TouchableOpacity>	            
        </View>
        <View style={styles.buttonArea}>
          <View style={styles.buttonContent}>
        <TouchableOpacity onPress={() => {}} style={[styles.button, styles.buttonBg]}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>	
      </View>
      <View style={styles.buttonContent}>
        <View style={styles.buttonMedia}>
          <TouchableOpacity onPress={() => {}}>            
            <View style={{flexDirection: 'row'}}>
              <Image source={require('../assets/face.png')} style={{width: 20, height: 20, marginLeft: 10}} />
              <Text style={styles.buttonText}>Entrar com o facebook</Text>  
            </View>
          </TouchableOpacity>
        </View>
      </View>	
          <View style={styles.buttonContent}>
        <TouchableOpacity onPress={() => {}} style={styles.signupButton}>
          <Text style={styles.signupText}>Ainda não faz parte? Cadastre-se já!</Text>
        </TouchableOpacity>	
      </View>	
      <View style={styles.line}></View>										
      </View>
		</View>
		);

	}

}

const mapStateToProps = (state) => {
	return {
		email:state.auth.email,
		password:state.auth.password,
		successEmail:state.auth.successEmail,
		errorEmail:state.auth.errorEmail,
    successPass:state.auth.successPass,
    errorPass:state.auth.errorPass
	};
};

const styles = StyleSheet.create({
	container:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: '#FFF'
	},
	logoArea:{
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 20
	},
	formArea:{
		width: '90%'
	},
	formLabel:{
		fontSize: 10
	},
	formItem:{
		marginTop: 15
	},
	forgetText:{
		marginTop: 10, 
		textAlign: 'right',
		color: '#3b5998'		
	},	
	buttonArea:{
		width: '100%',
		marginTop: 60
	},
	buttonContent:{
		marginTop: 5
	},
	button:{
		width: '90%',
		padding: 17,
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center',
		borderRadius: 6,
    marginBottom: 5
	},
  buttonMedia:{
		width: '90%',
		padding: 17,
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center',
		borderRadius: 6,
    backgroundColor: '#3b5998'
  },
	buttonText:{
		fontWeight: 'bold',
		fontSize: 15,
		color: '#FFF'
	},
	signupButton:{
		marginTop: 20,
		marginBottom: 20
	},
	signupText:{
		fontWeight: 'bold',
		color: '#a8a9ab',
		textAlign: 'center'
	},
	buttonBg:{
		backgroundColor: '#ff3c36'
	},
	line:{
		width: '35%',
		borderWidth: 3,
		borderColor: '#a9acb1',
		borderRadius: 5,
		alignSelf: 'center',
		marginBottom: 5
	},
	backButton:{
		alignSelf: 'flex-start'
	},
	backText:{
		width: 26,
		height: 26,
		margin: 5
	},
	bgImage:{
		position: 'absolute',
		top: 0,
		left: 0,
		width: 278,
		height: 378 
	}
});

const LoginConnect = connect(mapStateToProps, { changeEmail, changePassword })(Login);
export default LoginConnect;
