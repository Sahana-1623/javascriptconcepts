const todoList = [{
  name: 'make dinner',
  dueDate: '2022-12-22'
  }, {
    name: 'wash dishes',
    dueDate: '2022-12-22'
  }];

renderTodoList ();

function renderTodoList () {
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const {name, dueDate} = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button js-delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  });
 
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
  //to add eventlister for delete which is a string right now and havent actually put this button the page yet. the string is put on the page in above line of code. so put the event listener after the above line. another problem is if we just put queryselector it will consider one delete button so to consider all use queryselectorall
  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        //console.log(index); //closure
        todoList.splice(index,1);
        renderTodoList();
      })
    });
}

document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => {
    addTodo();
  })

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  
  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  
  todoList.push({
    //name: name,
    //dueDate: dueDate
    name,
    dueDate
  });
  inputElement.value = '';
  renderTodoList ();
}