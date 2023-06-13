import React, { Fragment } from 'react'
import CardProduct from '../CardProduct/CardProduct';

function ListProduct(props) {
  const { listProductProps } = props;
  return (
    <Fragment>
      {Array.isArray(listProductProps) && listProductProps.map((product) => {
        return <CardProduct key={product.id} productProps={product} />
      })}
    </Fragment>

  )
}

export default ListProduct