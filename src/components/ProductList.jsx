import React, { useContext} from 'react'
import ProductCard from './ProductCard'
import { ProductContext } from './ProductContext'

function ProductList() {
    
    const { products } = useContext(ProductContext);
    
  return (  
    <>
    <div className="product-card-container">
         
        {products.map( (item) => (
          // tis is how we pass the specific "item" data to each card
          <ProductCard key={item.id} product={item} />
        ))}
        
        
    </div>
      
    </>
  )
}

export default ProductList