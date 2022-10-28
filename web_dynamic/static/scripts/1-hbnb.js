document.addEventListener("DOMContentLoaded", function (event) {
	const amenityList = [];
	const amenityDict = {};
	$("input:checkbox").click(function () {
		if $(this).is(":checked")) {

		amenityDict[$(this).attr("data-id")] = $(this).attr("data-name");
		amenityList = Object.keys(amenityDict);
		const amenityDictVals = Object.values(amenityDict);
		$("DIV.amenities h4").append(amenityDictVals);
	} else {
		delete amenityDict[$(this).attr("data-id")];
	}
		
  })
});
