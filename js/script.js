let dataInput = document.querySelector("input[type='text']")
let ulSpisok = document.getElementById('list')
let spans = document.getElementsByTagName('span')
let saveBtn = document.getElementById('save')
let clearBtn = document.getElementById('clear')
let info = document.getElementById('about')

function deleteTodo() {
	for (let span of spans) {
		span.addEventListener('click', function () {
			span.parentElement.remove()
			event.preventDefault()
			tit.style.display = 'block'
		})
	}
}

// ? при создании нескольких задач возможна ошибка в зачеркивании (зачеркивает через 1)

function DecorLi() {
	let decorTask = document.getElementsByTagName('i')
	for (let i of decorTask) {
		i.addEventListener('click', function () {
			i.classList.toggle('active')
		})
	}
}

function loadTodo() {
	if (localStorage.getItem('todoApplication')) {
		ulSpisok.innerHTML = localStorage.getItem('todoApplication')
		deleteTodo()
	}
}

// !    addEventListener - обработчик события с последующим вызовом функции
// !    appendChild() - добавляет узел в конец списка дочерних элементов указанного родительского узла
let tit = document.getElementsByTagName('h2')[0]
dataInput.addEventListener('keypress', function (keyPressed) {
	if (keyPressed.which === 13) {
		if (dataInput.value.trim() === '') {
			alert('Вы ничего не ввели!! Введите задачу: ')
		} else {

			let newLi = document.createElement('li')
			let newSpan = document.createElement('span')
			let newI = document.createElement('i')
			newSpan.innerHTML = 'Delete '
			let date = new Date()
			let hours = date.getHours()
			let minutes = date.getMinutes()
			let seconds = date.getSeconds()
			let dateValNum = date.getDate()
			let month = date.getMonth()
			let year = date.getFullYear()
			let time = ' время: ' + hours + ':' + minutes + ':' + seconds + ' дата: ' + dateValNum + '.' + month + '.' + year
			newI.innerHTML = this.value + time // собираем текущие данные из input.value + добавляем время
			this.value = ''
			tit.style.display = 'none'
			ulSpisok.appendChild(newLi).append(newSpan, newI)
			deleteTodo()
			DecorLi()
		}
	}
})




saveBtn.addEventListener('click', function () {
	localStorage.setItem('todoApplication', ulSpisok.innerHTML)
})

clearBtn.addEventListener('click', function () {
	ulSpisok.innerHTML = ''
	localStorage.setItem('todoApplication', ulSpisok.innerHTML)
	tit.style.display = 'block'
})
info.addEventListener('click', function () {
	alert('Синяк Юрий Иванович')
})

deleteTodo()
loadTodo()
DecorLi()