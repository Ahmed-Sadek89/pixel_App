import React, { memo } from 'react';
import './Styles.css'
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import notFound from '../../NotFound.webp';

const Item = ({index}) => {
    console.log('hello, iam items camming from image');
    const tags = index.tags.split(', ')
    return (
        <div className='item'>
            <div className='forImage'>
                <LazyLoadImage
                    src={index.largeImageURL}
                    alt={index.user}
                    effect='blur'
                    className='lazyLoading'
                    placeholderSrc={notFound}
                />
            </div>
            <div className='forInfo'>
                <h2>photo by <span className='font-bold'>{index.user}</span></h2>
                <h3>
                    <span className='font-bold'>views: </span>
                    <span>{index.views}</span>
                </h3>
                <h3>
                    <span className='font-bold'>downloads: </span>
                    <span>{index.downloads}</span>
                </h3>
                <h3>
                    <span className='font-bold'>likes: </span>
                    <span>{index.likes}</span>
                </h3>
            </div>
            <div className='tags'>
                {
                    tags.map((i, key) => (
                        <span key={key}>#{i}</span>
                    ))
                }
            </div>
        </div>
    )
}

export default memo(Item)