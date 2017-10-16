<template>
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <div class="panel panel-primary">
                    <div class="panel-heading panel-title ">{{ title }}</div>
                    <div class="panel-body">


                        <Tabs v-model="tabSelect" @on-click="handleChange">
                            <TabPane label="添加数据" name="dataInput">
                                <addItem></addItem>
                            </TabPane>
                            <TabPane label="提交记录" name="recent">
                                <recent></recent>
                            </TabPane>
                            <TabPane label="聊天室" name="live">
                                <live></live>
                            </TabPane>
                        </Tabs>


                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
    import Vue from 'vue'
    import axios from 'axios'


    Vue.component('addItem', require('./addItem.vue'));
    Vue.component('recent', require('./recent.vue'));
    Vue.component('live', require('./live.vue'));

    export default {
        data() {

            return {

                title: "添加数据",
                tabSelect: "dataInput"

            };
        },

        computed: {

        },


        methods: {

            handleChange(val) {
                switch (val) {
                    case "dataInput":
                        this.title = "添加数据";
                        break;

                    case "recent":
                        this.title = "提交记录";
                        axios.get('/datas').then(response => {
                            this.$store.state.datas = response.data;
                        });
                        break;

                    case "live":
                        this.title = "聊天室";
                        break;

                }

            }
        },


    }
</script>

<style scoped>
    .container {
        margin-top: 20px;
    }
</style>