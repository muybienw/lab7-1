'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here

	// Feature detects Navigation Timing API support.
	if (window.performance) {
		// Sends the hit, passing `performance.now()` as the timing value.
		ga('send', 'timing', 'JS Dependencies', 'load', performance.now());
	}


	$('.likeBtn').click(function(e){
		e.preventDefault();
		console.log("like button clicked!");

		ga("send", "event", 'like', 'click');

		// Feature detects Navigation Timing API support.
		if (window.performance) {
			// Sends the hit, passing `performance.now()` as the timing value.
			ga('send', 'timing', 'JS Dependencies', 'hit like btn', performance.now());
		}
	});
}