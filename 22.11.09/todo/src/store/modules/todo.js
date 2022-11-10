const todo = {
    namespaced: true,
    state: {
            allTodo: [
                // 개별 todo Object
          {
            id: 1638771553377,                // nowDateObj.getTime()
            content: 'Vue',                   // Todo 내용
            dueDateTime: '2022-11-09T00:00',  // 마감일
            isCompleted: false,               // 완료된 할 일
            isImportant: true,				        // 중요 할 일
          },
          {
            id: 1638771553378,
            content: 'Vue Router',
            dueDateTime: '2022-11-09T00:00',
            isCompleted: false,
            isImportant: true,
          },
          {
            id: 16387715533779,
            content: 'Vuex',
            dueDateTime: '2022-11-09T00:00',
            isCompleted: true,
            isImportant: false,
          },
        ],
      },
    getters: {
      importantTodo(state) {
        return state.allTodo.filter((todo) => {
          return todo.isImportant
        })
      },
      todayTodo(state) {
        return state.allTodo.filter((todo) => {
          let today = new Date().toISOString().slice(8, 10)
          return today === todo.dueDateTime.slice(8, 10) ? true : false
        })
      },
      allTodo(state) {
        return state.allTodo.filter((todo) => {
          return !todo.iscompleted
        })
      }
    },
    mutations: {
        CreateTodo(state, todo) {
            const newAdd = {
                id: new Date().getTime(),
                content: todo,
                dueDateTime: new Date().toISOString(),
                isCompleted: false,
                isImportant: false,
            }
            state.allTodo.push(newAdd)
        },
        starChange(state, selected_todo) {
          state.allTodo = state.allTodo.map((todo) => {
            if (todo === selected_todo) {
              todo.isImportant = !todo.isImportant
            }
            return todo
          })
        },
        completed(state, completed_todo) {
          state.allTodo = state.allTodo.map((todo) => {
            if (todo === completed_todo){
              todo.isCompleted = !todo.isCompleted
            }
            return todo
          })
        }
    },
    actions: {
      starChange({commit}, todo) {
        commit('starChange', todo)
      },
      completed({commit}, todo) {
        commit('completed', todo)
      }
    },
}


export default todo