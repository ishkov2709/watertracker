import sprite from '../../../img/sprites.svg';

const Icon = ({
  name,
  width = 24,
  height = 24,
  fill = '#ffffff00',
  stroke = '#000000',
  className = 'icon',
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
    >
      <use href={`${sprite}#${name}`}></use>
    </svg>
  );
};

export default Icon;
