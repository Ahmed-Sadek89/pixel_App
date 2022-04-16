import React, {memo, useState} from 'react'
import { useDispatch } from 'react-redux';
import { getVideosApi } from '../../../Redux/Slices/VideoSlice';
import './Styles.css';

const Search = ({setVisibleItems}) => {
    console.log('hello, i am seach camming from video');
    const dispatch = useDispatch();
    const [videoTerm, setVideoTerm] = useState('');
    const getImagesAccordingToTerm = (e) => {
        e.preventDefault()
        dispatch(getVideosApi(videoTerm))
        setVisibleItems(6)
    }
    return (
        <form onSubmit={getImagesAccordingToTerm}>
            <input
                type='text'
                required
                placeholder='search Video term...'
                value={videoTerm}
                onChange={(e) => setVideoTerm(e.target.value)}
            />
            <input 
                type='submit'
                value='Search'
            />
        </form>
    )
}

export default memo(Search)