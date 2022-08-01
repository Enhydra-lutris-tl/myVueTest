import {createRouter,createWebHashHistory} from 'vue-router'
import IndexHomePage from '../pages/IndexHomePage'
import IndexBody from "@/pages/IndexBody";
import IndexNotes from "@/pages/IndexNotes"
import NoteContent from "@/pages/NoteContent";
import IndexGames from "@/pages/IndexGames";
import GameCharacter from "@/pages/GameCharacter"
import Jx3Watch from "@/pages/Jx3Watch";
const routerWebHistory = createWebHashHistory()

const router = createRouter({
    history:routerWebHistory,
    routes:[
        {
            path:'/',
            redirect:'/IndexBody'
        },
        {
            path:'/IndexHomePage',
            component:IndexHomePage,
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
        },
        {
            path:'/IndexGames',
            component:IndexGames,
            redirect:'/IndexGames/GameCharacter',
            children:[
                {
                    path: '/IndexGames/GameCharacter',
                    component: GameCharacter,
                },
                {
                    path: '/IndexGames/Jx3Watch',
                    component: Jx3Watch
                }

            ]
        }

    ]

})
export default router