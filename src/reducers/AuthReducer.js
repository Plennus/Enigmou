import validator from 'validator';

const initialState = {
	email:'',
	password:'',
	successEmail: false,
	errorEmail: false,
  successPass: false,
  errorPass: false
};

const AuthReducer = (state = initialState, action) => {

	if(action.type == 'changeEmail') {
    state.errorEmail = true
    if(validator.isEmail(state.email)) {
      state.errorEmail = false;
      state.successEmail = true;
    } else {
      state.successEmail = false;
      state.errorEmail = true;      
    }
		return {...state, email:action.payload.email};
	}

	if(action.type == 'changePassword') {
    state.errorPass = true
    if(state.password.length > 6) {
      state.errorPass = false;
      state.successPass = true;
    } else {
      state.errorPass = true;
      state.successPass = false;
    }
		return {...state, password:action.payload.password};
	}

	return state;
}

export default AuthReducer;