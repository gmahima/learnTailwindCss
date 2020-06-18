import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container mt-5">
      <button className="btn btn-teal"> find friends</button>
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-5" role="alert">
        <strong className="font-bold">Alert!</strong>
        <span className="block sm:inline">Please update password</span>
      </div>
      <div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl p-2 items-center">
        <div className="flex-shrink-0">
          <img  src="https://source.unsplash.com/random" alt='dsfasd' className="h-12 w-12 " />
        </div>
        <div className="ml-6 pt-1 flex-1">
          <h4 className="text-xl text-gray-900">Mahima Gangavarapu</h4>
          <p className="text-base text-gray-600">you have a message</p>
        </div>
      </div>

    </div>
  
  );
}

export default App;
