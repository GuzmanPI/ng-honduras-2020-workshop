import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	constructor(
		public angularFireAuth: AngularFireAuth,
		private router: Router
	) {}

	ngOnInit(): void {}

	login() {
		this.angularFireAuth
			.signInWithPopup(new auth.GoogleAuthProvider())
			.then(() => this.router.navigateByUrl('/dashboard'));
	}
}
