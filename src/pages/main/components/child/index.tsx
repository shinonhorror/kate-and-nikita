import * as S from './styled';
import Love from '../../../../assets/images/love.png';

const ChildSection = () => {
  return (
    <S.Wrapper>
      <S.Title>У нас свадьба! </S.Title>
      <S.Subtitle>Катя + Никита</S.Subtitle>
      <S.Description>19.09.2025</S.Description> <img src={Love} alt="" />
      <S.ColorfulBlock />
    </S.Wrapper>
  );
};

export default ChildSection;
