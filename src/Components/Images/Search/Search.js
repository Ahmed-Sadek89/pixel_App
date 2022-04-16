import React, {memo, useState} from 'react'
import { useDispatch } from 'react-redux';
import { getImagesApi } from '../../../Redux/Slices/ImageSlice';
import './Styles.css';

const Search = ({setVisibleItems}) => {
    console.log('hello, i am seach camming from image');
    const dispatch = useDispatch();
    const [imageTerm, setImageTerm] = useState('');
    const getImagesAccordingToTerm = (e) => {
        e.preventDefault()
        dispatch(getImagesApi(imageTerm))
        setVisibleItems(6)
    }
    return (
        <form onSubmit={getImagesAccordingToTerm}>
            <input
                type='text'
                required
                placeholder='search Image term...'
                value={imageTerm}
                onChange={(e) => setImageTerm(e.target.value)}
            />
            <input 
                type='submit'
                value='Search'
            />
        </form>
    )
}

export default memo(Search)