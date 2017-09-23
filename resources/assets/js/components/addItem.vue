<template>

    <div class="additem" >

        <br/>
        <br/>
        <br/>
        <br/>
        <h3>数据测定</h3>
        <mu-time-picker class="addtime" label="测定时间" hintText="测定时间" format="24hr"/><br/>
        <mu-text-field label="实测数据" labelFloat/><br/>
        <mu-text-field label="在线数据" labelFloat/><br/>
        <mu-select-field v-model="place" :labelFocusClass="['label-foucs']" label="请选择测定地点">
            <mu-menu-item v-for="text,index in places" :key="index" :value="index" :title="text" />
        </mu-select-field><br/>
        <mu-select-field v-model="item" :labelFocusClass="['label-foucs']" label="请选择测定类别">
            <mu-menu-item v-for="text,index in items" :key="index" :value="index" :title="text" />
        </mu-select-field><br/>
        <mu-text-field label="添加备注" labelFloat/><br/>
        <mu-raised-button label="提交" class="demo-raised-button" primary/><br/>
        <br/>
        <br/>
        <br/>
        <br/>

    </div>
</template>
<script>
    export default {
        props:[],
        data () {
            return {
                place: 0,
                item: 0,
                places: ['西二出', '西一二出', '西二原'],
                items: ['氨氮', '浊度', '二氧化氯']
            }
        }
    }
</script>

<style>
    .additem{
        margin-left: 30px;

    }
    .demo-raised-button {
        margin-left: 80px;
    }


</style>