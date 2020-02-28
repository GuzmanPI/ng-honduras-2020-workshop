import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
	constructor(public angularFireAuth: AngularFireAuth) {}

	ngOnInit(): void {}

	logout() {
		this.angularFireAuth.signOut();
	}
}
