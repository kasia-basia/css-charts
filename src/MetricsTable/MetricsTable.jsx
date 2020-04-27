import React from "react";
import styles from "./styles.module.scss";

const MetricsTable = ({ data }) => (
  <div className={styles.wrapper}>
    {data.map(({ name, value }) => (
      <div className={styles.row}>
        <div className={styles.name}>{name}</div>
        <div className={styles.barWrapper}>
          <div className={styles.bar} style={{ width: `${value}%` }} />
          <div className={styles.label}>{value}%</div>
        </div>
      </div>
    ))}
  </div>
);

export default MetricsTable;
