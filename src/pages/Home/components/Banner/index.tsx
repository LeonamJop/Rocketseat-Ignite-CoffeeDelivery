import { Items } from '../../../../components/Items'
import { BannerContainer, Title } from './styles'
import imgBanner from '../../../../assets/CoffeeList/CoffeeImage.svg'

export function Banner() {
  return (
    <BannerContainer>
      <div>
        <Title>
          <h2>Encontre o café perfeito para qualquer hora do dia</h2>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
        </Title>
        <Items />
      </div>
      <img src={imgBanner} alt="" />
    </BannerContainer>
  )
}
