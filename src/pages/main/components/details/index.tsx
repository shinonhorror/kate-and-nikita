import * as S from './styled';
import People from '../../../../assets/images/people-dance.png';

const DetailsSection = () => {
  return (
    <S.Wrapper>
      <S.Title> Подарки </S.Title>
      <S.DetailText>
        Ваше присутствие - самый ценный подарок для нас! Но мы много о чем
        мечтаем, поэтому с благодарностью примем ваши{' '}
        <span>поздравления в конверте</span> - это поможет осуществить наши
        мечты.
      </S.DetailText>
      <img src={People} alt="" />
    </S.Wrapper>
  );
};

export default DetailsSection;
