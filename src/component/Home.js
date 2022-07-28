import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, cartItemValueTotal } from '../features/cartSlice'
import { useGetAllProductsQuery } from '../features/productsApi'
import Slider from './Slider'
// import Banner from './Banner'
// import BannerSlide from './BannerSlide'

const Home = () => {
  const {
    data,
    error,
    isLoading,
    isFetching,
    isSuccess,
  } = useGetAllProductsQuery()
  const cart = useSelector((state) => state.cart)
  // const auth =useSelector((state)=>state.auth)
  
  useEffect(() => {
    dispatch(cartItemValueTotal())
  }, [cart])
  const dispatch = useDispatch()
  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }
  return (
    <div className="home-container">
      {isLoading ? (
        <p>Loading....</p>
      ) : error ? (
        <p>An error occured...</p>
      ) : (
        <>
          {/*<BannerSlide />*/}
         <Slider />
          <h2 style={{paddingTop:'30px'}}>Most Desirables</h2>
          <div className="products">
            {data?.map((product) => (
              <div key={product.id} className="product">
                {/*<h3>{product.name}</h3>*/}
                <img
                  style={{ width: '100%', height: '210px' }}
                  src={product.image}
                  alt={product.name}
                />
                <div className="details">
                  <span>price: ${product.price}</span>
                </div>
                <button onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Home
