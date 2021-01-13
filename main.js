// creiamo istanza di vue

let app = new Vue({
  el: "#root",
  // nei nostri dati inseriremo la API key generata
  // inoltre tramite v-model prenderemo la strnga film per la ricerca

  data: {
    // milestone 1
    apiKey: "4f0c8e4dcdaf00015ee0cf645edae2b2",
    movie: "",
    myNewFilmList: [],
    myNewseriesList: [],
    query: "&query=",
    uriFilm: "https://api.themoviedb.org/3/search/movie?api_key=",
    uriSeries: "https://api.themoviedb.org/3/search/tv?api_key=",
    newFilmSearch: "",
    newSeriesTvSearch: "",
    flags:
      {us: "https://flagcdn.com/w80/us.png",
       en: "https://flagcdn.com/w80/gb.png",
       it: "https://flagcdn.com/w80/it.png",
       fr: "https://flagcdn.com/w80/fr.png",
       es: "https://flagcdn.com/w80/es.png"
      },
      uriCover: "https://image.tmdb.org/t/p/w342"

  },

  methods: {
    // milestone1

    getList(){
      // trasformiamo in stringa di ricerca uri + apiKey + query + movie
      this.newFilmSearch = this.uriFilm + this.apiKey + this.query + this.movie;
      // a qst punto la funzione fa una richiesta API
      axios.get(this.newFilmSearch)
      .then(item => {

        let result = item.data.results
        this.myNewFilmList = result

        // milestone 2
        // andiamo a trasformare il ns voto da decimale a intero;
        this.myNewFilmList.forEach(item => {
          let x = Math.ceil(item.vote_average / 2);
          return item.stars = x
        });
      })



      // nuova richiesta ad axios per le serie tv;
      // trasformiamo in stringa di ricerca uri + apiKey + query + movie
      this.newSeriesTvSearch = this.uriSeries + this.apiKey + this.query + this.movie;
      axios.get(this.newSeriesTvSearch)
      .then(response => {
        let result = response.data.results
        this.myNewseriesList = result


        // andiamo a trasformare il ns voto da decimale a intero;
        this.myNewseriesList.forEach(item => {
          let x = Math.ceil(item.vote_average / 2);
          return item.stars = x
        });

      })

      // la milestone 3 non contiene methods!
    }

  }

});
