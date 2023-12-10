import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../data/user';

@Component({
    selector: 'app-user-profile-page',
    templateUrl: './user-profile-page.component.html',
    styleUrls: ['./user-profile-page.component.scss']
})
export class UserProfilePageComponent {
    /** Пользователь */
    public user?: User;

    /** Статус загрузки пользователя по id */
    public loading: boolean = false;

    /** Сообщение об ошибке загрузки пользователя по id */
    public errorMsg: string = '';

    constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
        this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
            const id = params.get('id');
            if (id) {
                if (this.userService.userList.length === 0) {
                    this.loadUserById(id);
                }
                else {
                    this.user = this.userService.getLoadedUserById(+id);
                }
            }
        });
    }

    /** Загрузка одного пользователя по его id */
    private loadUserById(id: string) {
        this.loading = true;
        this.userService.getUserById(+id).subscribe(response => {
            if (response && response.body) {
                this.user = response.body;
            }
            if (response.hasError && response.errorMsg) {
                this.errorMsg = response.errorMsg;
            }
            this.loading = false;
        });
    }
}
