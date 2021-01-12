// creiamo istanza di vue

let app = new Vue({
  el: "#root",
  // nei nostri dati inseriremo la API key generata
  // inoltre tramite v-model prenderemo la strnga film per la ricerca

  data: {
    apiKey: "4f0c8e4dcdaf00015ee0cf645edae2b2",
    movie: "",
    myNewFilmList: [],
    query: "&query=",
    uri: "https://api.themoviedb.org/3/search/movie?api_key=",
    newSearch: ""
  },

  methods: {
    getList(){
      // trasformiamo in stringa di ricerca uri + apiKey + movie
      this.newSearch = this.uri + this.apiKey + this.query + this.movie;
      axios.get(this.newSearch)
      .then(item => {
        this.myNewFilmList = item.data.results

      })
    }
  }

});
