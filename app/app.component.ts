import {Component} from 'angular2/core';
import { ngFor } from 'angular2/angular2';
import { SliderService } from './app.service';

@View({ directives: [ngFor] });

@Component({
	selector: 'rangeSlider',
	templateUrl: 'app/components/range-slider/custom-range-slider.html',
	styleUrls: ['../content/css/range-slider.css'],
	providers: [SliderService]
})


export class AppComponent{
	title = ' Angular 2';
	
	constructor(private sliderService: SliderService) {
		this.getDataFromService();
	};

	getDataFromService() {
		let fetchData = this.sliderService.getSlides();
		let promise = new Promise((resolve, reject) => {
			if(fetchData) {
				resolve(fetchData.then(data => this.slides = data));
			} else {
				reject('Error: data is not loaded correctly!');
			}
		});
		
		promise.then(() => {
			rangeSlider();
		});

	};
};