import React, { useState } from 'react'
import AddCategory from './components/addCategory';
import GifGrid from './components/GifGrid';

// componente GiftExpertApp

function GiftExpertApp() {

  const [categories, setCategories] = useState(['One Punch'])

  // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

  // const handleAdd = () => {
  //   // setCategories([...categories, 'Naruto'])
  //   // setCategories(['Naruto', ...categories])
  //   setCategories( cats => ['Naruto', ...cats])
  // }

    return (
      <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories} />
        <hr />

        {/* <button onClick={handleAdd} >Agregar</button> */}

        <ol>
          {
            categories.map( category => (
              <GifGrid 
              key={ category }
              category={ category } 
              />
            ) )
          }
        </ol>

      </>
    )
  }
  
  export default GiftExpertApp;