<template>
    <div class = "checkerboard left">
        <slot></slot>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.checkerboard {
    /* display: -webkit-box; */
    display: flex;
    flex-direction: column;
}
.left,
.right {
    padding: 10px;
    border: 1px solid #f40;
    float:left
}
</style>
