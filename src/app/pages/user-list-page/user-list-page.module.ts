import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListPageRoutingModule } from './user-list-page-routing.module';
import { UserListPageComponent } from './user-list-page.component';
import { UserListModule } from '../../components/user-list/user-list.module';
import { AddUserModule } from '../../components/add-user/add-user.module';

@NgModule({
    declarations: [UserListPageComponent],
    imports: [CommonModule, UserListPageRoutingModule, UserListModule, AddUserModule]
})
export class UserListPageModule {}
