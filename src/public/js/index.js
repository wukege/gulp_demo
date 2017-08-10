
var vm = new Vue({
  el: '#index',
  data: {
    username: '',
    age: '',
    myData: [],
  },
  mounted: function () {

  },
  methods: {
    add: function () {
      if (this.username !== '' && this.age !== '') {
        this.myData.push({
          name: this.username,
          age: this.age
        });
        this.username = '';
        this.age = '';
      }
    },
    del: function (index) {
      if (index === -1) {
        this.myData = [];
      } else {
        this.myData.splice(index, 1);
      }
    },
    reset: function () {
      this.username = '';
      this.age = '';
    }
  },
  components: {

  }
});
