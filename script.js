//  Задание 1  --------------------------------------------------

// Сохраняем строку в localStorage
localStorage.setItem('greeting', 'Привет, мир!');

// Извлекаем строку и записываем ее в переменную чтобы далее 
// вывести ее в консоли
let greeting = localStorage.getItem('greeting')
console.log(greeting)


//  Задание 2  --------------------------------------------------

// Удаляем ранее сохраненную строку в localStorage
localStorage.removeItem('greeting')

// Попытаемся извлечь удаленную строку из localStorage
console.log(localStorage.getItem('greeting'))  //  null
// так как строки уже нету, мы в ответ получаем "null"


//  Задание 3  --------------------------------------------------

// Запишем данные пользователя в константу ввиде объекта
const user = {
    name: "Zhanibek Seitzhanov",
    info: {
        age: 42,
        adress: "Almaty, Aksay-1, 16",
        email: "zhann2013@gmail.com",
    },
    hobbies: ['Math', 'Chess', 'Astronomy']
}

// преобразуем наш объект в строку и сохраняем его в localStorage
const userJSON = JSON.stringify(user)
localStorage.setItem('user', userJSON)

// Извлекаем сохраненные данные клиента в константу и преобразуем 
// обратно в объект
const storedUser = localStorage.getItem('user')
const parsedUser = JSON.parse(storedUser)

console.log(parsedUser)  //  Выводим полученный объект в консоль


//  Задание 4  --------------------------------------------------

// Ниже пример модификации данных в localStorage

// Сначала извлекаем строку с данными
const storedUser1 = localStorage.getItem('user')

// Далее преобразуем ее в объект
let parsedUser1 = JSON.parse(storedUser1)

// Изменяем данные добавляя новый ключ и значение
parsedUser1.country = "Kazakhstan";

// Преобразуем в строку измененные данные
const userJSON1 = JSON.stringify(parsedUser1)

// И сохраняем их обратно в localStorage
localStorage.setItem('user', userJSON1)

// Выводим в консоль саму строку в localStorage, чтобы увидеть изменения
console.log(localStorage.user)

// В консоль выводиться следующая строка:
// {"name":"Zhanibek Seitzhanov","info":{"age":42,"adress":"Almaty, Aksay-1, 16","email":"zhann2013@gmail.com"},"hobbies":["Math","Chess","Astronomy"],"country":"Kazakhstan"}

// Или можно вывести измененный объект
console.log(parsedUser1)


//  Задание 5  --------------------------------------------------

// Проверяем наличие данных по новому пользователю "user2"
if (localStorage.getItem('user2') !== null) {

    // Если пользователь существует, то выводим его данные ввиде строки в консоль
    console.log(localStorage.user2)

} else {

    // Если данных о пользователе нету, тогда создаем данного пользователя
    const user2 = {
        name: "Aibek Bazarbayev",
        info: {
            age: 27,
            adress: "Astana, Tauelsizdik avenue, 52",
            email: "aibek.bazarbay@mail.ru",
        },
        hobbies: ['Golf', 'football', 'snooker'],
        country: "Kazakhstan"
    }

    // Далее преобразуем данные нового пользователя в строку
    const user2_JSON = JSON.stringify(user2)
    // и созраняем в localStorage
    localStorage.setItem('user2', user2_JSON)

}


//  Задание 6  --------------------------------------------------

// Очищаем весь localStorage. Удаляем все что там есть
localStorage.clear();

// Чтобы проверить пустое ли хранилище, мы можем использовать два способа
// Первый: просто попытаться вывести в консоль то что там раньше было
console.log(localStorage.user) // выдаст в консоли undefined

// Второй: Проверить длину localStorage. Если она равна 0, тогда там нет данных
console.log(localStorage.length) //  0 


//  Задание 7  --------------------------------------------------

// Создаем список задач
let tasks = [
    {
        title: "Buy apples",
        completed: false
    },
    {
        title: "Go to gym",
        completed: false
    },
    {
        title: "Visit New York city",
        completed: false
    },
    {
        title: "Visit Zurich",
        completed: true
    },
    {
        title: "Learn Javascript",
        completed: true
    },
]

// Сохраняем список задач в localStorage
const tasks_JSON = JSON.stringify(tasks)
localStorage.setItem('tasks', tasks_JSON)

// Извлекаем список задач из localStorage
const storedTasks = localStorage.getItem('tasks')
const parsedTasks = JSON.parse(storedTasks)
 
// Выводим извлеченный список задач в консоль
console.log(parsedTasks)


//  Задание 8  --------------------------------------------------

// Извлекаем список задач из localStorage
const storedTasks2 = localStorage.getItem('tasks')
const parsedTasks2 = JSON.parse(storedTasks2)

// Меняем данные по первой задаче
parsedTasks2[0].completed = true

// Сохраняем список задач в localStorage
const tasks_JSON2 = JSON.stringify(parsedTasks2)
localStorage.setItem('tasks', tasks_JSON2)

// Проверяем сохраненные данные
console.log(localStorage.tasks)
