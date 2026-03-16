import Create from '../pages/Create.vue'
import Edit from '../pages/Edit.vue'
import Overview from '../pages/Overview.vue'

export const groceryRoutes = [
   { path: '/', name: 'Overview', component: Overview },
   { path: '/create', name: 'Create', component: Create },
   { path: '/edit/:id', name: 'Edit', component: Edit }
]
