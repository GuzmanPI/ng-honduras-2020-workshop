import { UbUiModule } from '../../../projects/ub-ui/src/lib/ub-ui.module';
import { SharedModule } from '../shared/shared.module';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

@NgModule({
	declarations: [AdminComponent, UsersComponent],
	imports: [
		CommonModule,
		AdminRoutingModule,
		MatTableModule,
		SharedModule,
		UbUiModule
	]
})
export class AdminModule {}
