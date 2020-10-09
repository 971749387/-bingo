import request from "./config.js"

export function getcategory(){
	return request({
		url:"http://127.0.0.1:3000/api/getfruitcate"
	})
}

export function getfruit(id){
	return request({
		url:`http://127.0.0.1:3000/api/getfruitlist/${id}`,
		method:"post"
	})
}