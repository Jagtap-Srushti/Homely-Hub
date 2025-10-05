import React from 'react'

const PropertyMapInfo = () => {
  return (
    <>

    <div className='map-image-container col-md-6 col-sm-12 col-12'>
        <h2 className='map-header'>Where you'll be</h2>
        <img 
        alt='map' 
        className='map-image' 
        src='https://th.bing.com/th/id/OIP.Soc_SzmnW4_p2oOAgQ7CDAHaHa?w=174&h=199&c=7&r=0&o=7&cb=12&dpr=1.5&pid=1.7&rm=3'/> 
    </div>

    <div className='extra-info col-md-6 col-sm-12 col-12'>
        <h2 className='extra-heading'> Extra Info</h2>
        <p className='extra-description'>A hotel is an establishment that provides accommodation, meals, and other services to guests, travelers, and tourists. Hotels range from budget-friendly lodgings to luxury resorts and often include amenities such as comfortable rooms, restaurants, swimming pools, gyms, conference halls, and recreational facilities. </p>

    </div>
    
    </>
  )
}

export default PropertyMapInfo
