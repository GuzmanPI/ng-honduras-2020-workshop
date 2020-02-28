import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoginComponent } from './login/login.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { environment } from '../environments/environment';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PolarGraphComponent } from './polar-graph/polar-graph.component';
import { PieGraphComponent } from './pie-graph/pie-graph.component';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		ToolbarComponent,
		MenuComponent,
		DashboardComponent,
		HomeComponent,
		PageNotFoundComponent,
		PolarGraphComponent,
		PieGraphComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatMenuModule,
		AngularFireModule.initializeApp(environment.firebaseConfig),
		AngularFireAuthModule,
		BrowserAnimationsModule,
		NgxChartsModule
	],
	providers: [AngularFireAuthGuard],
	bootstrap: [AppComponent]
})
export class AppModule {}
