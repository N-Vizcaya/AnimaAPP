import React, { useEffect, useState } from 'react';
import {Card} from 'react-bootstrap';
import Item from './Item'


const items = [
    {id: 1, name:"Funcional", description:"Lunes y miercoles", price: "$2000", imgURL:"components/img/pesas.jpg"},
    {id: 2, name:"Fitboxing", description:"martes y jueves", price: "$2000", imgURL:"components/img/pesas.jpg"}
    ]
    
    function getList(){
    return new Promise ((resolve, reject) => {
    setTimeout(() => resolve(items), 3000
    )
    })
    }
  