const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  // adding new elements
  var text = prompt('Enter your task: ')
  const li = document.createElement('li')
  const span = document.createElement('span')

  const check = document.createElement('input')
  check.type = 'checkbox'
  check.name = 'task'

  span.textContent = text

  li.appendChild(check)
  li.appendChild(span)
  list.appendChild(li)

  // Keeping track of the TODOS (count)
  count = itemCountSpan.textContent
  count = parseInt(count)
  count = count + 1
  itemCountSpan.textContent = count

  // Keeping tack of unchecked items
  showChecked()
  function showChecked() {
    uncheckedCountSpan.textContent =
      parseInt(count) - document.querySelectorAll('input:checked').length
  }
  document.querySelectorAll('input[name=task]').forEach((i) => {
    i.onClick = function () {
      showChecked
      console.log(typeof document.querySelectorAll('input:checked').length)
    }
  })

  // Create delete functionality
  const button = document.createElement('button')
  button.innerHTML = 'Delete'

  button.addEventListener('click', function () {
    let con = confirm('Are you sure you want to delete this?')
    if (con === true) {
      list.removeChild(li)
      count = count - 1
      itemCountSpan.textContent = count
      uncheckedCountSpan.textContent =
        parseInt(count) - document.querySelectorAll('input:checked').length
      console.log(con)
    }
  })

  li.appendChild(button)
}
