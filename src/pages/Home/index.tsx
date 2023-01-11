import { Banner } from './components/Banner'
import { ProductList } from './components/ProductList'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Banner />
      <ProductList />
    </HomeContainer>
  )
}
