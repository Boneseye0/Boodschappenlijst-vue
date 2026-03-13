import Create from '../pages/Create.vue'
import Edit from '../pages/Edit.vue'
import Overview from '../pages/Overview.vue'

export const groceryRoutes = [
   { path: '/create', name: 'Create', component: Create },
   { path: '/edit', name: 'Edit', component: Edit },
   { path: '/', name: 'Overview', component: Overview }
]
