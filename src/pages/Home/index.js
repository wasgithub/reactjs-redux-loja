import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import api from '../../services/api';
import { formatPrice } from '../../utils/format';

import * as CartActions from '../../store/modules/cart/actions';

import { ProductList } from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const cart = useSelector((state) => ({
    amount: state.cart.reduce((amount, product) => {
      amount[product.id] = product.amount;
      return amount;
    }, {}),
  }));

  useEffect(() => {
    setProductsService();
  }, []);

  async function setProductsService() {
    try {
      const response = await api.get('products');
      const data = response.data.map((product) => ({
        ...product,
        formatPrice: formatPrice(product.price),
      }));

      setProducts(data);
    } catch (error) {}
  }

  function handleAddProduct(product) {
    dispatch(CartActions.addToCart(product));
  }

  return (
    <ProductList>
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.formatPrice}</span>

          <button type="button" onClick={() => handleAddProduct(product)}>
            <div>
              <MdAddShoppingCart size={16} color="#fff" />{' '}
              {cart.amount[product.id] || 0}
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
