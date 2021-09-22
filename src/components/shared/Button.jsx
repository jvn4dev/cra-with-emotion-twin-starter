/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types'; // ES6
import tw, { css, theme } from 'twin.macro';

const Button = ({ children, onClick, variant, isSmall }) => (
  <button
    type="submit"
    onClick={onClick}
    css={[
      tw`px-8 py-2 rounded focus:outline-none transform duration-75`,
      tw`hocus:(scale-105 text-yellow-400)`,
      variant === 'primary' && tw`bg-black text-white border-black`, // ! 조건부 css 작성
      variant === 'secondary' && [
        css`
          box-shadow: 0 0.1em 0 0 rgba(0, 0, 0, 0.25); // ! 커스텀 css 작성
        `,
        tw`border-2 border-yellow-600`,
      ],
      isSmall ? tw`text-sm` : tw`text-lg`,
      tw`animate-wiggle`,
      css`
        color: ${theme`colors.white`}; // ! 커스텀 css + theme
      `,
    ]}>
    {children}
  </button>
);

Button.defaultProps = {
  variant: 'primary',
  isSmall: false,
  onClick: () => null,
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  isSmall: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
