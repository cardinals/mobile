<template>

    <div>

        <table class="table table-bordered">
            <thead>
            <tr>
                <th>时间</th>
                <th>地点</th>
                <th>项目</th>
                <th>实测</th>
                <th>在线</th>
                <th>备注</th>
                <th>测量人</th>
            </tr>
            </thead>

            <tbody>
            <tr v-for="rdata,index in datas" :key="index">
                <td>{{ rdata.time }}</td>
                <td>{{ rdata.place.place }}</td>
                <td>{{ rdata.item.item }}</td>
                <td>{{ rdata.measure }}</td>
                <td>{{ rdata.online }}</td>
                <td>{{ rdata.comment }}</td>
                <td>{{ rdata.user.name }}</td>


            </tr>

            </tbody>

        </table>
    </div>
</template>
<script>
    import {mapState, mapActions} from 'vuex'
    import ExcellentExport from 'excellentexport';

    export default {

        data: function () {
            return {}
        },

        computed: {

            ...mapState([
                //'loading'
                'datas'

            ]),


        },


    }

</script>

<style scoped>
    th, td {
        text-align: center;
        vertical-align: middle;
    }


</style>