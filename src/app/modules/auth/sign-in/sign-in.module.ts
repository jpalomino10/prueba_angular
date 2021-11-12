import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "src/app/material.module";
import { SignInComponent } from "./sign-in.component";
import { signInRoutes } from "./sign-in.routing";

@NgModule({
    declarations: [
        SignInComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(signInRoutes),
        MaterialModule
    ],
    providers: [

    ]
})
export class SignInModule {
}