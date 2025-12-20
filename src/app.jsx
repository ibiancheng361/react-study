import router from './router';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import './app.scss'


// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';






function App() {
  return (
    <Suspense callback={<div>应用加载中...</div>}>
      <RouterProvider router={router}/>
    </Suspense>
  );
}

export default App
