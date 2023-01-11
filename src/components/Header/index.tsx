import { Cart, HeaderContainer, UserLocation } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import logoCoffeeDelivery from '../../assets/CoffeeDelifveryLogo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <>
      <HeaderContainer>
        <NavLink to="/home">
          <img src={logoCoffeeDelivery} alt="" />
        </NavLink>
        <div>
          <UserLocation>
            <MapPin size={22} />
            <span>São josé, SC</span>
          </UserLocation>
          <NavLink to="/cart" title="Carrinho de compra">
            <Cart>
              <ShoppingCart size={22} />
            </Cart>
          </NavLink>
        </div>
      </HeaderContainer>
    </>
  )
}
