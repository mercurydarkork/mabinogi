<template>
    <span class = "right_piece">
        <slot></slot>
    </span>
</template>
<script>
</script>
<style scoped>
.right_piece {
	-moz-box-shadow:inset 0px 1px 3px 0px #91b8b3;
	-webkit-box-shadow:inset 0px 1px 3px 0px #91b8b3;
	box-shadow:inset 0px 1px 3px 0px #91b8b3;
	background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #ff9800), color-stop(1, #ff9800));
	background:-moz-linear-gradient(top, #ff9800 5%, #ff9800 100%);
	background:-webkit-linear-gradient(top, #ff9800 5%, #ff9800 100%);
	background:-o-linear-gradient(top, #ff9800 5%, #ff9800 100%);
	background:-ms-linear-gradient(top, #ff9800 5%, #ff9800 100%);
	background:linear-gradient(to bottom, #ff9800 5%, #ff9800 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#768d87', endColorstr='#6c7c7c',GradientType=0);
	background-color:#f78922;
	-moz-border-radius:5px;
	-webkit-border-radius:5px;
	border-radius:5px;
	border:1px solid #f0a83c;
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
.right_piece:hover {
	background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #6c7c7c), color-stop(1, #768d87));
	background:-moz-linear-gradient(top, #6c7c7c 5%, #768d87 100%);
	background:-webkit-linear-gradient(top, #6c7c7c 5%, #768d87 100%);
	background:-o-linear-gradient(top, #6c7c7c 5%, #768d87 100%);
	background:-ms-linear-gradient(top, #6c7c7c 5%, #768d87 100%);
	background:linear-gradient(to bottom, #6c7c7c 5%, #768d87 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#6c7c7c', endColorstr='#768d87',GradientType=0);
	background-color:#6c7c7c;
}
.right_piece:active {
	position:relative;
	top:1px;
}
</style>
