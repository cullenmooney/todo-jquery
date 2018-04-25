// Click on item to complete
$('li').on("click", function() {
	$(this).toggleClass("completed");
});

// Click on X to delete todo
$('span').on("click", function(e) {
	// fade out then delete the span's parent li
	$(this).parent().fadeOut(1000, function() {
		$(this).remove();
	})
	// this event stops it from bubbling up into parent elements
	e.stopPropagation();
})