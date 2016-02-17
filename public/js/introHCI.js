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
	$('.likeBtn').click(function(e){
		e.preventDefault();
		console.log("like button clicked!");

		ga("send", "event", 'like', 'click');
	});
}