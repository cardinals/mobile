import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);
const store = new vuex.Store({
    state: {
        count: 68,

        todos:[
            {id:1,content:'ete',done:true},
            {id:2,content:'watch tv',done:false},
        ]
    },

    //如此使用过后getters会暴露出getters对象
    //即store.getters.doneTodos
    getters:{
        //Getters 接受 state 作为其第一个参数,Getters 也可以接受其他 getters 作为第二个参数
        //doneTodosCount: (state, getters)

            doneTodos: (state) => {
                return state.todos.filter(todo => todo.done)
            }

    },

    mutations:{
        //mutation含有increment字符串的事件类型和一个回调函数，并且把state作为他的第一个参数
        increment(state){
            //也可以传入第二个参数，对象类型的载荷payload:{amount:2}
        //increment(state,payload){
            state.count++
        //state.count += payload.amount
        }
    },

    actions:{
        //传入和store实例含有相同方法和属性的对象context
        // increment(context){
        //     context.commit('increment')
        //
        // },

        //或者使用ES6中的参数解构,来简化代码
        increment({commit}){
            commit('increment')
        }
    },




});
export default store