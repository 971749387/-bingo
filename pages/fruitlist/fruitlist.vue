<template>
	<view>
		<van-tree-select
		  :items="items"
		  :main-active-index="mainActiveIndex"
		  :active-id="activeId"
		  bind:click-nav="onClickNav"
		  bind:click-item="onClickItem"
		/>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				items:[
						  { text: '浙江', children: [], dot: true },
						        { text: '江苏', children: [], badge: 5 },
					], 
				  mainActiveIndex: 0,
				  activeId: null
			}
		},
		methods: {
			onClickNav({ detail = {} }) {
			    this.setData({
			      mainActiveIndex: detail.index || 0,
			    });
			  },
			
			  onClickItem({ detail = {} }) {
			    const activeId = this.data.activeId === detail.id ? null : detail.id;
			
			    this.setData({ activeId });
			  },
		}
	}
</script>

<style>

</style>
