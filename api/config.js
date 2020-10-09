function request(option){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:option.url,
			method:option.method || 'GET',
			success:(res)=>{
			    resolve(res.data);
			 }, 
			 fail:(err)=>{
				 reject(err)
			 }
		
		})
	}).catch((e) => {})
}

export default request