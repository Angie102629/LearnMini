// component/my-event/my-event.js
Component({  
  methods: {
    handleIncrement() {
      this.triggerEvent('increment',{name:'why',age: 18}, {})
    }
  }
})
