var app = new Vue({

  el: '#root',

  data: {
    showControls: false,
    newTask: '',
    newTaskLabel: '',
    updatedTask: '',
    tasks: [],
    showTotals: false,
  },

  methods: {
    addTask() {
      if (this.newTask == '') { } else {
        this.tasks.push({ description: this.newTask, statusCompleted: false })
        this.newTask = ''
        this.showTotals = true
      }
    },
    markStatus(index) {
      // update array at position; set statusCompleted to true
      if (this.tasks[index].statusCompleted) {
        this.tasks[index].statusCompleted = false
      } else {
        this.tasks[index].statusCompleted = true
      }
    },
    taskStatus(index) {
      if (this.tasks[index].statusCompleted) {
        return 'taskCompleted'
      }
    },
    renameTask(index) {
      this.tasks[index].description = this.tasks[index].description
    },
    deleteTask(index) {
      this.tasks.splice(index, 1)
      if (this.tasks.length == 0) {
        this.showTotals = false
      }
    },
    focusInput() {
      this.$refs.task.focus();
    }

  },

  computed: {

      taskCount() {
        return this.tasks.length
      },

      incompleteTasks() {
        return this.tasks.filter(task => !task.statusCompleted).length
      },

      completedTasks() {
        return this.tasks.filter(task => task.statusCompleted).length
      },

  },

  mounted() {

    this.focusInput();

  }

});
