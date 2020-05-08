import m from 'mithril';
import { Home, Page } from '$app/containers';

m.route.prefix('');
m.route(
	document.getElementById('container'),
	'/',
	{
		'/': Home,
		'/:slug': Page
	}
);