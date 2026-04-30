# 📝 Todo List App

A simple and interactive Todo List application built using React. It allows users to add, edit, delete, and mark tasks as completed, with data persistence using local storage.

---

## 🚀 Technologies Used

* **React (Functional Components & Hooks)**

  * `useState` for state management
  * `useEffect` for side effects (local storage)
  * `useRef` for input focus handling

* **JavaScript (ES6+)**

* **CSS (Flexbox for layout & styling)**

* **Browser Local Storage**

  * To persist tasks even after page refresh

---

## ✨ Features

* Add new tasks
* Prevent empty task submission
* Edit existing tasks
* Delete tasks
* Mark tasks as completed (checkbox)
* Persistent storage using `localStorage`
* Responsive layout with proper text wrapping

---

## 📦 How to Run the App

### 1. Clone the Repository

```bash
git clone https://github.com/mohan-ry-07/To-Do-App.git
cd To-Do-App
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm start
```

### 4. Open in Browser

Visit:

```
http://localhost:3000
```

---

## 💾 Data Persistence

* Tasks are stored in the browser using `localStorage`
* Automatically saved whenever tasks are updated
* Loaded when the app initializes

---

## 📌 Notes

* Each task is stored as an object:

```js
{
  text: "Task name",
  completed: false
}
```

* Flexbox is used to ensure proper alignment and wrapping of long task text.

---

## 📄 License

This project is open-source and free to use.
