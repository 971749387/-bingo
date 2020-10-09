<template>
	<view class="car-container">
		<van-card
		  num="2"
		  price="2.00"
		  desc="描述信息"
		  title="商品标题"
		  :thumb="imageURL"
		/>
		
		
		<van-submit-bar
		  price="3050"
		  button-text="提交订单"
		  bind:submit="onSubmit"
		/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			 
		}
	}
</script>

<style lang="scss" scoped>
	.car-container{
		background-color: #e9e9e9;
	}
</style>
