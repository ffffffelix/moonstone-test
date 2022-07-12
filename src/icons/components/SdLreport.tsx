import * as React from 'react';
import {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  color?: 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'gray';
  className?: string;
}

const SvgSdLreport = ({
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
            <path d="M12 9.5C11.9307 9.5 11.8625 9.49532 11.7957 9.48625L9.16086 14.0498C9.21166 14.1118 9.2582 14.1786 9.29977 14.2502C9.33721 14.3154 9.36924 14.3821 9.39599 14.45H14.6039C14.6307 14.3821 14.6626 14.3153 14.7 14.2502C14.7424 14.1765 14.7901 14.1078 14.8423 14.0442L12.2102 9.48544C12.1415 9.49504 12.0714 9.5 12 9.5Z"/>
            <path d="M13.2213 16.1281L14.3958 15.45H9.75188L10.8234 16.0687C11.0979 15.722 11.5226 15.5 12 15.5C12.5041 15.5 12.9495 15.7476 13.2213 16.1281Z"/>
            <path d="M14.7002 10.7498C14.5497 10.4879 14.4867 10.1997 14.5023 9.91904L13.1799 9.15552L15.5 13.174V11.4143C15.1738 11.2996 14.8858 11.0725 14.7002 10.7498Z"/>
            <path d="M9.29977 10.7498C9.0955 11.1051 8.76689 11.3446 8.40004 11.4457V13.3749L10.8771 9.08457L9.49521 9.88245C9.5186 10.1746 9.45685 10.4765 9.29977 10.7498Z"/>
            <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5067 4.8H18.2222C19.2 4.8 20 5.61 20 6.6V19.2C20 20.19 19.2 21 18.2222 21H5.77778C4.8 21 4 20.19 4 19.2V6.6C4 5.61 4.8 4.8 5.77778 4.8H9.49333C9.86667 3.756 10.8444 3 12 3C13.1556 3 14.1333 3.756 14.5067 4.8ZM13.5 8C13.5 8.06061 13.4964 8.12038 13.4895 8.17909L14.892 8.98886C14.9933 8.87769 15.1131 8.77986 15.2502 8.70023C15.9678 8.28774 16.883 8.53266 17.2998 9.25022C17.7123 9.96777 17.4673 10.883 16.7498 11.2998C16.6688 11.3463 16.5852 11.3845 16.5 11.4146V13.5861C16.5844 13.616 16.6673 13.654 16.7477 13.7002C17.4688 14.117 17.7135 15.0322 17.2971 15.7498C16.885 16.4673 15.9664 16.7123 15.2495 16.2998C15.1958 16.2689 15.1448 16.2351 15.0965 16.1989L13.495 17.1235C13.432 17.8915 12.7877 18.5 12 18.5C11.1837 18.5 10.5214 17.8507 10.5005 17.0396L8.96188 16.1512C8.89664 16.2058 8.82587 16.2556 8.74978 16.2998C8.02793 16.7123 7.11272 16.4673 6.70023 15.7498C6.28774 15.0322 6.53266 14.117 7.25022 13.7002C7.29931 13.672 7.34932 13.6469 7.40004 13.6247V11.3752C7.34931 11.3531 7.29929 11.328 7.25022 11.2998C6.53266 10.8873 6.28774 9.96777 6.70023 9.25022C7.11272 8.53266 8.03223 8.28774 8.74978 8.70023C8.87517 8.77306 8.98612 8.86111 9.08166 8.96066L10.5063 8.13814C10.5021 8.09266 10.5 8.04658 10.5 8C10.5 7.17049 11.1705 6.5 12 6.5C12.8295 6.5 13.5 7.17049 13.5 8Z"
      />
        </svg>
    );
};

export default SvgSdLreport;
