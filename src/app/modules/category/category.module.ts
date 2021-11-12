import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "src/app/material.module";
import { categoryRoutes } from "./category.routing";
import { CategoryDetailComponent } from "./detail/detail.component";
import { CategoryListComponent } from "./list/list.component";

@NgModule({
    declarations: [
        CategoryListComponent,
        CategoryDetailComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule.forChild(categoryRoutes),
    ],
    providers: [


    ]
})
export class CategoryModule { }