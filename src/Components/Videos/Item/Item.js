import React, { memo } from 'react';
import './Styles.css';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import notFound from '../../NotFound.webp';

const Item = ({index}) => {
    console.log('hello, iam items camming from video');
    const tags = index.tags.split(', ')
    return (
        <div className='item'>
            <div className='relative w-full'>
                <LazyLoadImage
                    src={index.userImageURL}
                    alt={index.user}
                    effect='blur'
                    className='lazyLoading w-5/6 md:w-96'
                    placeholderSrc={notFound}
                    title={`go to ${index.pageURL}`} onClick={() => window.open(index.pageURL, '_blank')}
                />
                
                <i 
                    title={`go to ${index.pageURL}`}
                    onClick={() => window.open(index.pageURL, '_blank')} 
                    className='cursor-pointer text-4xl absolute font-bold text-white bx bx-play-circle transition duration-300 ease-in hover:text-emerald-500' 
                    style={{top:'110px', left:'110px'}}
                >
                    
                </i>
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