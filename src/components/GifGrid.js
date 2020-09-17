import React/* , { useState, useEffect } */ from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import PropTypes from 'prop-types'
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

function GifGrid({ category }) {

    // const [images, setImages] = useState([]);

    const { data:images, loading } = useFetchGifs( category );

    // console.log(loading);
    // console.log(data)

    // useEffect(() => {
    //     getGifs( category )
    //     .then(setImages)
    //     // .then( imgs => setImages(imgs) );
    // }, [ category ])

    

    return (
        <>
        <h3 className="animate__animated animate__fadeIn animate__slower">{ category } </h3>

        { loading && <p className="animate__animated animate__flash animate__infinite">Loading</p> }

        <div className="card-grid ">

                {
                    images.map( img => (
                        <GifGridItem 
                        key={ img.id }
                        //envia cada una de las propiedad como si fueran independientes
                        { ...img }
                        />
                    ) )
                }
    
        </div>
        </>
    )
}

// GifGrid.propTypes = {

// }

export default GifGrid

