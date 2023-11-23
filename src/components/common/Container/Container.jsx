import { Box } from './Container.styled';
import { PropTypes } from 'prop-types';

const Container = ({ children }) => {
  return <Box>{children}</Box>;
};

export default Container;

Container.propTypes = {
  children: PropTypes.object,
};
