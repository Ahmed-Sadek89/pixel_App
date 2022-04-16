import React, {memo ,useState} from 'react'
import Search from './Search/Search'
import Item from './Item/Item'
import ItemsLoading from '../../Assets/ItemsLoading/ItemsLoading';

const Images = ({imageState}) => {
  console.log('hello, iam image');

  const {loading, data, error} = imageState;
  const [visibleItems, setVisibleItems] = useState(6);

  document.onscroll = () => {
    if(window.scrollY + window.innerHeight >= document.body.offsetHeight){
      if(visibleItems < data?.hits.length){
        setVisibleItems(prev => prev + 3)
        console.log('updated..')
      }
    }
  }
  
  return (
    <div>
      {/* search */}
      <Search setVisibleItems={setVisibleItems}/>
      {/* data according to search */}
      {
        loading === true && <ItemsLoading />
      }
      {
        error === true && <h1 className='text-2xl text-center text-red-600 '>something went wrong...</h1>
      }
      {
        (loading === false && error === false) &&
        data?.hits.length === 0 ?
        <h1 className='text-center text-2xl text-emerald-500'>no results found</h1>
        : 
        <div className=' container grid grid-rows-none grid-cols-1 md:grid-cols-3 mt-10 gap-x-10 gap-y-5'>
          {
            data?.hits.slice(0,visibleItems).map((index) => {
              return (
                <Item index={index} key={index.id} />
              )
            })
          }
        </div>
      }
    </div>
  )
}

export default memo(Images)