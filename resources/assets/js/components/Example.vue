<template>
    <div>

        <div class="layout">
            <div class="header navbar-fixed-top">
                <div class="logo">
                    DSJ

                </div>
                <strong class="Ntitle">{{ Ntitle }}</strong>


            </div>
            <div class="content">

                <div class="body">


                        <addItem v-if="additem"></addItem>
                        <recent v-if="recent"></recent>
                        <about v-if="about"></about>


                </div>

            </div>


        </div>


        <mu-paper class="navbar-fixed-bottom">
            <mu-bottom-nav :value="bottomNav" @change="handleChange">
                <mu-bottom-nav-item value="dform" title="提交数据" icon="add"/>

                <mu-bottom-nav-item value="recents" title="提交记录" icon="description"/>

                <mu-bottom-nav-item value="about" title="关于" icon="note"/>
            </mu-bottom-nav>
        </mu-paper>
    </div>

</template>

<script>

    export default {

        data() {
            return {
                bottomNav: 'dform',
                Ntitle: "提交数据",
                additem:true,
                recent:false,
                about:false
            }
        },
        methods: {
            handleChange(val) {
                this.bottomNav = val;
                switch (val) {
                    case "dform": {
                        this.Ntitle = "提交数据";
                        this.additem = true;
                        this.recent = false;
                        this.about = false;
                        break;
                    }
                    case "recents": {
                        this.Ntitle = "提交记录";
                        this.additem = false;
                        this.recent = true;
                        this.about = false;

                        break;
                    }

                    case "about": {
                        this.Ntitle = "关于";
                        this.additem = false;

                        this.recent = false;
                        this.about = true;
                        break;
                    }


                }
            }
        }
    }
</script>

<style scoped>
    .layout{
        background-color: rgb(236, 236, 236);
    }

    .header{
        background-color: #7e57c2;
    }

    .logo{
        font-size: 24px;
        color: white;
        display: inline-block;
        padding: 10px 20px;

    }



    .content{

        margin: 0 auto;
    }



    .body{
        background-color: white;
        border-radius: 5px;
        height: auto;
    }
    .Ntitle{
        color: #fcf3ff;
        text-align: center;
    }

    .footer{
        padding: 20px 0;
        text-align: center;
        width: 90%;
    }
</style>