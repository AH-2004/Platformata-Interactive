const injectSvgsFail = () => {
	console.log("Failed to load svgs.");
};

const injectSvgs = () => {
	const inject = document.querySelectorAll('img.inject');
	SVGInject.setOptions({ onFail: () => injectSvgsFail() });
	SVGInject(inject, { onAllFinish: () => main() });
};

document.addEventListener('DOMContentLoaded', injectSvgs);

const main = () => {
	const overview = document.querySelector('svg.overview');
	const levels = document.querySelectorAll('svg.level');

	const levelsArr = Array.from(levels).map((level) => {
		return level.innerHTML;
	});

	const parsed = parse(overview.innerHTML);
	console.log(parsed);
};
