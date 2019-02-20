// get the ul
const moviesList = document.querySelector('#results');
const searchForm = document.querySelector('#search-movies');

const searchMovies = (query) => {
  fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
    // .then(() => {})
    .then(response => response.json())
    .then((data) => {
      const movieObjs = data.Search;
      // clean the result
      moviesList.innerHTML = '';
      // iterate on the movies
      movieObjs.forEach((movieObj) => {
        // insert the moviesTag on the ul
        const movieTag = `<li>
          <img src='${movieObj.Poster}'/>
          <p>${movieObj.Title}</p>
        </li>`;
        moviesList.insertAdjacentHTML('beforeEnd', movieTag);
      });
    });
};

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.target;
  const input = form.querySelector('input');
  searchMovies(input.value);
});

searchMovies('harry potter');

// // The code we used for algolia POST
// const searchAlgoliaPlaces = (event) => {
//   fetch("https://places-dsn.algolia.net/1/places/query", {
//     method: "POST",
//     body: JSON.stringify({ query: event.currentTarget.value })
//   })
//     .then(response => response.json())
//     .then((data) => {
//       console.log(data.hits); // Look at locale_names.default
//       data.hits.forEach((hit) => {
//         console.log(hit.locale_names.default[0]);
//       });
//     });
// };

// const input = document.querySelector("#search");
// input.addEventListener("keyup", searchAlgoliaPlaces);
