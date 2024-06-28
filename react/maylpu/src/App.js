import React from 'react'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import Counter from './components/ErrorBoundary/Counter'


export default function App() {
  return (
    <div>
      <ErrorBoundary>
        <Counter/>
        <Counter/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Counter/>
      </ErrorBoundary>
      <Counter/>
    
      <h1>Hello Adfar</h1>
    </div>
  )
}
