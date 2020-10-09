<template>
	<view class="user-container">
		<view class="header">
			
			<view class="head">
				<image :src="userInfo.avatarUrl" mode=""></image>
			</view>
			<view class="username">{{userInfo.nickName}}</view>
			<view class="vipbox">
				<view class="text">
					<view class="title">马上登录领取会员卡</view>
					<view class="bottom">充10送1,多充多送</view>
				</view>
				
				<view class="button">领取会员卡</view>
			</view>
		</view>
		
		<view class="" v-if="this.userInfo == '' ? true:false">
			<button class="sys_btn" open-type="getUserInfo" lang="zh_CN" @getuserinfo="appLoginWx">登录授权</button>
		</view>
		
		<van-cell   size="large"  :border="false">
			 <template #title>
					<image src="../../static/images/order.png" mode="" style="width: 30rpx;height: 30rpx;"></image> 
			    <span class="custom-title">我的订单</span>
			  </template>
			  
			  <template #default>
				  <text>查看全部<van-icon name="arrow" /></text>
				  	
			  </template>
			  
		</van-cell>
		
		<van-grid :border="false" :column-num="4" class="van-grid">
		  <van-grid-item class="van-grid-item">
			 <image src="../../static/images/物流 卡车.png" mode=""></image>
			<text>待收货</text>
		  </van-grid-item>
		  <van-grid-item class="van-grid-item">
			  <image src="../../static/images/package.png" mode=""></image>
		    <text>待取货</text>
		  </van-grid-item>
		  <van-grid-item class="van-grid-item">
			  <image src="../../static/images/完成.png" mode=""></image>
			<text>已完成</text>
		  </van-grid-item>
		 <van-grid-item class="van-grid-item">
			 <image src="../../static/images/close.png" mode=""></image>
			<text>已关闭</text>
		  </van-grid-item>
		</van-grid>
		
		
		<van-cell   size="large"  style="margin-bottom:20rpx;">
			 <template #title>
					<image src="../../static/images/order_pressed.png" mode="" style="width: 30rpx;height: 30rpx;"></image> 
			    <span class="custom-title">我的预约</span>
			  </template>
			  
			  <template #default>
				  <text><van-icon name="arrow" /></text>
				  	
			  </template>
			  
		</van-cell>
		
		<van-cell   size="large"  >
			 <template #title>
					<image src="../../static/images/ticket.png" mode="" style="width: 30rpx;height: 30rpx;"></image> 
			    <span class="custom-title">我的优惠券</span>
			  </template>
			  
			  <template #default>
				  <text><van-icon name="arrow" /></text>
				  	
			  </template>
			  
		</van-cell>
		
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				userInfo:[],
			}
		},
		methods: {
			appLoginWx(){
				var _this = this
			                // #ifdef MP-WEIXIN
			                    uni.getProvider({
			                      service: 'oauth',
			                      success: function (res) {
			                        if (~res.provider.indexOf('weixin')) {
			                            uni.login({
			                                provider: 'weixin',
			                                success: (res2) => {
			                                    
			                                    uni.getUserInfo({
			                                        provider: 'weixin',
			                                        success: (info) => {//这里请求接口
			                                            console.log(res2);
			                                            console.log(info);
														_this.userInfo = info.userInfo
			                                            
			                                        },
			                                        fail: () => {
			                                            uni.showToast({title:"微信登录授权失败",icon:"none"});
			                                        }
			                                    })
			                            
			                                },
			                                fail: () => {
			                                    uni.showToast({title:"微信登录授权失败",icon:"none"});
			                                }
			                            })
			                            
			                        }else{
			                            uni.showToast({
			                                title: '请先安装微信或升级版本',
			                                icon:"none"
			                            });
			                        }
			                      }
			                    });
			                    //#endif
			            }
		}
	}
</script>

<style lang="scss" scoped>
	.user-container{
		background-color: #CCCCCC;
		.header{
			
			width: 100%;
			height: 500rpx;
			background-image: url('../../static/images/userbg.jpg');
			background-size: cover;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			
			.head{
				height: 120rpx;
				width: 120rpx;
				border-radius: 50%;
				overflow: hidden;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.username{
				margin-bottom: 40rpx;
			}
			.vipbox{
				width: 600rpx;
				height: 200rpx;
				background-color: #fff;
				border-radius: 30rpx;
				display: flex;
				justify-content: space-around;
				align-items: center;
				
				.text{
					display: flex;
					flex-direction: column;
					
					.title{
						color: orange;
					}
					
					.bottom{
						color: orange;
						font-size: 24rpx;
					}
					
				}
				.button{
					width: 200rpx;
					height: 80rpx;
					color: #fff;
					background-color: orange;
					text-align: center;
					line-height: 80rpx;
					border-radius: 20rpx;
				}
			}
		}
		.van-grid{
			display: flex;
			justify-content: space-around;
			padding: 30rpx 0;
			border-bottom: 2rpx solid #CCCCCC;
			border-top: 2rpx solid white;
			background-color: #FFFFFF;
			.van-grid-item{
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				image{
					width: 50rpx;
					height: 50rpx;
					margin-bottom: 10rpx;
				}
				font-size: 24rpx;
			}
		}
	}
</style>
