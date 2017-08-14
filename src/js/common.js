const weekday = ["Sunday", "Monday", "Thesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const month = ["january", "February", "Mach", "April", "May", "June", "July", "August", "September",
            "October", "November", "December"]
let Header = Vue.extend({
    template: '#todo-header',
    data: function(){
        return {
            date: '',
            weekDay: '',
            month: '',
            year: '',
        }
    },
    created: function(){
        let d = new Date();
        this.date = d.getDate()
        this.weekDay = weekday[d.getDay()]
        this.month = month[d.getMonth()]
        this.year = d.getFullYear()
    }
})
let Report = Vue.extend({//定义，在todo里面生命使用
    template: '#todo-report',
    data() {
        return {
            taskDone: 1,
            taskTotal: 10,
        }
    }
})
let TodoItem = Vue.extend({
    template: 'todo-item',
    data(){

    }
})
let TodoList = Vue.extend({
    template: '#todo-list',
    data(){
        return {
            collection: [
                1,2,3
            ]
        }
    },
    components: {
        'todo-item': TodoItem
    }
})
let todo = new Vue({// 单点入口
    el: '#app',
    components: {
        'todo-header': Header,
        'todo-report': Report,
        'todo-list': TodoList
    }
})