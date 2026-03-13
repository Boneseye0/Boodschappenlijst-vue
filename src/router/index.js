import { createRouter, createWebHistory } from "vue-router";
import { groceryRoutes } from "../domains/groceries/components/routes";

const routes = [...groceryRoutes]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
