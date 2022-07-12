import * as React from 'react';
import {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  color?: 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'gray';
  className?: string;
}

const SvgFilePdf = ({
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
            <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.875 2H5.875C4.775 2 3.875 2.9 3.875 4V20C3.875 21.1 4.765 22 5.865 22H17.875C18.975 22 19.875 21.1 19.875 20V8L13.875 2ZM17.875 20H5.875V4H12.875V9H17.875V20ZM14.5024 7.32814V5.10474L16.6084 7.32814H14.5024ZM12.3066 13.534C12.6161 13.9239 12.9589 14.3558 13.3061 14.7428L13.3061 14.7429C13.4049 14.7399 13.5004 14.7386 13.5927 14.7386C14.8775 14.7386 15.743 15.0118 16.0297 15.5083C16.1567 15.7284 16.1591 15.9764 16.0366 16.1889C15.8742 16.4702 15.5262 16.6382 15.1049 16.6382C15.0034 16.6382 14.8993 16.6285 14.7953 16.6091C14.2784 16.5137 13.7174 16.1318 13.0315 15.4074C12.862 15.4169 12.686 15.4305 12.5087 15.4477C12.1168 15.4856 11.3456 15.5853 10.5647 15.8292C10.1871 16.5094 9.4834 17.6834 8.94435 18.0359C8.73081 18.175 8.51024 18.2486 8.30632 18.2486C8.01344 18.2486 7.77754 18.0987 7.67558 17.8474C7.51001 17.4418 7.74136 16.8902 8.31061 16.3346C8.74629 15.9087 9.35336 15.5577 10.1149 15.2907C10.5149 14.5466 10.8769 13.7651 11.1366 13.0849C10.5547 12.1657 10.4555 11.0543 10.6602 10.4268C10.7975 10.0058 11.0378 9.84634 11.2154 9.78691C11.4631 9.70354 11.7266 9.76935 11.902 9.95818C12.1617 10.2373 12.2577 10.791 12.1953 11.6507C12.1707 11.9882 12.0604 12.4375 11.8677 12.9866L11.8774 12.9983C12.0092 13.1592 12.1499 13.3363 12.297 13.522L12.3066 13.534ZM8.30612 17.5957C8.37999 17.5957 8.48481 17.5561 8.58677 17.4895L8.58678 17.4895C8.80345 17.348 9.16734 16.8828 9.57179 16.2321C9.25121 16.4009 8.98056 16.592 8.76649 16.8011C8.31067 17.2464 8.26437 17.5278 8.27725 17.5929C8.28258 17.5943 8.29207 17.5957 8.30612 17.5957ZM11.4235 10.4057C11.3868 10.4179 11.3279 10.4837 11.2803 10.6294L11.2803 10.6294C11.149 11.0316 11.2089 11.6547 11.4267 12.2154C11.4933 11.9715 11.5328 11.7663 11.5445 11.6039C11.612 10.6728 11.4613 10.4448 11.4259 10.4049C11.4255 10.4051 11.4251 10.4052 11.4246 10.4054C11.4243 10.4055 11.4239 10.4056 11.4235 10.4057ZM10.98 15.0401C11.5699 14.9006 12.0987 14.8318 12.4458 14.7984L12.4872 14.7946C12.239 14.4996 11.9995 14.1977 11.7863 13.9289L11.7854 13.9278C11.7217 13.847 11.6589 13.7682 11.5975 13.6914C11.4206 14.1204 11.2088 14.5834 10.98 15.0401ZM15.4711 15.8626C15.4735 15.8582 15.4738 15.8514 15.464 15.8346L15.464 15.8346C15.3818 15.6927 14.9715 15.448 13.956 15.3995C14.3302 15.7312 14.6442 15.9174 14.9134 15.9672C14.9796 15.9795 15.0437 15.9856 15.1039 15.9856C15.3197 15.9856 15.4436 15.9102 15.4711 15.8626Z"
      />
        </svg>
    );
};

export default SvgFilePdf;
