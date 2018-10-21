import Home from '../pages/Home'
import Center from '../pages/Center'
import Find from '../pages/Find'
import Info from '../pages/Info'

const home = {
    path: '/',
    exact: true,
    component: Home,
    loadData: Home.loadData,
    key: 'home'
}

const center = {
    path: '/center',
    exact: true,
    component: Center,
    key: 'center'
}

const find = {
    path: '/find',
    exact: true,
    component: Find,
    key: 'find'
}

const info = {
    path: '/info',
    exact: true,
    component: Info,
    key: 'info'
}

export default [
    home,
    center,
    find,
    info
]