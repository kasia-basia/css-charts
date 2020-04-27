import React from "react";
import styles from "./styles.module.scss";

const calculateLabelPosition = (val) => (val <= 11 ? val - 1 : val - 13);

const Grid = ({ grid }) => {
  const max = grid[grid.length - 1];
  return (
    <>
      {grid.map((val) => {
        const margin = (val * 100) / max;
        return <div key={`grid_${val}`} style={{ left: `${margin}%` }} className={styles.gridLine} />;
      })}
    </>
  );
};

const MetricsTable = ({ data, target, grid = [0, 20, 40, 60] }) => {
  const max = grid[grid.length - 1];
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.row} ${styles.header}`}>
        <div className={styles.legend}>
          <div className={styles.name}>Name</div>
          <div className={styles.barWrapper}>Customer satisfaction</div>
          <div className={styles.scatterWrapper}>Items purchased</div>
        </div>
        <div className={styles.axis}>
          <div className={styles.name}></div>
          <div className={styles.barWrapper}>
            <span style={{ left: `${target}%` }}>{target}%</span>
          </div>
          <div className={styles.scatterWrapper}>
            {grid.map((val) => {
              const margin = (val * 100) / max;
              return <span style={{ left: `${margin}%` }}>{val}</span>;
            })}
          </div>
        </div>
      </div>

      {data.map(({ name, value1, value2 }) => {
        const dotMargin = (value2 * 100) / max;
        return (
          <div className={styles.row} key={name}>
            <div className={styles.name}>{name}</div>
            <div className={styles.barWrapper}>
              <div className={styles.label} style={{ left: `${calculateLabelPosition(value1)}%` }}>
                {value1}%
              </div>
              <div className={styles.bar} style={{ width: `${value1}%` }} />
              <div className={styles.target} style={{ left: `${target}%` }} />
            </div>
            <div className={styles.scatterWrapper}>
              <div className={styles.dot} style={{ left: `${dotMargin}%` }} />
              <Grid grid={grid} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MetricsTable;
