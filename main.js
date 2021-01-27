new Vue({
  el: '#root',
  data: {
    images: [
      'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg',
      'https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg',
      'https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg',
      'https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg'
    ],
    imagesIndex: 0,
  },

  methods: {
    next: function() {
        this.imagesIndex += 1;
        if (this.imagesIndex >= this.images.length) {
          this.imagesIndex = 0;
        }
    },
    prev: function() {
        this.imagesIndex -= 1;
        if (this.imagesIndex < 0) {
          this.imagesIndex = this.images.length - 1;
        }
    },
    isActive: function(i) {
      if (i === this.imagesIndex) {
        return 'fas fa-circle active'
      } else {
        return 'fas fa-circle'
      }
    },
    changePic:function(i) {
      this.imagesIndex = i
    }
  }
 });
Vue.config.devtools = true;
