import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddUser } from '../../data/user';

describe('UserListComponent', () => {
    let component: UserListComponent;
    let fixture: ComponentFixture<UserListComponent>;
    const newUser: AddUser = { name: 'Test', email: 'test@mail.ru' };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientModule],
            declarations: [UserListComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(UserListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Компонент создан', () => {
        expect(component).toBeTruthy();
    });

    it('Список пользователей обновляется после добавления нового пользователя', () => {
        let userListCount: number = component.userService.userList.length;
        component.userService.addUser(newUser);
        expect(component.userService.userList.length).toBe(userListCount + 1);
    });

    it('Список пользователей отображается после загрузки данных', waitForAsync(() => {
        fixture.whenStable().then(() => {
            expect(component.userService.userList.length).toBeGreaterThan(0);
        });
    }));
});
