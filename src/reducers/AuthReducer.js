const initialState = {
	email:'',
	password:'',
	successEmail: false,
	errorEmail: false
};

const AuthReducer = (state = initialState, action) => {

	if(action.type == 'changeEmail') {	
		return {...state, email:action.payload.email};
	}

	if(action.type == 'changePassword') {
		return {...state, password:action.payload.password};
	}

	return state;
}

export default AuthReducer;