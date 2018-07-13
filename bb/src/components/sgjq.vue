<template>
    <div v-on:click="cancelMenu">
       <my-button v-for="(temp,index) in buttonNames" :key="index">
           {{ temp }}
       </my-button>
       <br>
       <checkboard-left >
           <div v-for="n in 6" :key="n">
                <piece-left v-for="i in 5" :key="i" ></piece-left>
           </div>
       </checkboard-left>
       <checkboard-right>
           <div v-for="n in 6" :key="n">
               <piece-right v-for="i in 5" :key="i" ></piece-right>
           </div>  
       </checkboard-right>
      
    </div>
</template>
<script>
import MyButton from './MyButton'
import PieceLeft from './PieceLeft'
import PieceRight from './PieceRight'
import CheckboardLeft from './CheckboardLeft'
import CheckboardRight from './CheckboardRight'

export default {
    components: {
        MyButton,
        PieceRight,
        PieceLeft,
        CheckboardLeft,
        CheckboardRight,
        
    },
    data() {
        return {
            buttonNames :[
                '重标','换棋','最小化','关闭','上传给AI'
            ]
        }
    },
    methods: {
        cancelMenu () {

        }
    },
    created (){
        // alert(1)
    }
}
</script>