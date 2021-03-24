# marathon-21-02-25

Описание сути проекта:

**Diary** — это дневник событий, в котором каждое событие содержит:

- название,
- описание,
- изображение,
- дату,
- настроение.

Макет здесь: https://www.figma.com/file/VDHKZoT5hMbAAPjVZtwwKn/diary

API для изображений: (https://www.pexels.com/ru-ru/api/)

**Задание № 2**: 

Реализация функционала добавления события.

Выбор настроения происходит через обычный select. Список возможных настроений:

```jsx
const moods = ["😌", "😊", "😄", "🤣", "😰", "🥰", "🙃", "😔", "😇", "🤔", "😩", "😭", "😤", "😵", "🤒", "🤤"];
```
Выбор даты происходит через обычный `<input type="date" />`.

Авторизоваться в [API Pexels](pexels.com/ru-ru/api/). Добавить свой ключ в код для запросов. Подробнее в [документации pexels](https://www.pexels.com/ru-ru/api/documentation/).

Добавить форму поиска. При клике на кнопку поиска должны подгрузиться 20 изображений по запросу:

```jsx
`https://api.pexels.com/v1/search?query=${query}&per_page=20`
// query — это значение формы ввода поиска
```

На момент загрузки изображений выводить слово `"Загрузка..."` на месте галереи. Если по запросу ничего не пришло, то должен быть  текст `"Ничего не найдено по данному запросу"`.

В мобильной версии галерея появляется при клике на фрейм изображения.

При клике на изображение ее объект должен стать значением свойства `img` объекта события.

Примерный объект события:

```jsx
{
	title: "Мое первое событие",
	description: "Вот решил потестить мое веб-приложение",
	date: /* Объект Date */,
	mood: "😊",
	img: /* Объект изображения с API Pexels. */
}
```

По клику на кнопку "Создать" должно добавиться новое событие в общую ленту.

Невозможно создать событие,  если хоть одно свойство пустое.

**Запуск приложения**: 

git clone https://github.com/nowherei/preax-marathon-react-diary (клонируем репозиторий)

cd preax-marathon-react-diary (переходим в каталог репозитория)

git checkout 21-02-030/2 (переходим в ветку)

npm install (устанавливаем зависимости)

npm start (запускаем приложение)