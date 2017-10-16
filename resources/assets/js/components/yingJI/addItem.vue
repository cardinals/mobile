<template>

    <div class="additem">


        <Form :label-width="80">

            <FormItem label="实测数据：">
                <Input v-model="measure" placeholder="请输入实测数据" class="INwidth"></Input>
            </FormItem>


            <FormItem label="在线数据：">
                <Input v-model="online" placeholder="请输入在线数据,可为空" class="INwidth"></Input>
            </FormItem>




            <FormItem label="采集地点：">
                <Select v-model="placeid" placeholder="请选测量地点" class="INwidth">
                    <Option v-for="plabel,index in places" :key="index" :value="plabel.id">{{ plabel.place }}</Option>

                </Select>
            </FormItem>

            <FormItem label="采集项目：">
                <Select v-model="itemid" placeholder="请选测量项目" class="INwidth">
                    <Option v-for="ilabel,index in items" :key="index" :value="ilabel.id">{{ ilabel.item }}</Option>

                </Select>
            </FormItem>

            <FormItem label="采集时间：">

                <FormItem class="INwidth">
                    <TimePicker type="time" placeholder="请选择测量时间" format="HH:mm" v-model="time" @on-change="Ftime"></TimePicker>
                </FormItem>

            </FormItem>


            <FormItem label="添加备注：">
                <Input class="INwidth" v-model="comment" type="textarea"
                       :autosize="{minRows: 2,maxRows: 5}"
                       placeholder="请输入备注"></Input>
            </FormItem>

            <FormItem>
                <Button type="primary" @click="handleSubmit()">提交</Button>
                <Button type="ghost" @click="handleReset()" style="margin-left: 8px">重置</Button>
            </FormItem>
        </Form>


    </div>
</template>
<script>
    import {mapState} from 'vuex'
    import {mapMutations} from 'vuex'
    import {mapActions} from 'vuex'
    import Validator from 'validator.tool'

    export default {


        data() {
            return {
                ftime:''



//                online: '',
//                measure: '',
//                placeid: '',
//                itemid: '',
//                time: '',
//                comment: ''


            }
        },


        computed: {
            time: {

                // getter
                get: function () {
                    let datat = new Date();
                    let dtime = datat.getHours()+':'+datat.getMinutes();
                    this.ftime = dtime;

                    return dtime;

                },
                // setter
                set: function (newValue) {

                    this.$store.state.time = this.ftime;
                }
            },

            online: {

                get: function () {
                    return this.$store.state.online;
                },

                set: function (newValue) {

                    this.$store.state.online = newValue;
                }

            },

            measure: {

                get: function () {
                    return this.$store.state.measure;
                },

                set: function (newValue) {
                    this.$store.state.measure = newValue;
                }

            },

            placeid: {

                get: function () {
                    return this.$store.state.placeid;
                },

                set: function (newValue) {
                    this.$store.state.placeid = newValue;
                }

            },

            itemid: {

                get: function () {
                    return this.$store.state.itemid;
                },

                set: function (newValue) {
                    this.$store.state.itemid = newValue;
                }

            },

            comment: {

                get: function () {
                    return this.$store.state.comment;
                },

                set: function (newValue) {
                    this.$store.state.comment = newValue;
                }

            },


            ...mapState([

                'places',
                'items',


            ])
        },

        methods: {

            //使用mapAction分发
            ...mapActions([

                'save'
            ]),


            handleSubmit() {
                this.$store.dispatch('save');


            },
            handleReset() {

                this.$store.state.online = '';
                this.$store.state.measure = '';
                this.$store.state.time = '';
                this.$store.state.comment = '';
                this.$store.state.itemid = '';
                this.$store.state.placeid = '';
            },
            Ftime(val){
                this.ftime = val;

            }


        }

    }
</script>

<style scoped>
    .INwidth {
        width: 200px;

    }


</style>