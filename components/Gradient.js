import m from 'mithril';
import { colors } from '$app/colors';

export var Gradient = {
    oninit: v => {
        v.state.details = v.attrs.method(v.attrs.height, v.attrs.width);
    },
    view: v => {
        const { details } = v.state;
		const color = colors[Math.floor(Math.random() * colors.length)];
        let output = [];
		for(let y = 0, row = []; y < details.height; ++y, row = []) {
			for(let x = 0; x < details.width; ++x) {
				let index = details.keyed[[x,y]];
				let [ r,g,b ] = color;
				let pad = 150;
				let adjustment = index * 4;
				let a = (index+10) / 75;
				r += pad - adjustment
				g += pad - adjustment;
				b += pad - adjustment;
                row.push(
                    m('.dib', { style: { padding: '4px', backgroundColor: `rgb(${r}, ${g}, ${b}, ${a})` } }, `${index}`.padStart(2, '0'))
                );
            }
			output.push(m('div', row));
		}
        return m('pre.mono', output);
    }
};