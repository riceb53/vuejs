console.log('hi');
var app = new Vue({
  el: '#app',
  data: {
    message: 'hello vue',
    exampleMessage: 'capitalize me',
    messageTwo: 'my <strong> second</strong> message',
    dynamicId: 'notBlue',
    boolValueTrue: true,
    boolValueFalse: false,
    num: 3,
    urlExample: 'http://www.google.com'
  },
  methods: {
    onSubmit: function(){
      console.log('hello')
    }

  },
  filters: {
    capitalize: function(theMessage){
      if (!theMessage) {
        return ''
      }
      theMessage = theMessage.toString()
      return theMessage.charAt(0).toUpperCase() + theMessage.slice(1)
    }
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


var computedExample = new Vue({
  el: '#computed',
  data: {
    message: 'here I am'
  },
// computed is similar to 'methods', but is cached and not rerun unless dependents (in this case the variable message) change
  computed: {
    reverseMessage: function () {
      return this.message.split('').reverse().join('')
    }
  }
})

var classBinding = new Vue({
  el: '#bindExample',
  data: {
    isActive: true,
    hasError: false
  }
})


var bindToComputed = new Vue({
  el: '#computeBind',
  data: {
    isActive: true,
    error: null
  },
  computed: {
    classObject: function() {
      return {
        active: this.isActive && !this.hasError,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  }
})


var arraySyntax = new Vue({
  el: '#arraySyntax',
  data: {
    activeClass: 'active',
    errorClass: 'text-danger'
  }
})
