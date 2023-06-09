import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import ErrorBox from '../ErrorBox/ErrorBox';
import Loader from '../Loader/Loader';
import { useCallback, useState } from 'react';
import { API_KEY, API_URL } from '../../consts';

const WeatherBox = () => {
  const [weatherData, setWeatherData] = useState();
  const [pending, setPending] = useState(false);
  const [errorBox, setErrorBox] = useState(false);

  const handleCityChange = useCallback((city) => {
    setPending(true);
    fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`).then((res) => {
      if (res.status === 200) {
        return res.json().then((data) => {
          const weatherData = {
            city: data.name,
            temp: data.main.temp,
            icon: data.weather[0].icon,
            description: data.weather[0].main,
          };
          setWeatherData(weatherData);
          setPending(false);
          setErrorBox(false);
        });
      } else {
        setErrorBox(true);
      }
    });
  }, []);

  return (
    <section>
      <PickCity action={handleCityChange} />
      {weatherData && !pending && <WeatherSummary data={weatherData} />}
      {pending && !errorBox && <Loader />}
      {errorBox && <ErrorBox />}
    </section>
  );
};

export default WeatherBox;
