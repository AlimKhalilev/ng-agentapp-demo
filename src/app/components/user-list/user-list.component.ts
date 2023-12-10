import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
    constructor(public userService: UserService) {}

    ngOnInit(): void {
        if (this.userService.userList.length === 0) {
            this.userService.loading = true;
            this.userService.getUsers().subscribe(response => {
                if (response && response.body) {
                    this.userService.userList = response.body;
                }
                if (response.hasError && response.errorMsg) {
                    this.userService.errorMsg = response.errorMsg;
                }
                this.userService.loading = false;
            });
        }
    }
}
