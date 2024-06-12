# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and
some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
  uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)
  uses [SWC](https://swc.rs/) for Fast Refresh

# Книга контактів

Виконай рефакторинг коду твого застосунку «Книга контактів» із домашнього
завдання третього модуля. Додай управління станом за допомогою бібліотеки
[Redux Toolkit](https://redux-toolkit.js.org/), замість локального React стану.

### Папки та файли

Створи папку **`src/redux`** для зберігання файлів, пов'язаних із логікою Redux:

- **`store.js`** - файл створення стору
- **`contactsSlice.js`** - файл слайсу для контактів
- **`filtersSlice.js`** - файл слайсу для фільтрів

### Початковий стан

Нехай початковий стан Redux виглядає наступним чином.

```js
{
  contacts: {
    items: [],
  },
  filters: {
    name: '',
  },
}
```

Тут ми виділимо два слайси - контакти (поле **`contacts`**) і фільтри (поле
**`filters`**).

### Слайс контактів

У файлі **`contactsSlice.js`** оголоси слайс контактів, використовуючи функцію
**`createSlice()`**.

Екшени слайса для використання в **`dispatch`**:

- **`addContact`** - додавання нового контакту до властивості items
- **`deleteContact`** - видалення контакту за id з властивості items

Оголоси функції-селектори для використання в **`useSelector`**:

- **`selectContacts`** - повертає список контактів з властивості items.

З файла слайса експортуй редюсер, а також його екшени і селектори.

### Слайс фільтра

У файлі **`filtersSlice.js`** оголоси слайс фільтра, використовуючи функцію
**`createSlice()`**.

Екшени слайса для використання в **`dispatch`**:

- **`changeFilter`** - зміна значення фільтра в властивості **name**

Оголоси функції-селектори для використання в **`useSelector`**:

- **`selectNameFilter`** - повертає значення фільтра з властивості name.

З файла слайса експортуй редюсер, а також його екшени і селектори.

### Бібліотека React Redux

Зв'яжи React-компоненти з Redux-логікою за допомогою хуків **`useSelector`** та
**`useDispatch`** бібліотеки [React Redux](https://react-redux.js.org/).

Усі компоненти, крім карточки контакту **`Contact`** у списку контактів
ContactList, не повинні приймати жодних пропсів. Замість цього, компоненти мають
використовувати хук **`useSelector`** та функції-селектори слайсів для отримання
необхідних їм значень.

Для відправки екшенів компоненти використовують хук **`useDispatch`** та
оголошені раніше екшени слайсів:

- Форма **`ContactsForm`** відправляє екшен додавання контакту при сабміті
- Карточка контакту **`Contact`** відправляє екшен видалення контакту при кліку
  по кнопці видалення.
- Поле фільтра **`SearchBox`** відправляє екшен зміни фільтра при введенні в
  текстове поле

### Бібліотека Redux Persist

Використай бібліотеку
[Redux Persist](https://www.npmjs.com/package/redux-persist) для збереження
масиву контактів у локальному сховищі.

У файлі **`store.js`**:

- Створи конфігурацію для збереження поля items зі слайса контактів.
- Використовуй **`persistReducer`**, щоб застосувати конфігурацію до редюсера
  слайса контактів.
- Використовуй **`persistStore`** для створення **`persistor`** для
  **`PersistGate`**.
