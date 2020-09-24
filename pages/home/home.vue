<template>
	<view class="home-container">
		<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
			<swiper-item class="swiper-item" v-for="item in lunbodata" >
				<image :src="item.img" mode=""></image>
			</swiper-item>
		</swiper>
		<!-- <view class="">
			<text>sss</text>
		</view> -->
		
	</view>
</template>

<script>
	import {getlunbo} from "../../api/home.js"
	export default {
		data() {
			return {
				lunbodata:[]
			}
		},
		methods: {
			async getlunbodata(){
				console.log("lunbo...")
				var {message} =await getlunbo()
				console.log(message)
				this.lunbodata = message
				
			}
		},
		onLoad() {
			console.log('onload')
			this.getlunbodata()
		},
		onShow(){
			
		}
	}
</script>

<style lang="scss" scoped>
	.home-container{
		.swiper{
			height: 200px;
			.swiper-item{
			// height: 200px;
			image{
				width: 100%;
				height: 100%;
			} 
		}
		}
	}
</style>
