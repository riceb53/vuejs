console.log('hi');
var app = new Vue({
  el: '#app',
  data: {
    message: 'hello vue',
    messageTwo: 'my <strong> second</strong> message',
    dynamicId: 'notBlue',
    boolValueTrue: true,
    boolValueFalse: false
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


var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      {text: "number1"},
      {text: "number2"},
      {text: "number3"}
    ]
  }
})


var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'this is in app 5'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})


var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'hello'
  }
})

Vue.component('list-item',{
  props: ['todo'],
  template: '<li>My list has {{todo.text}} </li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      {text: 'banas'},
      {text: 'banananas'},
      {text: 'bananas'},
      {text: 'grapes'}
    ]
  }
})
