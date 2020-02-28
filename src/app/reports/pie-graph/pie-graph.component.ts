import { Component } from '@angular/core';
import { single } from './pie-data';

@Component({
	selector: 'app-pie-graph',
	templateUrl: './pie-graph.component.html',
	styleUrls: ['./pie-graph.component.css']
})
export class PieGraphComponent {
	// pie
	single: any[];
	view = [500, 400];

	// options
	showLegend = true;
	showLabels = true;

	colorScheme = {
		domain: [
			'#5AA454',
			'#E44D25',
			'#CFC0BB',
			'#7aa3e5',
			'#a8385d',
			'#aae3f5'
		]
	};

	constructor() {
		Object.assign(this, { single });
	}

	onSelect(event) {
		console.log(event);
	}
}
