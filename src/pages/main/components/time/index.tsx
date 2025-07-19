import * as S from './styled';
import Timings from '../../../../assets/images/timings.png';

const TimeSection = () => {
  return (
    <S.Wrapper>
      <S.Title> Какой план? </S.Title>
      <img src={Timings} alt="" />
    </S.Wrapper>
  );
};

export default TimeSection;
