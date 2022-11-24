import { createApp } from 'vue';
import App from './App.vue';
import router from './Routes';
// import { store } from './state/Store';
// import axios from 'axios';
// import toastr from 'toastr';
// import Vuelidate from 'vuelidate';
// import { VueCookieNext } from 'vue-cookie-next';


/* Creates a `nextMiddleware()` function which not only
** runs the default `next()` callback but also triggers
** the subsequent Middleware function.
*/
function nextFactory(context, middleware, index) {
    const subsequentMiddleware = middleware[index];
    // If no subsequent Middleware exists,
    // the default `next()` callback is returned.
    if (!subsequentMiddleware) return context.next;

    return (...parameters) => {
        // Run the default Vue Router `next()` callback first.
        context.next(...parameters);
        // Then run the subsequent Middleware with a new
        // `nextMiddleware()` callback.
        const nextMiddleware = nextFactory(context, middleware, index + 1);
        subsequentMiddleware({ ...context, next: nextMiddleware });
    };
}
router.beforeEach((to, from, next) => {
    if (to.meta.middleware) {
        const middleware = Array.isArray(to.meta.middleware)
            ? to.meta.middleware
            : [to.meta.middleware];

        const context = {
            from,
            next,
            router,
            to,
        };
        const nextMiddleware = nextFactory(context, middleware, 1);

        return middleware[0]({ ...context, next: nextMiddleware });
    }
    document.title = to.meta.title ? to.meta.title : "پنل آیسی";
    return next();
});


const app = createApp(App);
app.use(router).mount('#app');
