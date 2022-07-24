import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import { useGetAllProductsQuery } from '../features/productsApi';
const Home = () => {
  const {data,error,isLoading,isFetching,isSuccess} = useGetAllProductsQuery()
  const dispath = useDispatch()
  const handleAddtoCart=(product)=>{
    dispath(addToCart(product))
  }
  return (
    <div className='home-container'>
     {isLoading ? 
      <p>Loading....</p> :
       error ?
        <p>An error occured...</p> :
         (
         <>
          <h2>New Arriavals</h2>
          <div className='products'>
            {data?.map(product=><div key={product.id} className='product'>
              <h3>{product.name}</h3>
              <img style={{width:'100%', height:'210px'}} src={product.image} alt={product.name} />
              <div className='details'>
                <span>price: ${product.price}</span>
              </div>
              <button onClick={()=>handleAddtoCart(product)}>Add to Cart</button>
            </div>)}
          </div>
         </>
         )}
    
    </div>
  );
}

export default Home;
