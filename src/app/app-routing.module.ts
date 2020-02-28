import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';

const routes: Routes = [
	{
		path: 'dashboard',
		component: DashboardComponent,
		canActivate: [AngularFireAuthGuard]
	},
	{
		path: 'home',
		component: HomeComponent
	},
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{
		path: 'admin',
		loadChildren: () =>
			import('./admin/admin.module').then(m => m.AdminModule),
		canActivate: [AngularFireAuthGuard]
	},
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
