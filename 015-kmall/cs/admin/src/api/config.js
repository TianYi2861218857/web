export const SERVER = 'http://127.0.0.1:3000'
export const API_CONFIG ={
	//路由地址,请求方法,
	login:             ['/sessions/users','post'],
	logout:            ['/sessions/users','delete'],
	getCounts:         ['/counts','get'],
	getUserList:       ['/users/list','get'],
}