import Images from '../components/Images.vue'
import Home from '../components/Home.vue'
import Profile from '../components/Profile.vue'
import Login from '../components/Login.vue'
import Uploads from '../components/Uploads.vue'
import Register from '../components/Register.vue'

export default[
    {
        path: '*',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    { 
        path: '/images', 
        name: 'imagenes',
        component: Images,
        meta: { 
            requiresAuth: true 
        }
    },
    { 
        path: '/',
        name: '/',
        component: Home
    },
    { 
        path: '/profile/:id',
        name: 'profile',
        component: Profile,
        props: true,
        meta: { requiresAuth: true }
    },
    {
        path: '/upload',
        name: 'upload',
        component: Uploads,
        meta: { 
            requiresAuth: true 
        }
    }
]