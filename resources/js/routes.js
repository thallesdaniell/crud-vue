
import Index from './components/Index.vue'
import AllTasks from './components/AllTaks.vue';
import AddTask from './components/AddTask.vue';
import EditTask from './components/EditTask.vue';


export const routes = [
    {
        name: '/',
        path: '/',
        component: Index
    },
    {
        name: 'tasks',
        path: '/tasks',
        component: AllTasks
    },
    {
        name: 'add',
        path: '/add',
        component: AddTask
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditTask
    }
];
