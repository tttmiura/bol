/*
 * index.js
 */
'use strict';
$(function() {

// init video frame
if(VIDEO) {
	if(VIDEO.videos) {
		$.each(VIDEO.videos, function(i, video) {
			var section = $('<section id="sectionHistory' + i + '"></section>');
			var title = $('<h3></h3>');
			title.text(video.title);
			section.append(title);

			var frame = $('<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/' + video.id + '?rel=0" frameborder="0" allowfullscreen></iframe>');
			section.append(frame);

			$('#sectionHistory').append(section);
		});
	}

	// TODO
	if(VIDEO.idList) {
		$.each(VIDEO.idList, function(i, id) {
			var section = $('<section id="sectionHistoryDummy' + i + '"></section>');

			var frame = $('<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/' + id + '?rel=0" frameborder="0" allowfullscreen></iframe>');
			section.append(frame);

			$('#sectionHistoryDummy').append(section);
		});
	}
}

// init slides
Reveal.initialize({
	keyboard: {
		13: 'next', // Enter
		68: 'down', // d
		78: 'next', // n
		80: 'prev', // p
		85: 'up' // u
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
