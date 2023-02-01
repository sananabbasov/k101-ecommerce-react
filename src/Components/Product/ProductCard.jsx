import { Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './product.scss'

function ProductCard({category_name}) {

    const [products, setProducts] = useState([])

    const getProducts = async () =>{
        await fetch(`https://fakestoreapi.com/products/category/${category_name}`).then(res => res.json()).then(data => setProducts(data))
    }


    useEffect(() =>{
        getProducts()
    },[])
    return (
        <div className='productCard'>
            <Container>
                <Grid container>
                    <Grid item lg={3} md={4}>
                        <div className='categoryArea'>
                            <img src='https://cdn.pixabay.com/photo/2017/12/26/09/15/woman-3040029_960_720.jpg' />
                            <div className="catInfo">
                                <p>{category_name}</p>
                                <Link className='shopButton' to={"/"}>Shop now</Link>
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={9} md={8}>
                        {
                            products.map((product,index)=>(
                                <div key={index} className="productItems">
                                    {product.title}
                                </div>
                            ))
                        }
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default ProductCard