import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import {
  Container,
  Header,
  CarImage,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
} from './style';

export function CarDetails() {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImage>
        <ImageSlider
          imagesUrl={[
            'https://www.motortrend.com/uploads/sites/10/2018/05/2018-audi-rs5-4wd-coupe-angular-front.png',
          ]}
        />
      </CarImage>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period> Ao dia </Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <About>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste odit,
          voluptatum alias iure, corporis molestias laboriosam non reiciendis
          harum quibusdam natus doloribus sapiente accusamus earum ullam nulla
          necessitatibus. Veritatis, minus.
        </About>
      </Content>
    </Container>
  );
}
