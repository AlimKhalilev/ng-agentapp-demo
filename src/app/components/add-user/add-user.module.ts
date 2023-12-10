import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [AddUserComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [AddUserComponent]
})
export class AddUserModule {}
