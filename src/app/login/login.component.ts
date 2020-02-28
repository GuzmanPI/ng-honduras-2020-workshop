import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	constructor(public angularFireAuth: AngularFireAuth) {}

	ngOnInit(): void {}

	login() {
		this.angularFireAuth.signInWithPopup(new auth.GoogleAuthProvider());
	}
}
