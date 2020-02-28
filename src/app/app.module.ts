import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoginComponent } from './login/login.component';
import { environment } from '../environments/environment';

@NgModule({
	declarations: [AppComponent, LoginComponent, ToolbarComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		MatButtonModule,
		AngularFireModule.initializeApp(environment.firebaseConfig),
		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
