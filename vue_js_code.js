console.log('hi');
var app = new Vue({
  el: '#app',
  data: {
    message: 'hello vue'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: "you loaded this page on " + new Date()
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})
