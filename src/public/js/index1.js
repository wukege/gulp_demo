
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
    /**
     * description 新增信息
     * method add
     */
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
    /**
     * description 删除信息
     * method add
     */
    del: function (index) {
      if (index === -1) {
        this.myData = [];
      } else {
        this.myData.splice(index, 1);
      }
    },
    /**
     * description 重置信息
     * method reset
     */
    reset: function () {
      this.username = '';
      this.age = '';
    }
  },
  components: {

  }
});