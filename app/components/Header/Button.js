import NormalButton from 'components/Button/StyledButton';

const Button = NormalButton.extend`
  background-color: #543B7A;
  background-image: linear-gradient(#7950B9 0%, #543B7A 100%);
  border-radius: 5px;
  color: #fff;
  height: 38px;
  padding: 0 14px;
  border: 0;
  transition: all .2s ease;

  &:hover,
  &:focus {
    background-position: 0 -100px;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), inset 0 0 12px #543B7A;
  }
`;

export default Button;
