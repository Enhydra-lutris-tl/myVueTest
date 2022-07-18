import {createRouter,createWebHistory} from 'vue-router'
import IndexHomePage from '../pages/IndexHomePage'
import IndexBody from "@/pages/IndexBody";
import IndexNotes from "@/pages/IndexNotes"
import NoteContent from "@/pages/NoteContent";
const routerWebHistory = createWebHistory()

const router = createRouter({
    history:routerWebHistory,
    routes:[
        {
            path:'/',
            redirect:'/IndexBody'
        },
        {
            path:'/IndexHomePage',
            component:IndexHomePage
        },
        {
            path:'/IndexBody',
            component: IndexBody
        },
        {
            path:'/IndexNotes',
            component:IndexNotes,
            redirect:'/IndexNotes/NoteContent/html',
            children:[
                {
                    path:'NoteContent/:id',
                    // name:'NoteContent',
                    component:NoteContent,
                }
            ]
        }

    ]

})
export default router