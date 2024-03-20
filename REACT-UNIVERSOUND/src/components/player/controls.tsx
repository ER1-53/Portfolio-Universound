import playButtonIcon from '../../assets/icons/ic_play.svg';
import pauseButtonIcon from '../../assets/icons/ic_pause.svg';
import nextButtonIcon from '../../assets/icons/ic_next.svg';
import prevButtonIcon from '../../assets/icons/ic_prev.svg';
import shuffleButtonIcon from '../../assets/icons/ic_shuffle.svg';
import shuffleButtonDisabledIcon from '../../assets/icons/ic_shuffle_disabled.svg';
import repeatButtonIcon from '../../assets/icons/ic_repeat.svg';
import repeatButtonDisabledIcon from '../../assets/icons/ic_repeat_disabled.svg';
import React from 'react';
import styles from './controls.module.css'

// Interface for the Controls component props
type ControlsProps = {
  onPlayClick: () => void;
  onPrevClick: () => void;
  onNextClick: () => void;
  onRepeatClick: () => void;
  onShuffleClick: () => void;
  isPlaying: boolean;
  repeat: boolean;
  shuffle: boolean;
};

// Controls component that renders playback controls
const Controls = ({
  onPlayClick,
  isPlaying,
  onPrevClick,
  onNextClick,
  repeat,
  onRepeatClick,
  shuffle,
  onShuffleClick,
}: ControlsProps) => {
  return (
    <div className={styles.allButton}>
      <ImageButton
        src={shuffle ? shuffleButtonIcon : shuffleButtonDisabledIcon}
        onClick={onShuffleClick}
      />
      <ImageButton src={prevButtonIcon} onClick={onPrevClick} />
      <ImageButton

        src={isPlaying ? pauseButtonIcon : playButtonIcon}
        onClick={onPlayClick}
      />
      <ImageButton src={nextButtonIcon} onClick={onNextClick} />
      <ImageButton
        src={repeat ? repeatButtonIcon : repeatButtonDisabledIcon}
        onClick={onRepeatClick}
      />
    </div>
  );
};

export default Controls;

// Interface for the ImageButton component props
type ImageButtonProps = {
  src: string;
  onClick: () => void;
  className?: string;
};

// Reusable image button component
const ImageButton = ({ onClick, src, className }: ImageButtonProps) => {
  const buttonSize = 20;
  return (
    <button className={styles.button} onClick={onClick}>
      <img
        src={src}
        width={buttonSize}
        height={buttonSize}
        className={styles.iconsSize + " " +`${className ? className : ''}`}
      />
    </button>
  );
};
