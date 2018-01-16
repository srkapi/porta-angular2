import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../_services/index';
import {User} from "../_models/user";
import {Permission} from "../_models/permission";
import {Roles} from "../_models/roles";

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})


export class RegisterComponent {
    model = new User(0,"","","","","",0,new Roles("", new Permission("")),new Permission(""));
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    onSubmit(){
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
