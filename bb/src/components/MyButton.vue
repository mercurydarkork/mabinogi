<template>
    <span class = "myButton">
        <slot></slot>
    </span> 
</template>

<script>
export default {
   
}
</script>
<style>
.myButton {
	-moz-box-shadow: 0px 10px 14px -7px #cccccc;
	-webkit-box-shadow: 0px 10px 14px -7px #cccccc;
	box-shadow: 0px 10px 14px -7px #cccccc;
	background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #c72f18), color-stop(1, #b34332));
	background:-moz-linear-gradient(top, #c72f18 5%, #b34332 100%);
	background:-webkit-linear-gradient(top, #c72f18 5%, #b34332 100%);
	background:-o-linear-gradient(top, #c72f18 5%, #b34332 100%);
	background:-ms-linear-gradient(top, #c72f18 5%, #b34332 100%);
	background:linear-gradient(to bottom, #c72f18 5%, #b34332 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#c72f18', endColorstr='#b34332',GradientType=0);
	background-color:#c72f18;
	-moz-border-radius:8px;
	-webkit-border-radius:8px;
	border-radius:8px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:13px;
	font-weight:bold;
	padding:5.5px 11.5px;
	text-decoration:none;
	text-shadow:0px 1px 0px #7a2a1d;
}
.myButton:hover {
	background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #b34332), color-stop(1, #c72f18));
	background:-moz-linear-gradient(top, #b34332 5%, #c72f18 100%);
	background:-webkit-linear-gradient(top, #b34332 5%, #c72f18 100%);
	background:-o-linear-gradient(top, #b34332 5%, #c72f18 100%);
	background:-ms-linear-gradient(top, #b34332 5%, #c72f18 100%);
	background:linear-gradient(to bottom, #b34332 5%, #c72f18 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#b34332', endColorstr='#c72f18',GradientType=0);
	background-color:#b34332;
}
.myButton:active {
	position:relative;
	top:1px;
}
</style>

