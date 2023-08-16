"use strict";

const API_KEY = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";

/**
 * Creates an image HTML element and appends it to the DOM.
 * @param {*} url The source URL
 */
function showGif(url) {
  const $newGif = $("<img>").attr("src", url);

  $(".gifs").append($newGif);
}



async function fetchGif() {
  const searchValue = $("#search-input").val();
  const params = new URLSearchParams({ q: searchValue, api_key: API_KEY });

  const response = await fetch(`http://api.giphy.com/v1/gifs/search?${params}`);
  const data = await response.json();

  const randomNumber = Math.floor(Math.random() * 50);

  return data.data[randomNumber].images.original.url;
}




/**
 * Takes a user submission and submits a query to the Giphy API
 * @param {*} e The event triggering the function.
 */
async function handleSubmit(e) {
  e.preventDefault();

  if (!$("#search-input").val()) {
    alert("Please enter a valid term.");
    return;
  }

  const gifUrl = await fetchGif();

  $("#search-input").val('');

  showGif(gifUrl);
}

/**
 * Clears the div which displays the GIFs.
 */
function clearGifs() {
  $(".gifs").empty();
}


$("#submit-btn").on("click", handleSubmit);
$("#delete-btn").on("click", clearGifs);
