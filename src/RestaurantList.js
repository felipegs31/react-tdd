import React, { useState } from 'react'
import { Collection, CollectionItem } from 'react-materialize';

const RestaurantList = props => {

  return (
    <Collection>
      {props.restaurants.map(restaurant => {
        return <CollectionItem key={restaurant}>{restaurant}</CollectionItem>
      })}
    </Collection>
  )
}

export default RestaurantList
