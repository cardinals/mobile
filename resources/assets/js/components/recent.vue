<template>

    <div>

        <mu-table ref="table" :showCheckbox="select">
            <mu-thead>
                <mu-tr>
                    <mu-th>ID</mu-th>
                    <mu-th>时间</mu-th>
                    <mu-th>地点</mu-th>
                    <mu-th>项目</mu-th>
                    <mu-th>实测</mu-th>
                    <mu-th>在线</mu-th>
                    <mu-th>测量人</mu-th>
                    <mu-th>备注</mu-th>
                </mu-tr>
            </mu-thead>
            <mu-tbody>
                <mu-tr v-for="rdata,index in datas.data" :key="index" >

                    <mu-td>{{ rdata.id }}</mu-td>
                    <mu-td>{{ rdata.time }}</mu-td>
                    <mu-td>{{ rdata.place.place }}</mu-td>
                    <mu-td>{{ rdata.item.item }}</mu-td>
                    <mu-td>{{ rdata.measure }}</mu-td>
                    <mu-td>{{ rdata.online }}</mu-td>
                    <mu-td>{{ rdata.user.name }}</mu-td>
                    <mu-td>{{ rdata.comment }}</mu-td>

                </mu-tr>

            </mu-tbody>
        </mu-table>
        <div class="container">
            <mu-flat-button label="上一页" class="demo-flat-button" @click="pagesp(datas.prev_page_url)" primary/>

            <mu-flat-button label="下一页" class="demo-flat-button" @click="pagesp(datas.next_page_url)" primary/>

        </div>

    </div>
</template>
<script>
    import { mapState, mapActions } from 'vuex'

    import axios from 'axios'



    export default {

        data:function () {
            return {
                select:false,


            }
        },

        computed: {

            ...mapState([
                //'datas',
                'items'

            ]),

            datas:{

                get:function () {
                    return this.$store.state.datas;
                },

                set:function (newValue) {
                    this.$store.state.datas = newValue;
                }

            },

        },

        methods:{
            pagesp:function (val) {

                axios.get(val).then(response => {
                   this.datas = response.data;

                });

            }

        }


    }

</script>

<style>
    .container{

    }
    .demo-flat-button {
        margin: 12px;
    }
</style>