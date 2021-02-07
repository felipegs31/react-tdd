import React, { useState } from 'react'
import NewRestaurantForm from './NewRestaurantForm'
import RestaurantList from './RestaurantList'
import {
  Button,
  Modal,
} from 'react-materialize';

const RestaurantListPage = () => {

  const [restaurants, setRestaurants] = useState([])


  const handleAddRestaurant = (restaurant) => {
    setRestaurants(oldValue => [restaurant, ...oldValue]);
    $("#addRestaurantModal").modal("close")
  }

  return (
    <div>
      <Modal
        id="addRestaurantModal"
        header="New Restaurant"
        trigger={
          <Button
            data-test="addRestaurantButton"
          >
            Add Restaurant
          </Button>
        }
      >
        <NewRestaurantForm onSave={handleAddRestaurant}/>
      </Modal>

      <RestaurantList restaurants={restaurants} />
    </div>
  )
}

export default RestaurantListPage
