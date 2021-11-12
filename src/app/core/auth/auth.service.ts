
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class AuthService {


    constructor(private _httpClient: HttpClient) { }

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
}