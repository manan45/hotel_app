// use styled component for dynamic styling of components
import styled from 'styled-components';
import defaultImage from '../images/defaultBcg.jpeg'

const StyledHero = styled.header`
  min-height: 60vh;
  // to pass props in the styled component use the following method
  background: url(${ props => props.img }) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default StyledHero;