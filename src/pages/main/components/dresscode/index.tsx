import * as S from './styled';
import Colors from '../../../../assets/images/dresscode.png';

const DresscodeSection = () => {
  return (
    <S.Wrapper>
      <S.Title> Дресс код </S.Title>
      <S.DetailText>
        Дорогие гости! Мы будем очень рады, если в своих нарядах вы{' '}
        <span>воздержитесь </span>
        от белого (чтобы помочь невесте сиять), красного и слишком ярких
        оттенков (кислотных).
      </S.DetailText>
      <img src={Colors} alt="" />
    </S.Wrapper>
  );
};

export default DresscodeSection;
