const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: "The Final Empire",
      author: "Brandon Sanderson",
      age: 50,
    };
  },
  methods: {
    changeTitle(title) {
      this.title = title;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e) {
      console.log(e, e.type);
    },
  },
});

app.mount("#app");
