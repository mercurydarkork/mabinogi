<template>
    <div class = "checkerboard right">
        <slot></slot>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.checkerboard {
    display: -webkit-box;
    flex-direction: column;
}
.left,
.right {
    padding: 10px;
    border: 1px solid #f40;
    float:left
}
</style>
