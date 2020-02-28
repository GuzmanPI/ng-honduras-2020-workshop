import { Component, OnInit } from '@angular/core';
import { multi } from './polar-data';

@Component({
	selector: 'app-polar-graph',
	templateUrl: './polar-graph.component.html',
	styleUrls: ['./polar-graph.component.css']
})
export class PolarGraphComponent {
	multi: any[];
	view: any[] = [700, 300];

	// options
	legend = true;
	showLabels = true;
	animations = true;
	xAxis = true;
	yAxis = true;
	showYAxisLabel = true;
	showXAxisLabel = true;
	xAxisLabel = 'Year';
	yAxisLabel = 'Population';

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
		Object.assign(this, { multi });
	}

	onSelect(event) {
		console.log(event);
	}
}
