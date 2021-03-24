import React from 'react';
import {Table as TableCmp} from './index';

export default {
    title: 'Components/react-table',
    component: TableCmp
};

const Template = args => <TableCmp {...args}/>;

export const Simple = Template.bind({});
