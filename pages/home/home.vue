<template>
	<view class="home-container">
		<!-- 轮播图 -->
		<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
			<swiper-item class="swiper-item" v-for="item in lunbodata">
				<image :src="item.img" mode=""></image>
			</swiper-item>
		</swiper>
		<!-- 菜单 -->
		<view class="home-menu">
			<view class="first">
				<image src="../../static/images/menu1.png" class="img"></image>
				<text>特卖</text>
			</view>
			<view class="first" @click="toAlive">
				<image src="../../static/images/menu2.png" class="img"></image>
				<text>动态</text>
			</view>
			<view class="first">
				<image src="../../static/images/menu3.png" class="img"></image>
				<text>预约</text>
			</view>
			<view class="first" @click="toBeforeShopping">
				<image src="../../static/images/menu4.png" class="img"></image>
				<text>优惠券</text>
			</view>
			<view class="first">
				<image src="../../static/images/menu5.png" class="img"></image>
				<text>联系我们</text>
			</view>
		</view>
		<!-- 店主联系 -->
		<view class="contact">
			<image src="../../static/images/24h service.png" class="sticky"></image>
			<image src="../../static/images/boss.jpg" class="img"></image>
			<view class="info">
				<view class="font">
					<text class="title">欢迎光临本店，我是店主</text>
					<text class="content">
						本店24小时不打烊，点击右侧按钮立即咨询店主→→→
					</text>
				</view>
			</view>
			<view class="icon">
				<image src="../../static/images/phone.png" class="img"></image>
				<image src="../../static/images/wx.png" class="img"></image>
			</view>
		</view>
		<!-- 优惠券 -->
		<view class="coupon">
			<view class="url">
				<text class="ticket">优*惠*券</text>
				<image src="../../static/images/ticket_coupon.png" mode=""></image>
			</view>

			<u-divider></u-divider>
			<view class="content">
				<view class="ten">
					<view class="money">￥10</view>
					<text>代金券</text>
				</view>
				<view class="time">
					<text class="customer">果唯伊新顾客</text>
					<text class="long">长期有效</text>
				</view>
				<view class="click">
					<button>领取</button>
					<view class="text">42人已领</view>
				</view>
			</view>

			<view class="content_second">
				<view class="ten">
					<view class="money">￥5</view>
					<text>满100元可用</text>
				</view>
				<view class="time">
					<view class="customer">果唯伊新顾客</view>
					<view class="long">长期有效</view>
				</view>
				<view class="click">
					<button>领取</button>
					<view class="text">18人已领</view>
				</view>
			</view>
		</view>
		<!-- 爆款 -->
		<view class="show">
			<view class="hot">
				<view class="img">
					<text>爆*款</text>
					<image src="../../static/images/hot.png" mode=""></image>
				</view>
				<view class="all">
					<text>全部</text>
					<image src="../../static/images/right.png" mode=""></image>
				</view>
			</view>

			<view class="goods">
				<image src="../../static/images/longyan.jpg" mode=""></image>
				<text>龙眼</text>
				<view class="money">
					<text class="orange">￥18.<text class="small">8</text></text>
					<text class="delete">￥19.8</text>
				</view>
			</view>
		</view>
		<!-- 精品推荐 -->
		<view class="recommend">
			<view class="hot">
				<view class="img">
					<text>精*品*推*荐</text>
					<image src="../../static/images/recommend.png" mode=""></image>
				</view>
			</view>

			<view class="goods">
				<image src="../../static/images/dole.jpg" mode=""></image>
				<image src="../../static/images/sale.png" class="sale"></image>
				<text>香蕉</text>
				<view class="money">
					<text class="orange">￥2.<text class="small">68</text></text>
					<text class="delete">￥2.68</text>
				</view>
			</view>
		</view>
		<!-- 水果列表 -->
		<view class="fruits_list">
			<van-grid :column-num="2" :center="false" :border="false" >
				<!-- use-slot允许使用插槽 -->
			  <van-grid-item use-slot>
				  <image src="../../static/images/hothot.png" class="hot"></image>
				  <image src="../../static/images/hamigua.jpg"></image>
					<text>海南西周蜜</text>
					<view class="money">
						<text class="sale">￥11.<text class="small">8</text></text>
						<text class="old">￥12.5</text>
					</view>
			  </van-grid-item>
			   <van-grid-item use-slot>
				   <image src="../../static/images/hothot.png" class="hot"></image>
				   <image src="../../static/images/chelizi.jpg"></image>
				   				<text>车厘子</text>
				   				<view class="money">
				   					<text class="sale">￥140</text>
				   					<text class="old">￥148</text>
				   				</view>
			   </van-grid-item>
			    <van-grid-item use-slot>
					<image src="../../static/images/hothot.png" class="hot"></image>
					<image src="../../static/images/qingti.jpg"></image>
									<text>青提</text>
									<view class="money">
										<text class="sale">￥37.<text class="small">8</text></text>
										<text class="old">￥39.8</text>
									</view>
				</van-grid-item>
				 <van-grid-item use-slot>
					 <image src="../../static/images/hothot.png" class="hot"></image>
					 <image src="../../static/images/longyan.jpg"></image>
					 				<text>龙眼</text>
					 				<view class="money">
					 					<text class="sale">￥18.<text class="small">8</text></text>
					 					<text class="old">￥19.8</text>
					 				</view>
				 </van-grid-item>
			</van-grid>
			<!-- 芦柑 -->
			<view class="orange_goods">
				<view class="goods">
					<image src="../../static/images/orange.jpg" mode=""></image>
					<image src="../../static/images/hothot.png" class="sale"></image>
					<text>芦柑</text>
					<view class="money">
						<text class="orange">￥3.<text class="small">3</text></text>
						<text class="delete">￥3.3</text>
					</view>
				</view>
			</view>
			<van-grid :column-num="2" :center="false" :border="false" >
				<!-- use-slot允许使用插槽 -->
			  <van-grid-item use-slot>
				  <image src="../../static/images/tuijian.png" class="recommend_red"></image>
				  <image src="../../static/images/watermelon.jpg" ></image>
					<text>西瓜</text>
					<view class="money">
						<text class="sale">￥6.<text class="small">46</text></text>
						<text class="old">￥6.8</text>
					</view>
			  </van-grid-item>
			   <van-grid-item use-slot>
				   <image src="../../static/images/tuijian.png" class="recommend_red"></image>
				   <image src="../../static/images/lemon.jpg"></image>
				   				<text>柠檬</text>
				   				<view class="money">
				   					<text class="sale">￥5.<text class="small">7</text></text>
				   					<text class="old">￥6</text>
				   				</view>
			   </van-grid-item>
			    <van-grid-item use-slot>
					<image src="../../static/images/tuijian.png" class="recommend_red"></image>
					<image src="../../static/images/qingti.jpg"></image>
									<text>越南白心火龙果</text>
									<view class="money">
										<text class="sale">￥9.<text class="small">4</text></text>
										<text class="old">￥9.9</text>
									</view>
				</van-grid-item>
				 <van-grid-item use-slot>
					 <image src="../../static/images/tuijian.png" class="recommend_red"></image>
					 <image src="../../static/images/honghuolongguo.jpg"></image>
					 				<text>越南红心火龙果</text>
					 				<view class="money">
					 					<text class="sale">￥18.<text class="small">8</text></text>
					 					<text class="old">￥19.8</text>
					 				</view>
				 </van-grid-item>
			</van-grid>
			<!-- 牛油果 -->
			<view class="orange_goods">
				<view class="goods">
					<image src="../../static/images/avocado.jpg" mode=""></image>
					<image src="../../static/images/hothot.png" class="sale"></image>
					<text>墨西哥牛油果</text>
					<view class="money">
						<text class="orange">￥9.<text class="small">4</text></text>
						<text class="delete">￥9.9</text>
					</view>
				</view>
			</view>
			<van-grid :column-num="2" :center="false" :border="false" >
			<van-grid-item use-slot>
				  <image src="../../static/images/tuijian.png" class="recommend_red"></image>
				  <image src="../../static/images/kiwi.jpg" ></image>
					<text>新西兰进口绿果</text>
					<view class="money">
						<text class="sale">￥6.<text class="small">5</text></text>
						<text class="old">￥6.8</text>
					</view>
			  </van-grid-item>
			   <van-grid-item use-slot>
				   <image src="../../static/images/tuijian.png" class="recommend_red"></image>
				   <image src="../../static/images/pomelo.jpg"></image>
				   				<text>红柚</text>
				   				<view class="money">
				   					<text class="sale">￥9.<text class="small">4</text></text>
				   					<text class="old">￥9.9</text>
				   				</view>
			   </van-grid-item>
			    <van-grid-item use-slot>
					<image src="../../static/images/tuijian.png" class="recommend_red"></image>
					<image src="../../static/images/jackfruit.jpg"></image>
									<text>泰国红肉菠萝蜜</text>
									<view class="money">
										<text class="sale">￥43.<text class="small">5</text></text>
										<text class="old">￥45.8</text>
									</view>
				</van-grid-item>
			</van-grid>
		</view>
		<!-- 商户介绍 -->
		<view class="introduction">
			<view class="title">
				<text>商*户*介*绍</text>
				<image src="../../static/images/introduc.png" mode=""></image>
				<van-divider />
			</view>
			<view class="time">
				<van-icon name="underway-o" />
				<text>8:30-18:00</text>
			</view>
			<view class="support">
				<van-icon name="apps-o" />
				<image src="../../static/images/bg-wifi.png" mode=""></image>
				<image src="../../static/images/p.png" mode=""></image>
				<image src="../../static/images/alipay.png" mode=""></image>
				<image src="../../static/images/weixin.png" mode=""></image>
			</view>
			<view class="intro">
				<van-icon name="description" />
				<text>商户介绍</text>
			</view>
			<view class="guoweiyi">
				<image src="../../static/images/guoweiyi.jpg" class="green"></image>
				<image src="../../static/images/list1.jpg" mode=""></image>
				<image src="../../static/images/list2.jpg" mode=""></image>
				<image src="../../static/images/list3.jpg" mode=""></image>
				<image src="../../static/images/list4.jpg" mode=""></image>
				<image src="../../static/images/list5.jpg" mode=""></image>
			</view>
			
		</view>
	</view>
</template>

<script>
	import {
		getlunbo
	} from "../../api/home.js"

	export default {
		data() {
			return {
				lunbodata: []
			}
		},
		methods: {
			async getlunbodata() {
				console.log("lunbo...")
				var {
					message
				} = await getlunbo()
				console.log(message)
				this.lunbodata = message

			},
			toAlive(){
				uni.navigateTo({
					url:"../alive/alive"
				})
			},
			toBeforeShopping(){
				uni.navigateTo({
					url:"../beforeShopping/beforeShopping"
				})
			}
		},
		components: {

		},
		onLoad() {
			console.log('onload')
			this.getlunbodata()
		},
		onShow() {

		}
	}
</script>

<style lang="scss" scoped>
	.home-container {
		background-color: #F4F4F4;
		margin-bottom: 20rpx;

		.swiper {
			height: 200px;

			.swiper-item {

				// height: 200px;
				image {
					width: 100%;
					height: 100%;
				}
			}
		}

		.home-menu {
			display: flex;
			background-color: white;

			.img {
				width: 100rpx;
				height: 88rpx;
			}

			.first {
				display: flex;
				flex-direction: column;
				align-items: center;
				width: 100px;
				// border: 1px solid red;

				text {
					font-size: 28rpx;
				}
			}
		}

		.contact {
			display: flex;
			align-items: center;
			position: relative;
			width: 800rpx;
			height: 100rpx;
			background-color: white;
			// border: 1px solid red;
			padding: 25rpx;
			margin: 20rpx 0;

			// justify-content: space-between;
			.sticky {
				position: absolute;
				width: 50rpx;
				height: 50rpx;
				top: 80rpx;
				left: 80rpx;
				z-index: 9;
			}

			.img {
				width: 90rpx;
				height: 90rpx;

			}

			.info {
				margin-left: 15rpx;

				.font {
					display: flex;
					flex-direction: column;
					width: 400rpx;
				}

				.title {
					font-size: 30rpx;
				}

				.content {
					font-size: 24rpx;
					color: #888888;
				}

			}


			.icon {
				display: flex;
				// justify-content: space-between;
				width: 200rpx;
				// height: 100%;
				margin-left: 40rpx;

				.img {
					width: 70rpx;
					height: 70rpx;
				}
			}


		}

		.content {
			display: flex;
			justify-content: space-between;
			// justify-content: space-between;
			margin-top: 20rpx;
			width: 100%;

			.time {
				flex: 1;
				margin-top: 10rpx;

				.customer {
					flex: 1;
					display: flex;
					flex-direction: column;
					font-size: 36rpx;
				}

				.long {
					margin-top: 10rpx;
					font-size: 24rpx;
					color: #888888;
				}
			}


			.ten {
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				// align-items: center;
				text-align: center;
				width: 200rpx;
				height: 150rpx;
				background-color: #3A82FF;
				border-radius: 12rpx;
				margin: 0px 10px;

				.money {
					padding: 15rpx;
					text-align: center;
					font-size: 50rpx;
					color: white;
					border-bottom: 1px dotted white;
				}

				text {
					font-size: 24rpx;
					color: white;
					text-align: center;
				}




			}



			.click {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;


				button {
					width: 150rpx;
					margin: 0px 10px;
					border-radius: 50rpx;
					border: 1px solid #BFBFBF;
					font-size: 30rpx;
				}

				.text {
					font-size: 24rpx;
					color: #888888;
				}
			}
		}


		.content_second {
			display: flex;
			justify-content: space-between;
			// justify-content: space-between;
			margin-top: 20rpx;
			width: 100%;

			.time {
				margin-top: 10rpx;
				flex: 1;

				.customer {
					flex: 1;
					display: flex;
					flex-direction: column;
					font-size: 36rpx;
				}

				.long {
					margin-top: 10rpx;
					font-size: 24rpx;
					color: #888888;
				}
			}


			.ten {
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				// align-items: center;
				text-align: center;
				width: 200rpx;
				height: 150rpx;
				background-color: #FF4362;
				border-radius: 12rpx;
				margin: 0px 10px;

				.money {
					padding: 15rpx;
					text-align: center;
					font-size: 50rpx;
					color: white;
					border-bottom: 1px dotted white;
				}

				text {
					font-size: 24rpx;
					color: white;
					text-align: center;
				}




			}



			.click {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;


				button {
					width: 150rpx;
					margin: 0px 10px;
					border-radius: 50rpx;
					border: 1px solid #BFBFBF;
					font-size: 30rpx;
				}

				.text {
					font-size: 24rpx;
					color: #888888;
				}
			}
		}

		.coupon {
			display: flex;
			// justify-content: center;
			flex-direction: column;
			align-items: center;
			background-color: white;

			.ticket {
				margin-left: 105rpx;
			}

			.url {
				display: flex;
				justify-content: center;
				align-items: center;
				margin-top: 15rpx;

				image {
					width: 50rpx;
					height: 50rpx;
				}
			}

		}

		.show {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			background-color: white;
			margin-top: 20rpx;

			.hot {
				display: flex;
				justify-content: center;
				align-items: center;
				// width:800rpx;
				height: 100rpx;
				line-height: 100rpx;

				.img {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 800rpx;
					text-align: center;
					flex: 1;

					text {
						margin-left: 170rpx;
					}

					image {
						width: 50rpx;
						height: 50rpx;

					}

				}

				.all {
					width: 100rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					// border:1px solid green;
					font-size: 24rpx;
					color: #868686;

					image {
						width: 40rpx;
						height: 40rpx;
					}
				}

			}

			.goods {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: 800rpx;

				image {
					width: 100%;
				}

				text {
					padding-top: 15rpx;
					font-size: 28rpx;
				}

				.money {
					.orange {
						color: #FF7800;
						font-size: 30rpx;

						.small {
							font-size: 20rpx;
						}
					}

					.delete {
						color: #AAAAAA;
						text-decoration: line-through;
						font-size: 24rpx;
					}
				}
			}
		}


		.recommend {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			background-color: white;
			margin: 20rpx 0;
			

			.hot {
				display: flex;
				justify-content: center;
				align-items: center;
				// width:800rpx;
				height: 100rpx;
				line-height: 100rpx;

				.img {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 800rpx;
					text-align: center;
					flex: 1;

					text {
						// margin-left: 60rpx;
					}

					image {
						width: 50rpx;
						height: 50rpx;

					}

				}

			}

			.goods {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				position: relative;
				

				// width: 800rpx;
				.sale {
					position: absolute;
					top: 0rpx;
					left: 0rpx;
					width: 100rpx;
					height: 100rpx;
				}

				image {
					width: 700rpx;
					height: 900rpx;
				}

				text {
					padding-top: 15rpx;
					font-size: 28rpx;
				}

				.money {
					.orange {
						color: #FF7800;
						font-size: 30rpx;

						.small {
							font-size: 20rpx;
						}
					}

					.delete {
						color: #AAAAAA;
						text-decoration: line-through;
						font-size: 24rpx;
					}
				}
			}
		}
		
		// 水果列表
		.fruits_list{
			background-color: white;
			.van-grid{
				// padding: 100rpx;
				.van-grid-item{
					position: relative;
							width:100%;
							// width:300rpx;
							height:100%;
						// 热销
						.hot{
							position: absolute;
							width:100rpx;
							height:100rpx;
							top:0rpx;
							left:0;
							z-index: 9;
						}
						// 推荐
						.recommend_red{
							position: absolute;
							width:100rpx;
							height:100rpx;
							top:30rpx;
							left:16rpx;
							z-index: 9;
						}
							text{
								font-size:30rpx;
								margin-top:10rpx;
							}
							image{
								width:100%;
								height: 300rpx;
							}
							.money{
								margin-top:10rpx;
								.sale{
									margin-right:10rpx;
									color: #FF7800;
									font-size: 30rpx;
										.small {
																font-size: 20rpx;
															}
								}
								.old{
									 color: #AAAAAA;
									 font-size: 20rpx;
									 text-decoration: line-through;
								}
							}
						}
			
			}
			// 芦柑
			.orange_goods{
				.goods {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					position: relative;
					// overflow: hidden;
				
					// width: 800rpx;
					.sale {
						position: absolute;
						top: -30rpx;
						left: 40rpx;
						width: 100rpx;
						height: 100rpx;
					}
				
					image {
						// width: 100%;
						height: 500rpx;
					}
				
					text {
						padding-top: 15rpx;
						font-size: 28rpx;
					}
				
					.money {
						.orange {
							color: #FF7800;
							font-size: 30rpx;
				
							.small {
								font-size: 20rpx;
							}
						}
				
						.delete {
							color: #AAAAAA;
							text-decoration: line-through;
							font-size: 24rpx;
						}
					}
				}
			}
		}
		
		// 商户介绍
		.introduction{
			margin-top:20rpx;
			background-color: white;
			.title{
				display: flex;
				justify-content: center;
				align-items: center;
				image{
					width:50rpx;
					height:50rpx;
				}
			}
			.time{
				display: flex;
				margin-left:20rpx;
				margin-top:20rpx;
				text{
					margin-left:20rpx;
					font-size:28rpx;
				}
			}
			.support{
				display: flex;
				margin-left:20rpx;
				margin-top:20rpx;
				image{
					margin-left: 30rpx;
					width:50rpx;
					height:50rpx;
				}
			}
			.intro{
				display: flex;
				margin-left:20rpx;
				margin-top:20rpx;
				align-items: center;
				text{
					margin-left:20rpx;
					font-size:28rpx;
				}
			}
			.guoweiyi{
				padding: 20rpx;;
				.green{
					padding-right:40rpx;
					width:100%;
					height:300rpx;
					
				}
				image{
					width:100%;
					height:600rpx;
				}
			}
			
			
		}

	}
</style>
