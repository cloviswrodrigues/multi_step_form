import Title from "../Title";
import SubTitle from "../Subtitle";

import { Container } from './styles';

import IconThankYou from '../../../assets/images/icon-thank-you.svg'


const ThankYou = () => {
  return (
    <Container>
      <img src={IconThankYou} alt="thank you icon" />
      <Title>Thank you!</Title>
      <SubTitle>
        Thanks for confirming your subscription!
        We hope you have fun using our platform. If you ever need support,
        please feel free to email us at support@loremgaming.com.

      </SubTitle>
    </Container>
  )
}

export default ThankYou
