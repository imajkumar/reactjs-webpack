import React from 'react'
import styled from "styled-components";

// @ts-ignore
import logo from '../../assets/logo.png'
const Logo = () => (
    <div>
      
    </div>
  );

const Brand = () => {
  return (
    <Image src={logo} alt="Examclass.in" />     
  )
}

export default Brand

const Image = styled.img`
  height: 85%;
  margin: auto 0;
`;