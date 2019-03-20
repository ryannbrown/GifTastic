


var topicList = ["cats", "aliens", "explosions","dogs", "Ron Burgundy" ];


function displayGIFS(){
    $(".gif-dump").empty();
    console.log(this, 'this')
var topic = $(this).attr("data-topic");
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&limit=10&api_key=ipfyDWOCpsecTGj757uv1iziAEcZssqt"
// var queryURL = "http://api.giphy.com/v1/gifs/search?q=guns&api_key=ipfyDWOCpsecTGj757uv1iziAEcZssqt&limit=10"

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    var results = response.data;
    
    var gifDiv = $("<div class='gif-dump'>");

    for (var i = 0; i<results.length; i++){

    
    // Creating a div to hold the movie
  //  console.log(results[i].fixed_height_still.url)

    // Storing the rating data
    var rating = response.data[i].rating;

    // Creating an element to have the rating displayed
    var pRating = $("<p>").text("Rating: " + rating);

    // Displaying the rating
    gifDiv.append(pRating);

    // Retrieving the animated URL for the image
    var imgURL = results[i].images.fixed_height_still.url;

    // Creating an element to hold the image
    var image = $("<img>").attr("src", imgURL);

      //storing the animated image data
      var animatedImageURL = results[i].images.fixed_height.url;
      console.log("animated img: " + animatedImageURL);
    
      //adding an animated attribute to all images
      
      image.attr("data-animate", animatedImageURL);
    


    //storing still image data
    var stillImageURL = results[i].images.fixed_height_still.url;
    console.log("still img: " + stillImageURL);

//adding a STILL img attribute to all images
  image.attr("data-still", stillImageURL);

    // Adding a data-state attribute to all images
    
      image.attr("data-state", "still");
    
//adding a GIF ID to each image
    
      image.attr("id", "gif");
  
    // Appending the image
    gifDiv.append(image);

    // Putting GIFS  below the previous jumbotron
    $(".gif-dump").append(gifDiv);
  };
    });

  };



$(".gif-dump").on("click", "#gif", function(){
// $("#gif").on("click", function() {



  //onclick makes the image switch urls for its source
  var state = $(this).attr("data-state");
 //if the state is still, this will change the src to the data-animate url
  if (state === "still") {

    var imageIClickedOn = $(this);

    console.log(this)
    // Get the value of the data-animate attribute on the img I clicked on
    var animatedURL = imageIClickedOn.attr("data-animate");

    //Get the value of the data-still attribute on the img I clicked on
    var stillURL = imageIClickedOn.attr("data-still")
    // Set the src attribute on the img I clicked on
    imageIClickedOn.attr("src", animatedURL);


    // $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
});


// displayGIFS();


function renderButtons(){

$("#buttons-view").empty();

for (var i = 0; i < topicList.length; i++){

    var butt = $("<button>");
    butt.addClass("gif-btn");
    butt.attr("data-topic", topicList[i]);
    butt.text(topicList[i]);
    $("#buttons-view").append(butt);
    
    }

}

$("#add-gif").on("click", function(event) {
    event.preventDefault();
    
    var topic = $("#gif-input").val().trim();

  // if (topic === ""{
  
  // }

    topicList.push(topic);

    renderButtons();

});

// Adding a click event listener to all elements with a class of "gif-btn"
$(document).on("click", ".gif-btn", displayGIFS);

// Calling the renderButtons function to display the intial buttons
renderButtons();




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