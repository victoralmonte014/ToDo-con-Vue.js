new Vue({
  el:'#appvue',
  data: {
    lists: [
      // { keep: 'uno', completed: false},
      // { keep: 'dos', completed: false },
      // { keep: 'tres', completed: true }

      
    ],

    newKeep:'',


  },

  methods:{
    addKeep: function() {
      this.lists.push({keep: this.newKeep, completed: false}),
      this.newKeep = ''
    }
  }
})