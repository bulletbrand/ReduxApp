import React from 'react';
//создали контекст с провайдером и консумером и переименовали их ка нам удобно
const {
  Provider: BookstoreServiceProvider,
  Consumer: BookstoreServiceConsumer
} = React.createContext();

export {
  BookstoreServiceConsumer,
  BookstoreServiceProvider
}