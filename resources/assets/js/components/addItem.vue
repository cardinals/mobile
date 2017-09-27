<template>

    <div class="additem" >


        <h3>数据测定</h3>

        <mu-time-picker class="addtime" label="测定时间" hintText="测定时间" format="24hr" v-model="time"/><br/>



        <mu-text-field label="实测数据" labelFloat v-model="measure"/><br/>


        <mu-text-field label="在线数据" labelFloat v-model="online"/><br/>


        <mu-select-field v-model="placeid" :labelFocusClass="['label-foucs']" label="请选择测定地点">


            <mu-menu-item v-for="mplace,index in places" :key="index" :value="mplace.id" :title="mplace.place" />
            <hr>
            <mu-flat-button label="新增地点" class="demo-flat-button" style="margin-left: 10%" primary/>
        </mu-select-field><br/>



        <mu-select-field v-model="itemid" :labelFocusClass="['label-foucs']" label="请选择测定类别">
            <mu-menu-item v-for="(mitem,index) in items" :key="index" :value="mitem.id"  :title="mitem.item" />
        </mu-select-field><br/>



        <mu-text-field label="添加备注" labelFloat v-model="comment"/><br/>


        <mu-raised-button label="提交" class="demo-raised-button" primary @click="save"/><br/>


    </div>
</template>
<script>
    import { mapState } from 'vuex'
    import { mapMutations } from 'vuex'
    import { mapActions } from 'vuex'
    export default {


        data () {
            return {

            }
        },


        computed: {
            time:{

                    // getter
                    get: function () {
                        return this.$store.state.time;
                    },
                    // setter
                    set: function (newValue) {
                        this.$store.state.time = newValue;
                    }
                },

            online:{

                get:function () {
                    return this.$store.state.online;
                },

                set:function (newValue) {
                    this.$store.state.online = newValue;
                }

            },

            measure:{

                get:function () {
                    return this.$store.state.measure;
                },

                set:function (newValue) {
                    this.$store.state.measure = newValue;
                }

            },

            placeid:{

                get:function () {
                    return this.$store.state.placeid;
                },

                set:function (newValue) {
                    this.$store.state.placeid = newValue;
                }

            },

            itemid:{

                get:function () {
                    return this.$store.state.itemid;
                },

                set:function (newValue) {
                    this.$store.state.itemid = newValue;
                }

            },

            comment:{

                get:function () {
                    return this.$store.state.comment;
                },

                set:function (newValue) {
                    this.$store.state.comment = newValue;
                }

            },



            ...mapState([

                'places',
                'items',


            ])
        },

        methods:{

            //使用mapAction分发
            ...mapActions([

                'save'
            ])


        }

    }
</script>

<style>
    .additem{

    }
    .demo-raised-button {
        margin-left: 80px;
    }


</style>