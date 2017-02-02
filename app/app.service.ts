import {Injectable} from 'angular2/core';

@Injectable()

export class SliderService {
	getSlides() {
		return fetch('app/components/range-slider/slider-data.json').then(response => response.json());
	};
}