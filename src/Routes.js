import { createWebHistory, createRouter } from "vue-router";
import Index from './pages/index';
import NotFoundPage from './pages/not_found';
// Middlewares
// import admin from './middlewares/admin';


const routes = [
    {
        path: '/',
        component: Index,
        name: 'index',
        meta: {
            title: 'Main Page'
        },
    },
    // {
    //     path: '/dashboard',
    //     component: Dashboard,
    //     meta: {
    //         title: "داشبورد",
    //         middleware:[operator,defJQ] // minimum role to access
    //     },
    //     children:[
    //         {
    //             path: '',
    //             component: DashIndex,
    //             meta: {
    //                 middleware: [operator,defJQ]
    //             },
    //             name:'dash',
    //         },
    //         {
    //             path: 'sites',
    //             component: DashSitesList,
    //             meta: {
    //                 middleware: [operator,defJQ]
    //             },
    //             name: 'dash-sites'
    //         },
    //         {
    //             path: 'sites/add',
    //             component: DashSitesAdd,
    //             meta: {
    //                 middleware: [operator,defJQ]
    //             },
    //             name: 'dash-add-site'
    //         },
    //         {
    //             path: 'sites/edit/:siteId',
    //             component: DashSitesEdit,
    //             meta: {
    //                 middleware: [operator,defJQ]
    //             },
    //             name: 'dash-site-edit',
    //         },
    //         {
    //             path: 'yuan_price',
    //             component: DashYuan,
    //             meta: {
    //                 middleware: [operator,defJQ]
    //             }
    //         },
    //         {
    //             path: 'crawler/linked_products',
    //             component: DashLinkedProducts,
    //             meta: {
    //                 middleware: [operator,defJQ]
    //             }
    //         },
    //         {
    //             path: 'crawler/free_products',
    //             component: DashFreeProducts,
    //             meta: {
    //                 middleware: [operator,defJQ]
    //             }
    //         },
    //         {
    //             path: 'products/list',
    //             component: DashProductsList,
    //             meta: {
    //                 middleware: [operator,defJQ]
    //             },
    //             name: 'dash-products'
    //         },
    //         {
    //             path: 'products/add',
    //             component: DashProductsAdd,
    //             meta: {
    //                 middleware: [operator,defJQ]
    //             },
    //             name: 'dash-product-add'
    //         },
    //         {
    //             path: 'products/edit/:pid',
    //             component: DashProductsEdit,
    //             meta: {
    //                 middleware: [operator,defJQ]
    //             },
    //             name: 'dash-product-edit'
    //         },
    //         {
    //             path: 'products/linked/:pid/:pname',
    //             component: DashProductsLinked,
    //             meta: {
    //                 middleware: [operator,defJQ]
    //             },
    //         },
    //         {
    //             path: 'categories/list',
    //             component: DashCategories,
    //             meta: {
    //                 middleware: [operator,defJQ]
    //             },
    //             name: 'dash-categories'
    //         },
    //         {
    //             path: 'categories/add',
    //             component: DashCategoriesAdd,
    //             meta: {
    //                 middleware: [operator,defJQ]
    //             },
    //             name: 'dash-categories-add'
    //         },
    //         {
    //             path: 'categories/edit/:catID',
    //             component: DashCategoriesEdit,
    //             meta: {
    //                 middleware: [operator,defJQ]
    //             },
    //             name: 'dash-category-edit'
    //         },
    //         {
    //             path: 'user_reports',
    //             component: DashUserReports,
    //             meta: {
    //                 middleware: [operator,defJQ]
    //             }
    //         }
    //     ]
    // },
    {
        path: "/:catchAll(.*)*",
        component: NotFoundPage,
        name: "404"
    }
];

const basePath = 'cp';
// const basePath = (process.env.VUE_APP_NODE_ENV === 'production') ? 'pannel' : '';
const router = createRouter({
    history: createWebHistory(basePath),
    routes,
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        }
    }
});

export default router;



