import * as $ from 'jquery';
(<any>window).jQuery = $;
import 'bootstrap';
import * as ko from 'knockout';
import './webpack-component-loader';
import AppRoot from './components/appRoot/appRoot';
const createHistory = require('history').createBrowserHistory;

ko.components.register('app-root', AppRoot);
ko.applyBindings({ history: createHistory() });
