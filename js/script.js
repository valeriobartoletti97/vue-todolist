const {createApp} = Vue;

createApp({
    data(){
        return{
           tasks: [
            {
                id: 1,
                text: 'Shoulder Press',
                done:false
            },
            {
                id:2,
                text: 'Squat',
                done:false
            },
            {
                id:3,
                text: 'Arnold Press',
                done:false
            },
            {
                id:4,
                text: 'Deltoide Posteriore',
                done:false
            },
            {
                id:5,
                text: 'Frog Jump',
                done:true
            },
            {
                id:6,
                text: 'Pettorali con manubri',
                done:false
            },
           ],
           lastId: 6,
           newTaskTxt: ''
        }
    },
    methods:{
        removeTask(i){
            this.tasks.splice(i,1)
        },
        generateTask(){
            let newTask = {
                id: this.lastId ++,
                text: this.newTaskTxt,
                done: false
            }
            return newTask,
            this.tasks.push(newTask)
        }
    }
}).mount('#app')