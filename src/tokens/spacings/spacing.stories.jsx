import React from 'react';
import {storiesOf} from '@storybook/react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './spacings.stories.scss';
import '~/__storybook__/storybook.scss';

export const Spacing = ({name}) => {
    return (
        <div className="storyItem">
            <p>{name}</p>
            <div className={clsx([`spacing-${name}`])}/>
        </div>
    );
};

storiesOf('Tokens/Spacings', module)
    .add('Default', () => (
        <section className="storyWrapper">
            <Spacing name="nano"/>
            <Spacing name="small"/>
            <Spacing name="medium"/>
            <Spacing name="large"/>
            <Spacing name="big"/>
            <Spacing name="huge"/>
        </section>
    ));

Spacing.propTypes = {
    name: PropTypes.string.isRequired
};
