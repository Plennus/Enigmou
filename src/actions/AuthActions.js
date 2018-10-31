export const changeEmail = (email) => {
	return {
		type:'changeEmail',
		payload:{
			email:email
		}
	}
}

export const changePassword = (password) => {
	return {
		type:'changePassword',
		payload:{
			password:password
		}
	}
}