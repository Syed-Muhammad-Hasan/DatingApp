import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { User } from "../_models/user";
import { AlertifyService } from "../_service/alertify.service";
import { UserService } from "../_service/user.service";

@Injectable()
export class ProfileDetailResolver implements Resolve<User> {
    constructor(private userService: UserService, private router: Router, 
        private alertify: AlertifyService){}
    resolve(route: ActivatedRouteSnapshot): Observable<User>{
        return this.userService.getProfile(route.params['id']).pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving data');
                this.router.navigate(['/profiles']);
                return of(null);
            })
        )
    };
}