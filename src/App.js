import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { memo, useEffect } from 'react';
import Header from './Components/Header/Header';
import Images from './Components/Images/Images';
import Videos from './Components/Videos/Videos';
import Error from './Components/Error/Error';
import Footer from './Components/Footer/Footer';
import { getImagesApi } from './Redux/Slices/ImageSlice';
import { getVideosApi } from './Redux/Slices/VideoSlice';

const App = () => {
  console.log('i am app');
  const dispatch = useDispatch()
  const imageState = useSelector(({imageState}) => imageState);
  const videoState = useSelector(({videoState}) => videoState);
  useEffect(() => {
    dispatch(getImagesApi(''))
    dispatch(getVideosApi(''))
  }, [dispatch]);
  return (
    <div className='font-custom capitalize'>
      <BrowserRouter>
        <Header />
        <div className='container h-auto min-h-screen py-14'>
          <Routes>
            <Route path='/' element={<Images imageState={imageState}/>} />
            <Route path='/videos' element={<Videos videoState={videoState} />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
    
  );
}

export default memo(App);
