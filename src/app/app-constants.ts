import { Injectable } from "@angular/core";

@Injectable({
	providedIn: 'root'
})

export class AppConstants {
    public static url:String;

    public static get APIS(){

        return {
            getUser:"spiritapi/getUser",
        }

    }
}