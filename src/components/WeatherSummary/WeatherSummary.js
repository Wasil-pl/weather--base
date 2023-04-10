import styles from './WeatherSummary.module.scss';
import PropTypes from 'prop-types';

const WeatherSummary = ({ data }) => {
  return (
    <section className={styles.weatherSummary}>
      <img
        className={styles.weatherIcon}
        alt={data.description}
        src={`${process.env.PUBLIC_URL}/images/weather-icons/${data.icon}.png`}
      />
      <div className={styles.weatherInfo}>
        <h2>{data.city}</h2>
        <p>
          <strong>Temp:</strong> {data.temp}°C
        </p>
      </div>
    </section>
  );
};

WeatherSummary.propTypes = {
  data: PropTypes.shape({
    city: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};

export default WeatherSummary;
