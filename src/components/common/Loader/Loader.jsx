import { color } from 'styles/colors';
import { Backdrop } from './Loader.styled';
import { MutatingDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Backdrop>
      <MutatingDots
        height="100"
        width="100"
        color={color.primary.brue}
        secondaryColor={color.primary.brue}
        radius="12.5"
        ariaLabel="mutating-dots-loading"
      />
    </Backdrop>
  );
};

export default Loader;
