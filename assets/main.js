


var topicList = ["cats", "aliens", "explosions","dogs", "Ron Burgandy" ];


function displayGIFS(){

var topic = $(this).attr("data-topic");
// var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topic + "&limit=10&api_key=ipfyDWOCpsecTGj757uv1iziAEcZssqt"
var queryURL = "http://api.giphy.com/v1/gifs/search?q=cats&limit=10&api_key=ipfyDWOCpsecTGj757uv1iziAEcZssqt"

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    var results = response.data;
    
    for (var i = 0; i<results.length; i++){

    console.log(response.data[i].rating)
    // Creating a div to hold the movie
    var gifDiv = $("<div class='gif-dump'>");

    // Storing the rating data
    var rating = response.data[i].rating;

    // Creating an element to have the rating displayed
    var pRating = $("<p>").text("Rating: " + rating);

    // Displaying the rating
    gifDiv.append(pRating);

    // Retrieving the animated URL for the image
    var imgURL = response.data[i].images.fixed_height.url;

    // Creating an element to hold the image
    var image = $("<img>").attr("src", imgURL);

    // Appending the image
    gifDiv.append(image);

    // Putting GIFS  below the previous jumbotron
    $("#gif-dump").append(movieDiv);
    
    };

  });

};

displayGIFS();





// $("button").on("click", function() {
//     // In this case, the "this" keyword refers to the button that was clicked
  
//     // Constructing a URL to search Giphy for the name of the person who said the quote
    
    


//     // After the data comes back from the API
//     then(function(response) {
//       // Storing an array of results in the results variable
//       var results = response.data;
//         console.log(response.data)
//         console.log(response.data)
//       // Looping over every result item
//       for (var i = 0; i < results.length; i++) {

//         // Only taking action if the photo has an appropriate rating
//         if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
//           // Creating a div for the gif
//           var gifDiv = $("<div>");

//           // Storing the result item's rating
//           var rating = results[i].rating;

//           // Creating a paragraph tag with the result item's rating
//           var p = $("<p>").text("Rating: " + rating);

//           // Creating an image tag
//           var personImage = $("<img>");

//           // Giving the image tag an src attribute of a proprty pulled off the
//           // result item
//           personImage.attr("src", results[i].images.fixed_height.url);

//           // Appending the paragraph and personImage we created to the "gifDiv" div we created
//           gifDiv.append(p);
//           gifDiv.append(personImage);

//           // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
//           $("#gif-dump").append(gifDiv);
//         }
//       }
//     });
// });