import { Route } from "@angular/router";
import { AuthGuard } from "./core/auth/auth.guard";
import { AdminLayoutComponent } from "./layout/admin-layout.component";

export const appRoutes: Route[] = [
    { path: '', pathMatch: 'full', redirectTo: 'sign-in' },
    { path: 'sign-in', loadChildren: () => import('./modules/auth/sign-in/sign-in.module').then(m => m.SignInModule) },
    {
        path: '',
        canActivate: [AuthGuard],
        component: AdminLayoutComponent,
        children: [
            { path: 'category', loadChildren: () => import('./modules/category/category.module').then(m => m.CategoryModule) }
        ]
    },

];