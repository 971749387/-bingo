<template>
	<view>
		<van-tree-select
		  :items="items"
		  :main-active-index="mainActiveIndex"
		  :active-id="activeId"
		  v-on:click-nav="onClickNav"
		>
		<template #content>
			<view class="fruit-container" :v-if="isShowNews" >
				<view class="item" v-for="item in items[mainActiveIndex].children" :v-key="item.id">
					<view class="img">
						<image :src="item.img" mode=""></image>
					</view>
					
					<view class="text">
						<view class="title">
							<text class="tui" v-if="item.status == 1 ? true:false">荐</text>
							<text>{{item.name}}</text>
						</view>
						<view class="price">
							<view class="sell_price">￥{{item.sell_price}}</view>
							<view class="total_price">￥{{item.total_price}}</view>
							<view class="stepper">
									<van-icon size="24rpx" name="shopping-cart-o" color="#fff" />				
							</view>
						</view>
						<view class="bottom">
							<text class="label" v-if="item.label == null ? false:true">{{item.label}}</text>
							<view class="buy">{{item.buy}}人购买</view>
							<view class="see">{{item.watch}}浏览</view>
						</view>
					</view>
					 
					
				</view>
			</view>
		</template>
		</van-tree-select>
		
	</view>
</template>

<script>
	import {getcategory,getfruit} from "../../api/fruitlist.js"
	export default {
		data() {
			return {
				items:[],  
				  mainActiveIndex: 0,
				  activeId: null,
				  isShowNews: false,
				  showtui:false,
				  showlabel:false
			}
		},
		methods: {
			async onClickNav({ detail = {} }) {
				console.log("onclicknav")

			      this.mainActiveIndex = detail.index || 0
					// console.log(detail.index)
					this.isShowNews = false;
					var id = this.items[detail.index].cat_id
					var children = await this.getfruitlist(id)
					this.items[detail.index].children = children
					// console.log(this.items[detail.index].children)
					this.isShowNews = true
					
			  },
			 
			 async category(){
				  var {message} = await getcategory();
				  var first_id = message[0].cat_id;
				  var first_child = await this.getfruitlist(first_id);
				  message[0].children = first_child;
				  message.map(v=>{
					  v.text = v.type
					  delete v.type
				  })
				  this.items = message
				  
				  
				   this.isShowNews = true
			  },
			  async getfruitlist(id){
				  var {message} = await getfruit(id)
				  
				  return message
			  }
		},
		onLoad(){
			console.log("load")
			this.category()
			
		}
	}
</script>

<style lang="scss" scoped>
	.fruit-container{
		width: 600rpx;
		height: 80vh;
		// background-color: #808080;
		padding: 16rpx;
		.item{
			display: flex;
			// justify-content: space-between;
			width: 100%;
			height: 200rpx;
			margin: 20rpx 0;
			background-color: #fff;
			.img{
				height: 200rpx;
				width: 200rpx;
				
				image{
				height: 100%;
				width: 100%;
				}
			}
			.text{
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				flex: 1;
				padding: 12rpx;
				.title{
					.tui{
						padding: 1rpx;
						background-color: orange;
						color: #fff;
						margin: 0 10rpx;
						
					}
				}
				
				.price{
					display: flex;
					justify-content: space-between;
					height: 80rpx;
					// line-height: 80rpx;
					align-items: center;
					.sell_price{
						font-size: 38rpx;
						color: orange;
					}
					.total_price{
						flex: 1;
						margin-left: 16rpx;
						font-size: 24rpx;
						color: gray;
						text-decoration: line-through;
					}
					
					.stepper{
						// line-height: 200rpx;
						height: 46rpx;
						width: 46rpx;
						border-radius: 23rpx;
						background-color: orange;
						line-height: 46rpx;
						text-align: center;
						
					}
				}
				
				.bottom{
					display: flex;
					// justify-content: space-between;
					.label{
						padding: 2rpx;
						color: green;
						border: 2rpx solid green;
						font-size: 24rpx;
						margin-right: 10rpx;
					}
					
					.buy{
						font-size: 24rpx;
						color: gray;
					}
					
					.see{
						margin-left: 16rpx;
						font-size: 24rpx;
						color: gray;
					}
				}
			}
			
		}
	}
</style>
