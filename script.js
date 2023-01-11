$(document).ready(function() {
	$(".box").click(function() {
		let classNames = $(this).attr("class").split(" ");
		let boxName = classNames[0];
		let className = classNames[1];
		
		if ($(this).css("background-color") == "red") {
			console.log("heloo");
		} else {
			$("." + boxName).css("background-color", "#000");
			$("." + className).css("background-color", "red");
		};
	})
})
