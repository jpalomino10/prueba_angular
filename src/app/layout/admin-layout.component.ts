import { Component, OnInit } from "@angular/core";
import { AuthService } from "../core/auth/auth.service";

@Component({
    selector: 'app-admin-layout',
    templateUrl: './admin-layout.component.html'
})
export class AdminLayoutComponent implements OnInit {


    constructor(private _authService: AuthService) {

    }

    ngOnInit(): void {

    }

    signOut() {
        this._authService.signOut();
    }
}