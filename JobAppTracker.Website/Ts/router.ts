import * as ko from 'knockout';
import * as $ from 'jquery';
import * as History from 'history';
import crossroads = require('crossroads');

export class Router {
	public currentRoute = ko.observable<Route>({});
	private disposeHistory: () => void;

	constructor(history: History.History, routes: Route[]) {
		// Reset and configure Crossroads so it matches routes and updates this.currentRoute
		crossroads.removeAllRoutes();
		crossroads.resetState();
		crossroads.normalizeFn = crossroads.NORM_AS_OBJECT;
		routes.forEach(route => {
			crossroads.addRoute(route.url, (requestParams) => {
				this.currentRoute(ko.utils.extend(requestParams, route.params));
			});
		});

		// Make history.js watch for navigation and notify Crossroads
		this.disposeHistory = history.listen(location => crossroads.parse(location.pathname));
		$(document).on('click', '#appNav a', (evt) => {
			let target: any = evt.currentTarget;
			if (target && target.tagName === 'A') {
				let href = target.getAttribute('href');
				if (href && href.charAt(0) == '/') {
					history.push(href);
					evt.preventDefault();
				}
			}
		});

		// Initialize Crossroads with starting location
		// Need to cast history to 'any' because @types/history is out-of-date
		crossroads.parse((history as any).location.pathname);
	}
}

export interface Route {
	url?: string;
	params?: any;
}
