<template>
    <div class="layout">


        <Menu @on-select="select" class="navbar-fixed-top" mode="horizontal" :theme="themeTop" :active-name="active">
            <MenuItem name="home">
                <Icon type="home"></Icon>
                主页
            </MenuItem>
            <MenuItem name="emergency">
                <Icon type="medkit"></Icon>
                应急
            </MenuItem>
            <MenuItem name="about">
                <Icon type="cube"></Icon>
                关于
            </MenuItem>
        </Menu>
        <div class="layout-content">
            <router-view name="home"></router-view>
        </div>
        <div class="layout-copy">
            2011-2016 &copy; TalkingData
        </div>


    </div>

</template>

<script>
    export default {
        data() {

            return {
                themeTop: 'light',
                themeDown: 'dark',
                active: "home",
                title: "添加数据",

            };
        },


        methods: {
            select(val) {
                switch (val) {
                    case "emergency" :
                        this.$router.push('/emergency');
                        this.active = "emergency";

                        break;

                    case "about":
                        this.$router.push('/about');
                        this.active = "about";


                        break;
                    case "home":
                        this.$router.push('/');
                        this.active = "home";
                        break;


                }
            },
        }

    }
</script>

<style scoped>
    .layout {
        border: 1px solid #d7dde4;
        background: #e6e8ea;
    }

    .layout-content {
        min-height: 300px;
        margin: 15px;
        overflow: hidden;
        background: #f8f8f8;
        border-radius: 4px;
    }

    .layout-copy {
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }


</style>