import * as React from 'react';
import {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  color?: 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'gray';
  className?: string;
}

const SvgCrown = ({
    size = 'default',
    className = '',
    color,
    ...otherProps
}: IconProps) => {
    const props = Object.assign(
        {},
        {
            size,
            className,
            ...otherProps
        }
    );
    const classNameColor = color ? ' moonstone-icon_' + color : '';
    props.className =
    className + ' moonstone-icon moonstone-icon_' + size + classNameColor;
    return (
        <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
        >
            <path d="M12.3935 7.03736C12.8129 6.88686 13.1111 6.50274 13.1111 6.05263C13.1111 5.47128 12.6136 5 12 5C11.3864 5 10.8889 5.47128 10.8889 6.05263C10.8889 6.51482 11.2033 6.90743 11.6406 7.04897C11.0435 8.57485 9.76632 11.3158 8.2963 11.3158C6.8183 11.3158 4.95035 9.65335 4.0364 8.74088C4.1538 8.57397 4.22222 8.3735 4.22222 8.15789C4.22222 7.57654 3.72476 7.10526 3.11111 7.10526C2.49746 7.10526 2 7.57654 2 8.15789C2 8.73925 2.49746 9.21053 3.11111 9.21053C3.15467 9.21053 3.19765 9.20815 3.2399 9.20353C3.53252 10.7869 4.22222 14.5481 4.22222 14.8246C4.22222 15.0335 4.35352 15.118 4.45977 15.1522C4.501 15.1672 4.54578 15.1754 4.59259 15.1754H19.4074C19.4542 15.1754 19.499 15.1672 19.5402 15.1522C19.6465 15.118 19.7778 15.0335 19.7778 14.8246C19.7778 14.5481 20.4675 10.7869 20.7601 9.20353C20.8024 9.20815 20.8453 9.21053 20.8889 9.21053C21.5025 9.21053 22 8.73925 22 8.15789C22 7.57654 21.5025 7.10526 20.8889 7.10526C20.2752 7.10526 19.7778 7.57654 19.7778 8.15789C19.7778 8.40075 19.8646 8.6244 20.0104 8.80251C19.2274 9.7261 17.6508 11.3158 16.0741 11.3158C14.4663 11.3158 13.0525 8.5609 12.3935 7.03736Z"/>
            <path d="M4.59259 16.2281C4.38804 16.2281 4.22222 16.3852 4.22222 16.5789V17.9825C4.22222 18.1762 4.38804 18.3333 4.59259 18.3333H19.4074C19.612 18.3333 19.7778 18.1762 19.7778 17.9825V16.5789C19.7778 16.3852 19.612 16.2281 19.4074 16.2281H4.59259Z"/>
        </svg>
    );
};

export default SvgCrown;
