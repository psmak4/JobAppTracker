import * as ko from 'knockout';
import * as History from 'history';
import { Route, Router } from '../../router';
import navMenu from '../navMenu/navMenu';
import footer from '../footer/footer';

class AppRootViewModel {
	public route: KnockoutObservable<Route>;
	public routes: Route[] = [
		{ url: '/jobapps', params: { page: 'jobapps', name: 'Job Apps' } },
		{ url: '/contacts', params: { page: 'contacts', name: 'Contacts' } }
	];

	private _router: Router;

	constructor(params: { history: History.History }) {
		this._router = new Router(params.history, this.routes)
		this.route = this._router.currentRoute;

		ko.components.register('nav-menu', navMenu);
		ko.components.register('app-footer', footer);
		ko.components.register('jobapps', require('bundle-loader?lazy!../jobapps/jobapps'));
		ko.components.register('contacts', require('bundle-loader?lazy!../contacts/contacts'));
	}
}

export default { viewModel: AppRootViewModel, template: require('./appRoot.html') };
