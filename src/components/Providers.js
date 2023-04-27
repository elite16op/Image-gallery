'use client'

import React, { ReactNode } from 'react';
import { Provider } from 'react-redux'
import { store } from '@/redux/Pagination'


const Providers = ({children}) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default Providers