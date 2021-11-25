import Title from '../components/Title.jsx';
import SelectSerie from '../components/SelectSerie.jsx';
import SelectNameandNumber from '../components/SelectNameandNumber.jsx';

function MainPage() {

  return (

    <div className="h-full flex flex-col space-y-20">
      <Title />
      <SelectSerie />
      <SelectNameandNumber />
    </div>
  );
}

export default MainPage;
