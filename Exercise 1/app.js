new Vue({
	el: "#exercise",
  data: {
  	name: "Spencer Ottarson",
    age: 23,
    google_image: "https://www.poipubaygolf.com/wp-content/uploads/2017/02/Kauai-Oceanfront-Golf-Course.jpg"
  },
  methods: {
  	random: function() {
    	return Math.random();
    }
  }
});