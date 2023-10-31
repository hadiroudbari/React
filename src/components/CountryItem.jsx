import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <img src={country.emoji} alt={country.country} />
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
