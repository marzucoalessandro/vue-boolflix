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
    query: "&query=",
    uri: "https://api.themoviedb.org/3/search/movie?api_key=",
    newSearch: "",

  },

  methods: {
    // milestone1

    getList(){
      // trasformiamo in stringa di ricerca uri + apiKey + movie
      this.newSearch = this.uri + this.apiKey + this.query + this.movie;
      // a qst punto la funzione fa una richiesta API
      axios.get(this.newSearch)
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

    }

  }

});
