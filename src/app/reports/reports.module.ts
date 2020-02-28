import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReportsComponent } from './reports.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PieGraphComponent } from './pie-graph/pie-graph.component';
import { PolarGraphComponent } from './polar-graph/polar-graph.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
	declarations: [
		ReportsComponent,
		DashboardComponent,
		PieGraphComponent,
		PolarGraphComponent
	],
	imports: [CommonModule, ReportsRoutingModule, NgxChartsModule, SharedModule]
})
export class ReportsModule {}
