import { Route } from "@angular/router";
import { CategoryDetailComponent } from "./detail/detail.component";
import { CategoryListComponent } from "./list/list.component";

export const categoryRoutes: Route[] = [
    {
        path: 'all',
        component: CategoryListComponent
    },
    {
        path: 'new',
        component: CategoryDetailComponent
    },
    {
        path: 'edit/:id',
        component: CategoryDetailComponent
    }
];