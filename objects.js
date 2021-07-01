const addMovieBtn = document.getElementById("add-movie-btn");
const searchMovieBtn = document.getElementById("search-btn");

const movies = [];

const clearContent = () => {
  document.getElementById("title").value = "";
  document.getElementById("extra-name").value = "";
  document.getElementById("extra-value").value = "";
};

const renderMovieList = (filter = '') => {
  const movieList = document.getElementById("movie-list");
  if (movies.length === "0") {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = "";

  const filteredMovies = !filter ? movies : movies.filter(movie => movie.info.title.includes(filter));

  movies.forEach( (movie) => {
      const movieEl = document.createElement('li');
      let text = movie.info.title + '-';
        for (const key in movie.info){
            if (key !== 'title'){
                text = text + `${key}: ${movie.info[key]}`; 
            }
        }
      movieEl.textContent = text;
      movieList.append(movieEl);    
  });
};

const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    alert("ADD COMPLETE INFORMATION");
  }
  const newMovie = {
    info: {
      title: title,
      [extraName]: extraValue,
    },
    id: Math.random(),
  };
  movies.push(newMovie);
  renderMovieList();
  clearContent();
  //   const renderMovieList = (title) => {

  //     if (movieList.length ==='0'){

  //     };

  //     const renderedMovie = document.createElement("li");
  //     // renderedMovie.className = "movie-card";
  //     renderedMovie.innerHTML = (`
  //       <div>
  //         <h4>${title}</h4>
  //       </div>`
  //     );
  //     const movieEl = document.getElementById("movie-list");
  //     movieEl.append(renderedMovie);
  //   };
  //   renderMovieList(newMovie.info.title)
};

const searchMovieHandler = () =>{
    const filterTerm = document.getElementById('filter-title').value;
    renderMovieList(filterTerm);
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchMovieBtn.addEventListener("click",searchMovieHandler);