new Vue({
  el: "#app",
  data: {
    title: "Hello, world!"
  },
  methods: {
    onTextInput: function(event) {
      this.title = event.target.value;
    }
  }
});