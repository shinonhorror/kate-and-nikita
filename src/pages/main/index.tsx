import ChildSection from './components/child';
import DetailsSection from './components/details';
import DresscodeSection from './components/dresscode';
import LocationSection from './components/location';
import TimeSection from './components/time';
import WelcomeSection from './components/welcome';
import * as S from './styled';
import Player from './components/playlist';

const Main = () => {
  return (
    <S.Wrapper>
      <Player />
      <ChildSection />
      <WelcomeSection />
      <LocationSection />
      <TimeSection />
      <DresscodeSection />
      <DetailsSection />
    </S.Wrapper>
  );
};

export default Main;
