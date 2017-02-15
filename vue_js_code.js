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
    seen: 'maybe',
    good: true
  }
})


var app4 = new Vue({
  el: '#app-4',
  data: {
    otherMessage: 'Random comment',
    todos: [
      {
        text: "number1",
        complete: true,
        id: 1
      },
      {
        text: "number2",
        complete: false,
        id: 2
      },
      {
        text: "number3",
        complete: true,
        id: 3
      }
    ],
    person: {
      firstName: "Brian",
      lastName: "Rice",
      age: 'mystery'
    },
    numbers: [
      1,
      2,
      3,
      4,
      5,
      6
    ]
  },
  methods: {
    even: function(theNumbers) {
      return theNumbers.filter(function(number){
        return number % 2 === 0
      })
    }
  },
  computed: {
   oddNumbers: function() {
    return this.numbers.filter(function(number){
      return number % 2 === 1
    })
   }
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

Vue.component('my-component',{
  template: '<p class="in-js">will have classes given in both html and js</p>'
})

var arraySyntax = new Vue({
  el: '#arraySyntax',
  data: {
    activeClass: 'active',
    isActive: true,
    errorClass: 'text-danger'
  }
})

var editStyle = new Vue({
  el: '#editStyle',
  data: {
    styleObject:{
      color: 'red',
      fontSize: 30,
      backgroundColor: 'blue'
    },
    secondStyleObject:{
      color: 'green',
      fontSize: 10,
      backgroundColor: 'grey'
    }
  }
})

var eventHandling = new Vue({
  el: '#eventHandle',
  data: {
    counter: 0

  },
  methods: {
    welcome: function(event) {
      alert('hey there')
    }
  }
})
