console.log("working");

function preview(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();

		reader.addEventListener("load", function (e) {
			var img = document.querySelector("#upload");
			img.style.visibility = "visible";
			img.src = e.target.result;
		});

		reader.readAsDataURL(input.files[0]);
	}
}

function predict(event) {
	event.preventDefault();
	var imageinput = document.querySelector("#file");
	if (imageinput.files && imageinput.files[0]) {
		console.log("predict");
		var image = imageinput.files[0];
		console.log(image)
		console.log(image["name"]);

		var form_data = new FormData();
		form_data.append("file", image);		

		$.ajax({
			type: "POST",
			url: "/upload",
			data: form_data,
			cache: false,
			processData: false,
			contentType: false,
			enctype: "multipart/form-data",
			success: function (msg) {
				console.log(msg);

				if ((msg["status"] = "success" && msg["prediction"]["label"] != "")) {
					var img = document.querySelector("#predict");
					img.style.visibility = "visible";
					img.src = "../static/" + msg["prediction"]["filename"];
					var lb = document.querySelector("#label");
					lb.innerHTML = msg["prediction"]["label"];
					lb.style.visibility = "visible";
					console.log(msg["prediction"]);
				} else {
					var img = document.querySelector("#predict");
					if (img.style.visibility == "visible") {
						img.style.visibility = "hidden";
					}
					var lb = document.querySelector("#label");
					lb.innerHTML = "Some error or image does not have any face to detect";
					lb.style.visibility = "visible";
				}
			},
		});
	}
}
