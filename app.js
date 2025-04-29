const app = Vue.createApp({
  data() {
    return {
      url: "https://github.com/yoomster",
      showBooks: true,
      books: [
        {
          title: "The Final Empire",
          author: "Brandon Sanderson",
          img: "assets/The Final Empire.jpg",
          isFav: true,
        },
        {
          title: "The Way Of Kings",
          author: "Brandon Sanderson",
          img: "assets/The Way Of Kings.jpg",
          isFav: false,
        },
        {
          title: "Name Of The Wind",
          author: "Patrick Rothfuss",
          img: "assets/Name Of The Wind.jpg",
          isFav: true,
        },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    toggleIsFav(book) {
      book.isFav = !book.isFav;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount("#app");
