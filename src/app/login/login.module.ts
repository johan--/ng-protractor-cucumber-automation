import { NgModule } from '@angular/core';

import { LoginRoutingModule, routedComponents } from './login-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [LoginRoutingModule, CommonModule, FormsModule],
  declarations: [routedComponents]
})
export class LoginModule { }
