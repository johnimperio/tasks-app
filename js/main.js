var app = new Vue({

  el: '#root',

  data: {
    showControls: false,
    newTask: '',
    newTaskLabel: '',
    updatedTask: '',
    tasks: [],
  },

  methods: {
    addTask() {
      this.tasks.push({ description: this.newTask, statusCompleted: false })
      this.newTask = ''
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

});
