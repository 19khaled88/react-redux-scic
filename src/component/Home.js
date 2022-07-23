import React from 'react';
import { useGetAllProductsQuery } from '../features/productsApi';
const Home = () => {
  const {data,error,isLoading,isFetching,isSuccess} = useGetAllProductsQuery()
  
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
              <h3>{product.name}/</h3>
              <img style={{width:'250px', height:'250px'}} src={product.image} alt={product.name} />
              <div className='details'>
                <span>price: {product.price}</span>
              </div>
            </div>)}
          </div>
         </>
         )}
    <p>Home</p>
    </div>
  );
}

export default Home;
