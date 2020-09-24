import request from './config.js'

export function getlunbo(){
	return request({
		url:"http://127.0.0.1:3000/api/getlunbo"
	})
}