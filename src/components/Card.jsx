import styled from "styled-components";
import Image from "../images/image-qr.png";

function Card() {
  return (
    <Container>
      <QrCard>
        <img src={Image} alt="image-qr" />
        <Text>
          <h2>Improve your front-end skills by building projects </h2>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </Text>
      </QrCard>
    </Container>
  );
}

export default Card;

const Container = styled.div`
  max-width: 360px;
`;

const QrCard = styled.div`
  background-color: hsl(0, 0%, 100%);
  padding: 18px;
  border-radius: 16px;
  text-align: center;
  margin: 0 1em;

  img {
    width: 100%;
    border-radius: 12px;
  }
`;
const Text = styled.div`
  padding: 22px 10px;

  h2 {
    color: hsl(218, 44%, 22%);
    padding-bottom: 15px;
  }

  p {
    color: hsl(220, 15%, 55%);
  }
`;
