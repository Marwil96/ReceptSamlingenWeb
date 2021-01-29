import React from 'react';
import styled from 'styled-components';

const ContainerWrapper = styled.section`
  max-width: 128rem;
  /* padding: 6.4rem; */
`

const Container = ({className, style, children}) => (
  <ContainerWrapper className={`${className} pl-3 pr-3 lg:pl-7 lg:pr-7 xl:pl-5 xl:pr-5`} style={{...style}}>
    {children}
  </ContainerWrapper>
)

export default Container;