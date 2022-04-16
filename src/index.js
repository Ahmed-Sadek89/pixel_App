import {createRoot} from 'react-dom/client';
import {lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import './Assets/Index.css';
import Loading from './Assets/Loading/Loading';
const App = lazy(() => import('./App'))

const root = createRoot(document.getElementById('root'));

root.render(
  <Suspense fallback={<Loading />}>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>
)