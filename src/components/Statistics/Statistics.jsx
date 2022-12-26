import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css'

const Statistics = ({title, stats}) =>(
    <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}

    <ul className={styles.stat_list}>
      {stats.map(({id, label, percentage}) => {
        return(
        <li className={styles.item} 
        key={id}
        style={{ backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}` }}>
          <span className={styles.label}>{label}</span>
          <span className={styles.percentage}>{percentage}%</span>
        </li>)
      })}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
export default Statistics;
