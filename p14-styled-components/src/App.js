import { Title, TitleSmall } from './styles';

function App() {
  return (
    <div>
      <Title fontSize={20}>
        Main
        <span>Texto menor</span>
      </Title>

      <TitleSmall>Titulo menor</TitleSmall>
    </div>
  );
}

export default App;
