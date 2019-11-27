import HomePage from './Components/HomePage.vue'
import PostsPage from './Components/Postspage.vue'
import PostsDetails from './Components/PostDetails.vue'



export const routes = [
    { path: '', component: HomePage, name: 'Homepage'},
    { path: '/posts/:id', component: PostsPage, name: 'Postspage' },
    { path: '/details/:id', component: PostsDetails, name: 'Postsdetails' },


    
]