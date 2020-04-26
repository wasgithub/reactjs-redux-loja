import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-hera-feminino/08/D22-3305-008/D22-3305-008_detalhe1.jpg?ts=1574361288?ims=280x280"
          alt="Tênis"
        />
        <strong>
          Tênis muito legal com um titulo muito grande Tênis muito legal com um
          titulo muito grande
        </strong>
        <span>R$ 129,00</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-hera-feminino/08/D22-3305-008/D22-3305-008_detalhe1.jpg?ts=1574361288?ims=280x280"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,00</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-hera-feminino/08/D22-3305-008/D22-3305-008_detalhe1.jpg?ts=1574361288?ims=280x280"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,00</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-hera-feminino/08/D22-3305-008/D22-3305-008_detalhe1.jpg?ts=1574361288?ims=280x280"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,00</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-hera-feminino/08/D22-3305-008/D22-3305-008_detalhe1.jpg?ts=1574361288?ims=280x280"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,00</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-hera-feminino/08/D22-3305-008/D22-3305-008_detalhe1.jpg?ts=1574361288?ims=280x280"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,00</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
