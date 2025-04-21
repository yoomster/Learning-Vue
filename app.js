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
        },
        {
          title: "The Way Of Kings",
          author: "Brandon Sanderson",
          img: "assets/The Way Of Kings.jpg",
        },
        {
          title: "Name Of The Wind",
          author: "Patrick Rothfuss",
          img: "assets/Name Of The Wind.jpg",
        },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
});

app.mount("#app");
