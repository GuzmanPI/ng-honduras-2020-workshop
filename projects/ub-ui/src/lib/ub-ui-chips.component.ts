import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'lib-ub-ui-chips',
	template: `
		<mat-chip-list aria-label="Fish selection">
			<mat-chip color="primary" selected>Messages 5</mat-chip>
			<mat-chip color="accent" selected>Alerts 2</mat-chip>
		</mat-chip-list>
	`,
	styles: []
})
export class UbUiChipsComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
