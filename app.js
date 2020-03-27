var app = new Vue({
  el: '#app', //DOM element that Vue attaches itself to
  data: {
    message: 'Hello Vue!'
  }
});

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on' + new Date().toLocaleString()
  }
});

var app3 = new Vue({
  el: '#app-3',
  data:{
    seen: true
  }
});

var menu = new Vue({
  el: '#menu',
  data: {
    menuItems: [
      { text: 'Rick And Morty' },
      { text: 'Black Mirror' },
      { text: 'Disenchantment' },
    ]
  }
});

var menu2 = new Vue({
  el: '#menu2',
  data:{
    menuItems:[
      { menuItem: 'Rict And Morty' },
      { menuItem: 'Strange Things' },
      { menuItem: 'Disenchantment' },
      { menuItem: 'The OA' },
      { menuItem: 'Orange Is the New Black' },
    ]
  }
});

var app5 = new Vue({
  el: "#app-5",
  data: {
    message: 'Hello!'
  },
  methods:{
    reverseMessage: function(){
      this.message = this.message.split('').reverse().join('');
    }
  } 
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})