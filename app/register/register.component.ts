import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../_services/index';
import {User} from "../_models/user";
import {Permission} from "../_models/permission";
import {Roles} from "../_models/roles";
import {UserForm} from "../_models/UserForm";

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})


export class RegisterComponent {
    model = new UserForm("","","","","","","","");

    
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    onSubmit(){
        let user = new User(this.model.username,this.model.password,this.model.firstName,
            this.model.lastName,this.model.email,this.model.attempts);

        var permision = new Permission(this.model.rolesPermissions);
        var rol = new Roles(this.model.userRoles, permision);
        user.permissions.push( permision);
        user.roles.push(rol);
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
