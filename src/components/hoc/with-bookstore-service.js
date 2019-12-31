import React from 'react';
//import { BookstoreServiceConsumer } from '../bookstore-service-context/bookstore-service-context';
import { BookstoreServiceConsumer } from '../bookstore-service-context' //сокращенная запис благадоря файлу index.js 
//мы это делаем чтобы любой компонент в который мы обернет with bookstresevice получал в контекст
//к себе bookStoreService

export const withBookStoreService = () =>(Wrapped) => {
  return (props) => {
    return(
      <BookstoreServiceConsumer>
        {
          (bookStoreService) => {
          return(  <Wrapped {...props} 
            BookStoreService={bookStoreService} />
          )}
        }

      </BookstoreServiceConsumer>
    )
  }

}

