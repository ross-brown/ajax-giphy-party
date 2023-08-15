"use strict";


function showGif(url) {
  const $newGif = $("<img>");
  $newGif.attr("src", url);


  $(".gifs").append($newGif);
}





async function handleSubmit(e) {
  e.preventDefault();

  const searchValue = $("#search-input").val();
  const params = new URLSearchParams({ q: searchValue, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym" });

  const response = await fetch(`http://api.giphy.com/v1/gifs/search?${params}`);
  const data = await response.json();

  const randomNumber = Math.floor(Math.random() * 50);

  const gifUrl = data.data[randomNumber].images.original.url;

  showGif(gifUrl);
}


$("#submit-btn").on("click", handleSubmit);
