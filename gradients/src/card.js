import { cards } from './index';

export function getHue(red, green, blue) {
	var min = Math.min(Math.min(red, green), blue);
	var max = Math.max(Math.max(red, green), blue);

	if (min == max) {
		return 0;
	}

	var hue = 0.0;
	if (max == red) {
		hue = (green - blue) / (max - min);

	} else if (max == green) {
		hue = 2.0 + (blue - red) / (max - min);

	} else {
		hue = 4.0 + (red - green) / (max - min);
	}

	hue = hue * 60;
	if (hue < 0) hue = hue + 360;

	return Math.round(hue);
}

export function createCard(colorStart, colorEnd, name) {
	const c = colorStart.match(/[0-9A-Z]{2}/g).map((num) => parseInt(num, 16));
	const ce = colorEnd.match(/[0-9A-Z]{2}/g).map((num) => parseInt(num, 16));
	const d = getHue.apply(null, c);
	// const d = getHue.apply(null, ce);
	// const d = getHue(c[0] + ce[0], c[1] + ce[1], c[2] + ce[2]);

	var min = Math.min.apply(null, c);
	var max = Math.max.apply(null, c);
	// var min = Math.min.apply(null, [c[0] + ce[0], c[1] + ce[1], c[2] + ce[2]]);
	// var max = Math.max.apply(null, [c[0] + ce[0], c[1] + ce[1], c[2] + ce[2]]);
	const lum = (max + min) / 2;
	console.log(d, lum)

	const card = document.createElement('div');
	// card.style.width = '240px';
	// card.style.height = '270px';
	card.style.display = 'inline-block';
	card.style.margin = '6px';
	card.innerHTML = cardOld(colorStart, colorEnd, name);
	// card.innerHTML = cardNew(colorStart, colorEnd, name);
	cards.push({
		block: card,
		hue: d,
		lum: lum,
	});
	return card;
}

function cardOld(colorStart, colorEnd, name) {
				// <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-${name}">
	return `
		<svg class="card" width="240px" height="270px" viewBox="0 0 240 270" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			<defs>
				<rect id="path-1" x="0" y="0" width="200" height="230" rx="16"></rect>
				<filter x="-16.2%" y="-12.0%" width="132.5%" height="128.3%" filterUnits="objectBoundingBox" id="filter-2">
					<feOffset dx="0" dy="5" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
					<feGaussianBlur stdDeviation="10" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
					<feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.05 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
				</filter>
				<linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="linearGradient-${name}">
					<stop stop-color="${colorStart}" offset="0%"></stop>
					<stop stop-color="${colorEnd}" offset="100%"></stop>
				</linearGradient>
			</defs>
			<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
				<g id="Swatch-1" transform="translate(20.000000, 15.000000)">
					<g id="Background">
						<use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
						<use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-1"></use>
					</g>
					<g id="Colors" transform="translate(21.500000, 150.000000)">
						<text id="${colorEnd}" font-family="HelveticaNeue-Bold, Helvetica Neue" font-size="14" font-weight="bold" fill="#4A4A4A">
							<tspan x="98.353" y="58.5">${colorEnd}</tspan>
						</text>
						<circle id="Color-2" fill="${colorEnd}" cx="126.5" cy="29.5" r="8"></circle>
						<path d="M78.25,0.25 L78.25,79.75" id="Line" stroke="#ECECEC" stroke-linecap="square"></path>
						<text id="${colorStart}" font-family="HelveticaNeue-Bold, Helvetica Neue" font-size="14" font-weight="bold" fill="#4A4A4A">
							<tspan x="0.049" y="58.5">${colorStart}</tspan>
						</text>
						<circle id="Color-1" fill="${colorStart}" cx="29.5" cy="30" r="8"></circle>
					</g>
					<path d="M0,15.9993143 C0,7.16313699 7.16231056,0 16.0077278,0 L183.992272,0 C192.833096,0 200,7.15906925 200,15.9993143 L200,150 L0,150 L0,15.9993143 Z" id="Gradient" fill="url(#linearGradient-${name})"></path>
				</g>
			</g>
		</svg>
	`;
}

function cardNew(colorStart, colorEnd, name) {
	colorStart = colorStart.replace('#', '');
	colorEnd = colorEnd.replace('#', '');
	return `<svg width="247px" height="72px" viewBox="0 0 247 72" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
		<defs>
			<rect id="path-1" x="0" y="0" width="235" height="60" rx="5"></rect>
			<filter x="-4.7%" y="-11.7%" width="109.4%" height="136.7%" filterUnits="objectBoundingBox" id="filter-2">
				<feOffset dx="0" dy="4" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
				<feGaussianBlur stdDeviation="3" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
				<feColorMatrix values="0 0 0 0 0.290196078   0 0 0 0 0.290196078   0 0 0 0 0.290196078  0 0 0 0.1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
			</filter>
			<circle id="path-3" cx="157.5" cy="41.5" r="2.5"></circle>
			<circle id="path-4" cx="157.5" cy="18.5" r="2.5"></circle>
			<linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="linearGradient-${name}">
				<stop stop-color="#${colorStart}" offset="0%"></stop>
				<stop stop-color="#${colorEnd}" offset="100%"></stop>
			</linearGradient>
			<path d="M0,4.99952863 C0,2.23836521 2.24153039,0 5.00329329,0 L140,0 L140,60 L5.00329329,60 C2.24005071,60 0,57.7574344 0,55.0004714 L0,4.99952863 Z" id="path-6"></path>
		</defs>
		<g id="Gradients" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
			<g id="List-gradients" transform="translate(-19.000000, -25.000000)">
				<g id="1-item" transform="translate(25.000000, 27.000000)">
					<g id="body">
						<use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
						<use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-1"></use>
					</g>
					<circle id="border-2" fill="#C5C5C5" cx="157.5" cy="41.5" r="5.5"></circle>
					<circle id="border-1" fill="#C5C5C5" cx="157.5" cy="18.5" r="5.5"></circle>
					<rect id="-hr-" fill="#C5C5C5" x="157" y="22" width="1" height="16"></rect>
					<text id="#${colorStart}" font-family=".AppleSystemUIFont" font-size="12" font-weight="normal">
						<tspan x="166" y="45" fill="#C5C5C5">#</tspan>
						<tspan x="173.59375" y="45" fill="#4A4A4A">${colorStart}</tspan>
					</text>
					<g id="CIR-COLOR-2">
						<use fill="#${colorStart}" fill-rule="evenodd" xlink:href="#path-3"></use>
						<circle stroke="#FFFFFF" stroke-width="2" cx="157.5" cy="41.5" r="3.5"></circle>
					</g>
					<text id="#${colorEnd}" font-family=".AppleSystemUIFont" font-size="12" font-weight="normal">
						<tspan x="166" y="22" fill="#C5C5C5">#</tspan>
						<tspan x="173.59375" y="22" fill="#4A4A4A">${colorEnd}</tspan>
					</text>
					<g id="CIR-COLOR-1">
						<use fill="#${colorEnd}" fill-rule="evenodd" xlink:href="#path-4"></use>
						<circle stroke="#FFFFFF" stroke-width="2" cx="157.5" cy="18.5" r="3.5"></circle>
					</g>
					<mask id="mask-7" fill="white">
						<use xlink:href="#path-6"></use>
					</mask>
					<use id="gradient" fill="url(#linearGradient-${name})" xlink:href="#path-6"></use>
				</g>
			</g>
		</g>
	</svg>`;
}