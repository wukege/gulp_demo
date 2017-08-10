
var vm = new Vue({
  el: '#index',
  data: {
    username: '',
    age: '',
    dataList:[],
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
        this.dataList.push({
          name: this.username,
          age: this.age
        });
        this.username = '';
        this.age = '';
      }
    },
    /**
     * description 重置信息
     * method reset
     */
    reset: function () {
      this.username = '';
      this.age = '';
    },
    /**
     * description 删除信息
     * method add
     */
    delData:function (data) {
      this.dataList = data;
    }
  },
  components: {

  }
});
