import m from 'mithril';

export var Page = {
	oninit: v => {
		const { slug } = v.attrs;

		v.state = {

		};
	},
	view: v => [
		m(
			'p',
			'Hello World'
		)
	]
};