import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfilePageRoutingModule } from './user-profile-page-routing.module';
import { UserProfilePageComponent } from './user-profile-page.component';
import { UserProfileModule } from '../../components/user-profile/user-profile.module';

@NgModule({
    declarations: [UserProfilePageComponent],
    imports: [CommonModule, UserProfilePageRoutingModule, UserProfileModule]
})
export class UserProfilePageModule {}
