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

	var startTime = new Date().getTime();

	$('.likeBtn').click(function(e){
		e.preventDefault();
		console.log("like button clicked!");

		ga("send", "event", 'like', 'click');

		var endTime = new Date().getTime();
		var timeSpent = endTime - startTime;

		ga('send', 'timing', 'time_spent', 'hit_like', timeSpent);
	});
}