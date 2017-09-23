<template>

    <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <mu-table ref="table" :showCheckbox="select">
            <mu-thead>
                <mu-tr>
                    <mu-th>ID</mu-th>
                    <mu-th>时间</mu-th>
                    <mu-th>地点</mu-th>
                    <mu-th>在线</mu-th>
                    <mu-th>实测</mu-th>
                    <mu-th>备注</mu-th>
                </mu-tr>
            </mu-thead>
            <mu-tbody>
                <mu-tr>
                    <mu-td>1</mu-td>
                    <mu-td>13:34</mu-td>
                    <mu-td>西二出</mu-td>
                    <mu-td>0.34</mu-td>
                    <mu-td>0.23</mu-td>
                    <mu-td>这是好的</mu-td>
                </mu-tr>

            </mu-tbody>
        </mu-table>
    </div>
</template>
<script>
    export default {
        data:function () {
            return {
                select:false
            }
        }
    }
</script>

<style>

</style>