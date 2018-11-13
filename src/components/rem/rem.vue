<template>
	<div id="rem">
		<p>安保处</p>
		<span @click="linkIndex">跳转到index</span>
	</div>
</template>
<script>
export default {

  name: 'rem',

  data() {
    return {

    };
  },
  methods:{
  	linkIndex(){
  		this.$router.push({name:'index',params: { userId: 123 }})
  	}
  }
};
</script>

<style lang="stylus" scoped>
 #rem
 	p
 		font-size: .4rem
	
</style>
