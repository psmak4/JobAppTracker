import * as $ from 'jquery';
(<any>window).jQuery = $;
import 'bootstrap';
import * as ko from 'knockout';
import { Route } from '../../router';

interface NavMenuParams {
	route: KnockoutObservable<Route>;
	routes: Route[];
}

class NavMenuViewModel {
	public route: KnockoutObservable<Route>;
	public routes: Route[];

	constructor(params: NavMenuParams) {
		this.route = params.route;
		this.routes = params.routes;
	}

	public CollapseMenu() {
		$('#navbar').collapse('hide');
	}
}

export default { viewModel: NavMenuViewModel, template: require('./navMenu.html') };
