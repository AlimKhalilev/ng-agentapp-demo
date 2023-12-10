import { Component, Input } from '@angular/core';
import { User } from '../../data/user';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
    /** Пользователь */
    @Input() user?: User;

    constructor() {}
}
