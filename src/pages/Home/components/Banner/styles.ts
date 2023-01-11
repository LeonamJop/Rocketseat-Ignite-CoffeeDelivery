import styled from 'styled-components'
import Banner from '../../../../assets/BackgroundBanner.svg'

export const BannerContainer = styled.div`
  background-image: url(${Banner});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 5.875rem 10rem 6.75rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 4.125rem;

  img {
    width: 476px;
    height: 360px;
  }
`

export const Title = styled.div`
  width: 36.75rem;
  height: 12.375rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-title']};
  }

  span {
    font-size: 1.25rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
  }
`
