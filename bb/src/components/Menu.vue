<template>
    <div class= "myMenu" v-if="menuData.requred" v-bind:style="{display: display, left: left + 'px', top: top + 'px'}">
        <div>
        <a class="remember_piece">司</a>
        <a class="remember_piece">军</a>
        <a class="remember_piece">师</a>
        <a class="remember_piece">旅</a>
        <br>
        <a class="remember_piece">团</a>
        <a class="remember_piece">营</a>
        <a class="remember_piece">连</a>
        <a class="remember_piece">排</a>
        <br>
        <a class="remember_piece">兵</a>
        <a class="remember_piece">炸</a>
        <a class="remember_piece">旗</a>
        <a class="remember_piece">雷</a>
        <br>
        <a class="remember_piece">一</a>
        <a class="remember_piece">二</a>
        <a class="remember_piece">三</a>
        <a class="remember_piece">四</a>
        <br>
        <a class="remember_piece">？</a>
        <a class="remember_piece">AI猜棋</a>
    </div>
    </div>
</template>

<script>
export default {
    props: {
      menuData: {
        type: Object,
        default () {
          return {
            requred: false,
            axios: {
              x: null,
              y: null
            }
          }
        }
      }
	},
	data() {
		return {
			display: 'none',
			left: 0,
			top: 0,
		}
	},
    watch: {
      'menuData.axios' (val) {
		  this.display='block'
		  this.left=val.x
		  this.top=val.y
      }
    }
  }
</script>


<style scoped>
.myMenu {
	/* visibility: hidden; */
	display: none;
    position: absolute;
	top: 500px;
	left: 0px;
	width: 200px;
	z-index: 7;
}
.remember_piece {
	-moz-box-shadow:inset 0px 1px 0px 0px #a6827e;
	-webkit-box-shadow:inset 0px 1px 0px 0px #a6827e;
	box-shadow:inset 0px 1px 0px 0px #a6827e;
	background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #7d5d3b), color-stop(1, #634b30));
	background:-moz-linear-gradient(top, #7d5d3b 5%, #634b30 100%);
	background:-webkit-linear-gradient(top, #7d5d3b 5%, #634b30 100%);
	background:-o-linear-gradient(top, #7d5d3b 5%, #634b30 100%);
	background:-ms-linear-gradient(top, #7d5d3b 5%, #634b30 100%);
	background:linear-gradient(to bottom, #7d5d3b 5%, #634b30 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#7d5d3b', endColorstr='#634b30',GradientType=0);
	background-color:#7d5d3b;
	-moz-border-radius:3px;
	-webkit-border-radius:3px;
	border-radius:3px;
	border:1px solid #54381e;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:13px;
	padding:5px 8px;
	text-decoration:none;
    text-shadow:0px 1px 0px #4d3534;
    margin-left: -3px;
}
.remember_piece:hover {
	background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #634b30), color-stop(1, #7d5d3b));
	background:-moz-linear-gradient(top, #634b30 5%, #7d5d3b 100%);
	background:-webkit-linear-gradient(top, #634b30 5%, #7d5d3b 100%);
	background:-o-linear-gradient(top, #634b30 5%, #7d5d3b 100%);
	background:-ms-linear-gradient(top, #634b30 5%, #7d5d3b 100%);
	background:linear-gradient(to bottom, #634b30 5%, #7d5d3b 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#634b30', endColorstr='#7d5d3b',GradientType=0);
	background-color:#634b30;
}
.remember_piece:active {
	position:relative;
	top:1px;
}
</style>

