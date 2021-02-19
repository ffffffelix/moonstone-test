import React, {useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './SecondaryNav.scss';
import {ResizableBox} from '~/components/ResizableBox';
import ChevronDoubleRight from '~/icons/ChevronDoubleRight';
import ChevronDoubleLeft from '~/icons/ChevronDoubleLeft';

export const SecondaryNav = ({header, children, isDefaultVisible, onToggled, className, ...props}) => {
    const [isVisible, setIsVisible] = useState(isDefaultVisible);

    const handleToggle = e => {
        setIsVisible(prevState => !prevState);
        onToggled(e);
    };

    return (
        <ResizableBox
            className={
                clsx(
                    className,
                    'flexFluid',
                    'flexCol_nowrap',
                    'moonstone-secondaryNav',
                    isVisible ? null : 'moonstone-secondaryNav_hidden'
                )
            }
            enable={['right']}
            size={isVisible ? null : {height: '0%', width: 0}}
            minWidth={isVisible ? 245 : 0}
            maxWidth="900"
            defaultSize={{
                height: '0%',
                width: '245px'
            }}
            {...props}
        >
            <button type="button"
                    className={clsx('moonstone-secondaryNav_buttonToggle')}
                    onClick={handleToggle}
            >
                {isVisible &&
                    <ChevronDoubleLeft/>}
                {!isVisible &&
                    <ChevronDoubleRight/>}
            </button>

            <div className={clsx('moonstone-secondaryNav_wrapper', 'flexFluid', 'flexCol_nowrap')}>
                {header}
                <div className={clsx('flexFluid', 'flexCol_nowrap')}>
                    {children}
                </div>
            </div>
        </ResizableBox>
    );
};

SecondaryNav.defaultProps = {
    isDefaultVisible: true,
    onToggled: () => {}
};

SecondaryNav.propTypes = {
    /**
     * Is visible or hidden by default
     */
    isDefaultVisible: PropTypes.bool,

    /**
     * Header of the secondary navigation
     */
    header: PropTypes.node.isRequired,

    /**
     * Content of the component
     */
    children: PropTypes.node.isRequired,

    /**
     * Additional classname
     */
    className: PropTypes.string,

    /**
     * Triggered when the visibility is toggled
     */
    onToggled: PropTypes.func
};

SecondaryNav.displayName = 'SecondaryNav';
