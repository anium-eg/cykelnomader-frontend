import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { enviornment } from "src/enviornments/enviornment";

export abstract class ApiService{
    protected abstract baseUrl:string;
    protected http:HttpClient = inject(HttpClient);
}