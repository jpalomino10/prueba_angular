
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {


    constructor(private _httpClient: HttpClient, private _router: Router) { }

    public setAccessToken(token: string) {
        localStorage.setItem('accessToken', token);
    }

    public getAccessToken(): string {
        return localStorage.getItem('accessToken') ?? '';
    }

    signIn(credentials: any): Observable<any> {
        console.log(`credentials`, credentials)
        return this._httpClient.post(`${environment.endpoint}/login`, credentials);
    }

    signOut() {
        localStorage.clear();
        this._router.navigate(['/sign-in']);
    }
}