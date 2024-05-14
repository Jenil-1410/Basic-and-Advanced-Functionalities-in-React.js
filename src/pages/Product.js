import React from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom';
import axios from 'axios'

function Product() {
    const params = useParams();

    const mutation = useMutation({
        mutationFn: (newProduct) => {
          return axios.put(`https://dummyjson.com/products/${params.productId}`, newProduct)
        },
      })

    const fetchProduct = async () => {
        const response = await fetch(`https://dummyjson.com/products/${params.productId}`);
        const data = await response.json();
        return data;
    };

    const { isLoading, error, data: product } = useQuery({ queryKey: ["product", params.productId], queryFn: fetchProduct });

    if(isLoading){
        return <h3 className='font-bold'>LOADING....</h3>;
    }
    if(error){
        return <h3 className='font-bold'>Error : {error.message}</h3>;
    }
    if(mutation.isPending){
        return <h3 className='font-bold'>UPDATING...</h3>;
    }
    if(mutation.isError){
        return <h3 className='font-bold'>Error while updating : {mutation.error.message}</h3>;
    }

  return (
    <div>
      <h1>PRODUCT : {product.title}</h1>
      <button
            onClick={() => {
                const updatedTitle = 'title updated';
                mutation.mutate({title: updatedTitle })
            }}
          >
            Update the title
        </button>
    </div>
  )
}

export default Product