import React from 'react'

const ImpCategorie = (props) => {
  const {imgUrl,name}=props
  return (
    <div className='category-outer'>
        <div className='category-name'>{name}</div>
        <img style={{position:"absolute",bottom:"10px",left:"50px"}} src={imgUrl} alt='imagecategory' height={200} width={150}/>
        <button className='category-btn' type='button'>Shop Now</button>
      
    </div>
  )
}

export default ImpCategorie
