import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private baseUrl = environment.endpoint;

    constructor(private http: HttpClient) {
    }

    get(url: string): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}${url}`, { headers: this.header() });
    }

    post(url: string, data: any): Observable<any> {
        return this.http.post(`${this.baseUrl}${url}`, data, { headers: this.header() });
    }

    put(url: string, data: any): Observable<any> {
        return this.http.put(`${this.baseUrl}${url}`, data, { headers: this.header() });
    }

    private header(): HttpHeaders {
        let headers = new HttpHeaders();
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            headers = headers.append('Authorization', 'Bearer ' + accessToken);
            headers = headers.append('Content-Type', 'application/json');
        }
        return headers;
    }

}