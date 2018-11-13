<template>
	<div id="index">
		<p>大家好</p>
		<span @click="linkRem">跳转</span>
		<h4>{{this.$route.params.userId}}</h4>
	</div>
</template>
<script>
export default {

  name: 'index',
  data() {
    return {

    };
  },
  methods:{
  	linkRem(){
  		this.$router.push({path:'rem'});

  	}
  }
};
</script>

<style lang="stylus" scoped>
	#index
		text-align: right
		p
			font-size: .4rem
			color red
</style>
