;$(function () {
  var vm = new Vue({
    el: '#demo',
    data: {
      ifStatus: true,
      showStatus: true,
      classStatus:true,
      model:'',
      data:[{
        type:'水果',
        all:[{
          key:1,
          value:'苹果'
        },
          {
            key:2,
            value:'西瓜'
          },
          {
            key:3,
            value:'栗子'
          }]
      },{
        type:'蔬菜',
        all:[{
          key:1,
          value:'白菜'
        },
          {
            key:2,
            value:'土豆'
          },
          {
            key:3,
            value:'茄子'
          }]
      }]
    },
    mounted: function () {

    },
    methods: {
      changeOne: function(){
        var self = this;
        if (self.ifStatus === true) {
          self.ifStatus =false
        }else {
          self.ifStatus = true
        }
      },
      changeTwo:function () {
        var self = this;
        if (self.showStatus === true) {
          self.showStatus =false
        }else {
          self.showStatus = true
        }
      },
      changeThree:function () {
        var self = this;
        if (self.classStatus === true) {
          self.classStatus =false
        }else {
          self.classStatus = true
        }
      }
    }
  })
});