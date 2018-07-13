<template>
        <span class = "left_piece" @contextmenu="showMenu" >
            <slot></slot>
            <Menu :menuData="menuData" />
        </span>
</template>
<script>
import Menu from './Menu'
export default {
    components: {
        Menu
    },
    data () {
        return {
            menuData: {
                axios: {
                    x: null,
                    y: null
                },
                requred: false
            }
        }
    },
    methods: {
        showMenu(event){
            event.preventDefault()
            var x = event.clientX
            var y = event.clientY
            // Get the current location
            this.menuData.axios = {
                x, y
            }
            this.menuData.requred = true
        }
    }
}
</script>
<style scoped>

.left_piece {
	-moz-box-shadow:inset 0px 1px 3px 0px #91b8b3;
	-webkit-box-shadow:inset 0px 1px 3px 0px #91b8b3;
	box-shadow:inset 0px 1px 3px 0px #91b8b3;
	background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #768d87), color-stop(1, #6c7c7c));
	background:-moz-linear-gradient(top, #768d87 5%, #6c7c7c 100%);
	background:-webkit-linear-gradient(top, #768d87 5%, #6c7c7c 100%);
	background:-o-linear-gradient(top, #768d87 5%, #6c7c7c 100%);
	background:-ms-linear-gradient(top, #768d87 5%, #6c7c7c 100%);
	background:linear-gradient(to bottom, #768d87 5%, #6c7c7c 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#768d87', endColorstr='#6c7c7c',GradientType=0);
	background-color:#768d87;
	-moz-border-radius:5px;
	-webkit-border-radius:5px;
	border-radius:5px;
	border:1px solid #566963;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:5.5px 11.5px;
	text-decoration:none;
    text-shadow:0px -1px 0px #2b665e;
    margin:3px;
    width: 11px;
    height: 21px;
    float: left;
}
.left_piece:hover {
	background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #6c7c7c), color-stop(1, #768d87));
	background:-moz-linear-gradient(top, #6c7c7c 5%, #768d87 100%);
	background:-webkit-linear-gradient(top, #6c7c7c 5%, #768d87 100%);
	background:-o-linear-gradient(top, #6c7c7c 5%, #768d87 100%);
	background:-ms-linear-gradient(top, #6c7c7c 5%, #768d87 100%);
	background:linear-gradient(to bottom, #6c7c7c 5%, #768d87 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#6c7c7c', endColorstr='#768d87',GradientType=0);
	background-color:#6c7c7c;
}
.left_piece:active {
	position:relative;
	top:1px;
}

</style>
