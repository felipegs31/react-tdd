import React, { useState } from 'react'
import RestaurantListPage from './RestaurantListPage'
import { 
  Col,
  Row
 } from 'react-materialize';

const App = () => {

  return (
    <div>
      <Row>
        <Col s={12} m={10} l={8} offset="m1 l2">
          <RestaurantListPage></RestaurantListPage>
        </Col>
      </Row>
    </div>
  )
}

export default App
