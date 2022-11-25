import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes from './Route/Routes/Routes';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div >
      <RouterProvider router={routes} />

      <Toaster></Toaster>
    </div>
  );
}

export default App;
