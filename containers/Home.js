import m from 'mithril';
import { traverse as t } from 'traverse-grid';
import { Gradient } from '$app/components';

const github = 'https://github.com/Crabcyborg/traverse-grid';
const size = 7;
const Visualization = { view: v => m(Gradient, { method: v.attrs.method, height: v.attrs.height || size, width: v.attrs.width || size }) };
const Example = { view: v => [m('h4.mb0', v.attrs.title), m(Visualization, { method: v.attrs.method })] };
const e = (title, method) => m(Example, { title, method });

export var Home = {
	view: v => [
		m('h3.mb0', 'traverse-grid.js'),
		m('div', m('a.brea', { href: github, target: '_blank' }, github)),
		e('Horizontal', t.horizontal),
		e('Flip (x)', t.pipe(t.horizontal, t.flip('x'))),
		e('Flip (y)', t.pipe(t.horizontal, t.flip('y'))),
		e('Flip (xy)', t.pipe(t.horizontal, t.flip('xy'))),
		e('Vertical', t.vertical),
		e('Diagonal', t.diagonal),
		e('Spiral', t.spiral),
		e('Diamond', t.diamond),
		e('Triangle', t.triangle),
		e('Snake', t.snake),
		e('Double', t.double),
		e('Stitch', t.stitch),
		e('Cascade', t.cascade),
		e('Climb', t.climb),
		e('Fan', t.fan),
		e('Seed (746387463287648372)', t.seed(746387463287648372)),
		e('Skew', t.pipe(t.horizontal, t.skew)),
		e('Fold', t.pipe(t.horizontal, t.fold)),
		e('Stripe', t.pipe(t.horizontal, t.stripe)),
		e('Trade', t.pipe(t.horizontal, t.trade)),
		e('Shift (16)', t.pipe(t.horizontal, t.shift(16))),
		e('Split', t.pipe(t.horizontal, t.split)),
		e('Reflect', t.pipe(t.horizontal, t.reflect)),
		e('Step (2)', t.pipe(t.horizontal, t.step(2))),
		e('Alternate (horizontal)', t.pipe(t.horizontal, t.alternate())),
		e('Alternate (diagonal)', t.pipe(t.horizontal, t.alternate('diagonal'))),
		e('Reposition', t.pipe(t.horizontal, t.reposition)),
		e('Bounce', t.pipe(t.horizontal, t.bounce)),
		e('Smooth (x1)', t.pipe(t.horizontal, t.smooth())),
		e('Smooth (straight x1)', t.pipe(t.horizontal, t.smooth('straight'))),
		e('Waterfall', t.pipe(t.horizontal, t.waterfall)),
		e('Pulse (edge)', t.pulse('edge')),
		e('Pulse (corner)', t.pulse('corner')),
		e('Corner (in)', t.corner('in')),
		e('Corner (out)', t.corner('out')),
		e('Corner (crawl)', t.corner('crawl')),
		e('Diamond + Slice (left 4)', t.pipe(t.diamond, t.slice({ left: 4 }))),
		e('Tile (Spiral 3x3)', t.tile(t.spiral(3,3))),
		e('Rotate (Alternate)', t.rotate(t.pipe(t.horizontal, t.alternate()))),
		e(
			'Concatenate (Fan + Reposition, horizontal)',
			(height, width) => t.fan(height, Math.floor(width/2)).concatenate(t.pipe(t.horizontal, t.reposition)(height, Math.ceil(width/2)), 'horizontal')
		)
	]
};