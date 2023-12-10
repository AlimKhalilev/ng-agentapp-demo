import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { AddUserForm } from '../../data/user';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
    /** Объект формы добавления пользователя */
    addUserForm = new FormGroup<AddUserForm>({
        name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
        email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    });

    constructor(public userService: UserService) {}

    /** Добавление пользователя */
    addUser() {
        this.userService.addUser(this.addUserForm.getRawValue());
        this.addUserForm.reset();
    }
}
