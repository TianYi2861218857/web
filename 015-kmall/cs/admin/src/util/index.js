export const saveUsername = (username) =>{
	window.localStorage.setItem('username',username)
}
export const getUsername = (username) =>{
	return window.localStorage.getItem('username')
}
export const removeUsername = (username) =>{
	return window.localStorage.removeItem('username')
}