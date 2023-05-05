import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { detailData } from '../../services/detailSlice';

export const Detail = () => {
    const detailRdx = useSelector(detailData);
    console.log(detailRdx);

    useEffect(()=> {}, []);

  return (
    <>
    <h2>Detail</h2>
    <div>{detailRdx.choosenObject.name}</div>
    <div>{detailRdx.choosenObject.surname}</div>
    <div>{detailRdx.choosenObject.phone}</div>
    <div>{detailRdx.choosenObject.email}</div>
    </>
  )
}
