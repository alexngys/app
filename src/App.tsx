import React from 'react';
import './App.css';
import SignUpForm from './components/SignUpForm';

const style ={
  appContainer: 'max-w-[728px] mx-auto text-center',
}

function App() {
  return (
    <div className={style.appContainer}>
    <SignUpForm />
    </div>
  );
}

export default App;
