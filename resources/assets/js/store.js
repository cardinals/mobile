import Vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
Vue.use(vuex);
const store = new vuex.Store({
    state: {

        time:'',
        online:'',
        measure:'',
        comment:'',
        places:[],
        placeid:'',
        items:[],
        itemid:'',
        datas:{},
    },


    getters:{


    },

    mutations:{

        save(state){
            axios.post('/data', {
                time:state.time,
                comment: state.comment,
                online: state.online,
                measure: state.measure,
                itemid: state.itemid,
                placeid: state.placeid

            })
                .then(function (response) {
                    alert(response.data);
                })
                .catch(function (error) {
                    alert(error);
                });



        },

        recent(state){
            axios.get('/datas').then(response => {
                state.datas = response.data;

            });
        }
    },

    actions:{


        save({commit}){
            commit('save')
        },
        recent({commit}){
            commit('recent')
        }
    },






});
export default store