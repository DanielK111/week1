let calc = new Vue({
  el: '#app',
  data: {
    tasks: [],
    newTask: '',
    x: 0,
    y: 0,
    lastResult: 0
  },
  computed: {
    result() {
      let x = parseFloat(this.x);
      let y = parseFloat(this.y);

      if (isNaN(x) || isNaN(y)) return this.lastResult;

      this.lastResult = x + y;
      return this.lastResult;
    }
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        this.tasks.push({ id: Math.random().toLocaleString(), task: this.newTask.trim() });
        this.newTask = '';
      }
    },
    addItem: function() {
      let newItem = document.createElement('li');
      newItem.innerText = calc.newTask;
      document.getElementById('taskList').appendChild(newItem);
      calc.newItem = '';
    }
  }
});