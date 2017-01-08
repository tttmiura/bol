/*
 * index.js
 */
'use strict';
$(function() {

// init slides
Reveal.initialize({
	keyboard: {
		13: 'next', // Enter
		68: 'down', // d
		78: 'next', // n
		80: 'prev', // p
		85: 'up', // u
		86: function () {
			$('.viewArea').toggle('slow');
		}, // v
		89: function () {
			// init video frame
			if(VIDEO) {
				VIDEO.initVideoFrame();
			}
		} // y
	},
	controls: true,
	progress: true,
	history: false,
	center: true,

	transition: 'convex', // none/fade/slide/convex/concave/zoom

	rollingLinks: true,

	// Optional reveal.js plugins
	dependencies: [
		{ src: 'public/lib/js/classList.js', condition: function() { return !document.body.classList; } },
		{ src: 'public/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
		{ src: 'public/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
		{ src: 'public/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
		{ src: 'public/plugin/zoom-js/zoom.js', async: true },
		{ src: 'public/plugin/notes/notes.js', async: true }
	]
});

});
