import { Cart, HeaderContainer, UserLocation } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { Counter } from './components/Counter'
import { ChoiceProductContext } from '../../context/ChoiceProductContext'
import { useContext } from 'react'

import logoCoffeeDelivery from '../../assets/CoffeeDelifveryLogo.svg'

export function Header() {
  const { product, cep } = useContext(ChoiceProductContext)

  return (
    <>
      <HeaderContainer>
        <NavLink to="/home">
          <img src={logoCoffeeDelivery} alt="" />
        </NavLink>
        <div>
          {cep ? (
            <UserLocation>
              <MapPin size={22} />
              <span>
                {cep.localidade}, {cep.uf}
              </span>
            </UserLocation>
          ) : (
            ''
          )}

          <NavLink to="/cart" title="Carrinho de compra">
            <Cart>
              <ShoppingCart size={22} />
              {product.length ? <Counter /> : ''}
            </Cart>
          </NavLink>
        </div>
      </HeaderContainer>
    </>
  )
}
