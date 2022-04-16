import './Styles.css'

const ItemsLoading = () => {
    const loop = [1,2,3,4,5,6,7,8, 9, 10, 11, 12]
    return(
        <div className='container grid grid-cols-1 md:grid-cols-3 mt-10 gap-20'>
        {
            loop?.map(i => (
                <div key={i}>
                    <div className="product">
                        <div className="loading image1"></div>
                        <span className="loading item-1"></span>
                    </div>
                </div>
            ))
        }
        </div>
    )
}
export default ItemsLoading