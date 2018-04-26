// Click on item to complete
$('ul').on("click", "li", function() {
	$(this).toggleClass("completed");
});

// Click on X to delete todo
$('ul').on("click", "span", function(e) {
	// fade out then delete the span's parent li
	$(this).parent().fadeOut(1000, function() {
		$(this).remove();
	})
	// this event stops it from bubbling up into parent elements
	e.stopPropagation();
})

// Add a new item
$('input[type="text"]').keypress(function(e) {
	if(e.charCode === 13) {
		// grabbing text from input
		var todoText = $(this).val();
		// create a new li to the ul
		$('ul').append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
		// clear the input
		$(this).val("");
	}
})

// Toggle the plus button
$('#toggle-form').click(function() {
	$('input[type="text"]').fadeToggle();
});