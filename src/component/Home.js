import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, cartItemValueTotal } from '../features/cartSlice'
import { useGetAllProductsQuery } from '../features/productsApi'
import Category from './Category'
import Footer from './Footer'
import LatestItem from './LatestItem'
import Offers from './Offers'
// import HomeBanner from './HomeBanner'
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
      <Slider />
      {isLoading ? (
        <p>Loading....</p>
      ) : error ? (
        <p>An error occured...</p>
      ) : (
        <>
          {/* <BannerSlide /> */}

          {/* <HomeBanner /> */}
          {/* <Banner /> */}
          <div className="home-page">
            <h2 style={{ paddingTop: '30px' }}>Most Desirables</h2>

            <div className="products">
              {data?.map((product) => (
                <div key={product.id} className="product">
                  {/*<h3>{product.name}</h3>*/}
                  <img src={product.image} alt={product.name} />
                  <p style={{ textAlign: 'center', marginBottom: '1px' }}>
                    {product.name}
                  </p>
                  <div className="details">
                    <span>price: ${product.price}</span>
                    <span>Stock: 20</span>
                  </div>
                  <p style={{ fontSize: '13px', marginBottom: '2px' }}>
                    Description:{product.description}
                  </p>
                  <button onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      <Category />
      <Offers />
      <LatestItem />
      <Footer />
    </div>
  )
}

export default Home
