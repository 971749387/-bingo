<template>
	<view class="group-container">
		<van-tabs class="van-tabs" :active="active" v-on:change="onChange">
		  <van-tab class="van-tab" title="综合">
			  <view class="image">
			  	<image src="../../static/images/none.png" mode=""></image>
				
			  </view>
			  <view class="text">
				<text>
					该分类暂无内容
				</text>
								
			  </view>
		  </van-tab>
		  <van-tab  class="van-tab" title="最热">
			 <view class="image">
			 	<image src="../../static/images/none.png" mode=""></image>
			 </view>
			 <view class="text">
			 	该分类暂无内容
			 </view>
		  </van-tab>
		  <van-tab  class="van-tab" title="新品">
			<view class="image">
				<image src="../../static/images/none.png" mode=""></image>
			</view>
			<view class="text">
				该分类暂无内容
			</view>
		  </van-tab>
		</van-tabs>
	</view>
</template>
 
<script>
	export default {
		data() {
			return {
				 active: 0,
			}
		},
		methods: {
			onChange(){
				
			}
		}
	}
</script>

<style lang="scss" scoped>
.group-container{
	.van-tabs{
		.van-tab{
			display: flex;
			// flex-direction: column;
			// flex-wrap: wrap;
			justify-content: center;
			align-items: center;
			
			.text{
				text-align: center;
			}
		}
	}
}
</style>
