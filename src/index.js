import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store/store' // исправлено
import App from './components/app'
import './index.css'
import ErrorBoundry from './components/error-boundry/error-boundry';
import { BookstoreServiceProvider } from './components/bookstore-service-context';


import { BrowserRouter as Router } from 'react-router-dom'
import BookstoreService from './components/services/bookstore-service';

const bookstoreService = new BookstoreService();

ReactDOM.render(
  //предоставляем доступ к редакс стору
  <Provider store={store}>
  {/*Обрабатываем ошибки в компонентах ниже*/}
    <ErrorBoundry>
      {/*Передаем сервис через ContextAPI*/}
      <BookstoreServiceProvider value ={bookstoreService}>
        {/*Оборачиваем все в router*/}
        <Router>
        {/*Само приложение*/}
          <App />
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
)
