import { Route } from "@angular/router";

export const appRoutes: Route[] = [
    { path: '', pathMatch: 'full', redirectTo: 'sign-in' },
    { path: 'sign-in', loadChildren: () => import('./modules/auth/sign-in/sign-in.module').then(m => m.SignInModule) },
    {
        path: '',
        children: [
            { path: 'category', loadChildren: () => import('./modules/category/category.module').then(m => m.CategoryModule) }
        ]
    },

];