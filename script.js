var weatherResults = $("#weather-results")
$("#search-term").keypress(function (event) {
    if (event.which == 13) {
        cityName = $("#search-term").val();

        var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&APPID=e059a0fcba34fc6e613e909251b1f7a1";

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                for (var i = 0; i < 12; i++) {
                    console.log(response);
                    // build html elements from results
                    var col = $("<div>").addClass("d-inline-flex p-2 bd-highlight");
                    var card = $("<div>").addClass("card bg-secondary text-white");
                    var body = $("<div>").addClass("card-body p-2");

                    var title = $("<h5>").addClass("card-title").text(new Date(response.list[i].dt_txt).toLocaleDateString());
                    var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + response.list[i].weather[0].icon + ".png");
                    var p1 = $("<p>").text("Temp: " + response.list[i].main.temp_max + " °F");
                    var p2 = $("<p>").text("Humidity: " + response.list[i].main.humidity + "%")

                    col.append(card.append(body.append(title, img, p1, p2)));
                    $("#weather-results").append(col);

                }



            });
    };
});   