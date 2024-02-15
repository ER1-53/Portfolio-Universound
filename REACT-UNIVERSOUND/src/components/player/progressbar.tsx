import React from "react";
import styles from './progressbar.module.css'


type ProgressBarProps = {
  progress: number;
  onChange: (value: number) => void;
  leftLabel: string;
  rightLabel: string;
};

const ProgressBar = ({
  progress,
  onChange,
  leftLabel,
  rightLabel,
}: ProgressBarProps) => {
  return (
    <div className={styles.controlTime}>
      <input
        type="range"
        min="1"
        max="100"
        value={progress}
        step="0.25"
        className={styles.slider}
        onChange={(event) => {
          if (event && event.target) {
            onChange(parseInt(event.target.value));
          }
        }}
      />
      <div className={styles.timeBarProgress}>
        <span className="text-xs">{leftLabel}</span>
        <span className="text-xs">{rightLabel}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
