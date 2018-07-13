<template>
<div>
    <div id="source" draggable="true">source</div>
    <div id="target">target</div>
</div>
</template>

<script>
var target = document.getElementById('target');
    var source = document.getElementById('source');
    source.ondragstart = function(e){
        e.dataTransfer.effectAllowed = 'copyMove';
        e.dataTransfer.setData('test', 'testData');
    };
    target.ondragover = function(e){
        e.dataTransfer.dropEffect = 'move';
        e.preventDefault(); // 阻止默认行为
    };
    target.ondrop = function(e){
        e.preventDefault();
        var elem = document.createElement('p');
        elem.innerHTML = e.dataTransfer.getData('test');
        e.target.appendChild(elem);
    };
export default {
    
}
</script>
<style>
    #source{width:200px;height:200px;border:1px solid red;}
    #target{width:200px;height:200px;border:1px solid blue;}
</style>
