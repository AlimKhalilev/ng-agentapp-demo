import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: () => import('./pages/home-page/home-page.module').then((m) => m.HomePageModule) },
    { path: 'user-list', loadChildren: () => import('./pages/user-list-page/user-list-page.module').then((m) => m.UserListPageModule) },
    { path: 'user-profile/:id', loadChildren: () => import('./pages/user-profile-page/user-profile-page.module').then((m) => m.UserProfilePageModule) },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
