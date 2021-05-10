import React, {useState, useCallback, useMemo} from 'react';
import {useTable, usePagination, useRowState, useExpanded} from 'react-table';
import {Love} from '~/icons';

import {
    Table,
    TableHead,
    TableHeadCell,
    TableRow,
    TableBody,
    TableBodyCell, Dropdown
} from '~/components';

import {Typography} from '~/components/Typography';
import {SubRows, SubRowAsync} from './SubComponents';

// Real jContent data for digitall site
import cols from './columns.json';
import rs from './data.json';

import './JContentTable.scss';

// Adapt columns and rows so that react-table can understand it
const adaptedColumns = cols.map(c => {
    return {
        Header: c.label.substring(c.label.lastIndexOf('.') + 1),
        accessor: c.id
    }
});

const adaptedRows = rs.map(r => ({
    ...r,
    name: r.displayName,
    type: r.primaryNodeType.displayName,
    createdBy: r.createdBy.value,
    lastModified: r.lastModified.value
}));

// This type of implementation (with useEffect on pageIndex) will update page before data load
const Pagination = ({table}) => (
    <div>
    <button onClick={() => table.gotoPage(0)} disabled={!table.canPreviousPage}>
        {'<<'}
    </button>{' '}
    <button onClick={() => table.previousPage()} disabled={!table.canPreviousPage}>
        {'<'}
    </button>{' '}
        {table.state.pageIndex + 1}{' '}
    <button onClick={() => table.nextPage()} disabled={!table.canNextPage}>
        {'>'}
    </button>{' '}
    <button onClick={() => table.gotoPage(table.pageCount - 1)} disabled={!table.canNextPage}>
        {'>>'}
    </button>
        Total: {table.pageCount}
    </div>
);

const PaginationSupport = {
    Component: Pagination,
    plugin: usePagination,
    // note I'm overriding initialState
    optionsMaker: (options, vars) => ({...options, initialState: {...options.initialState, pageIndex: 0}, manualPagination: true, pageCount: vars.pageCount}),
    // Not a fan of how effect is used to fetch data, can't they use an onclick or something to avoid second render? There is no onclick :(
    effect: (table, pagination) => {
        React.useEffect(() => {
            console.log(table)
            pagination.fetch(table.state.pageIndex);
        }, [table.state.pageIndex])
    }
};


const useSupport = (pagination) => {
    const supports = [];

    if (pagination) supports.push(PaginationSupport);

    return supports;
};

const JContentTable = ({columns, data, pagination, cellReplacement, subRowsGetter}) => {
    const support = useSupport(pagination);

    const table = useTable(
        support.reduce((acc, val) => (val.optionsMaker(acc, pagination)), {data, columns}),
        useExpanded, // Must be before pagination
        ...support.reduce((acc, val) => {acc.push(val.plugin); return acc}, []),
        useRowState
    );

    support.forEach(s => s.effect(table, pagination));

    console.log(table)
    return (
        <>
            <Table {...table.getTableProps()}>
                <TableHead>
                    {table.headerGroups.map(headerGroup => (
                        <TableRow key={'headerGroup' + headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <TableHeadCell key={column.id} {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </TableHeadCell>
                            ))}
                        </TableRow>
                    ))}
                </TableHead>
                <TableBody {...table.getTableBodyProps()}>
                    {table.rows.map(row => {
                        table.prepareRow(row);
                        const rowProps = row.getRowProps();
                        const visibleColumns = table.visibleColumns;
                        console.log(row);
                        return (
                            // This rerenders all the rows :(
                            // <TableRow key={'row' + row.id} {...row.getRowProps()} onMouseEnter={() => table.setRowState(row.id, {over: true})} onMouseLeave={() => table.setRowState(row.id, {over: false})}>
                            <>
                                <TableRow key={'row' + row.id} {...rowProps} className="tableRow">
                                        {row.cells.map((cell, index) => {
                                            const replaceCell = cellReplacement && cellReplacement.targetColumnId === cell.column.id;
                                            return (
                                                // tslint:disable-next-line
                                                <TableBodyCell key={row.id + index}{...cell.getCellProps()}>
                                                    <Typography className={replaceCell ? 'tableCell' : ''}>{cell.render('Cell')}</Typography>
                                                    {replaceCell && <div className="replacementCell"><cellReplacement.component/></div>}
                                                </TableBodyCell>
                                            )
                                        })}
                                </TableRow>
                                 {row.isExpanded && subRowsGetter({ row, rowProps, visibleColumns, table })}
                            </>
                        );
                    })}
                </TableBody>
            </Table>
            {pagination && <Pagination table={table}/>}
        </>
    );
};


export const TableComponent = () => {
    const [data, setData] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    // For expander
    adaptedColumns[0] = {
        ...adaptedColumns[0],
        Header: () => null,
        Cell: ({ row }) => (
            <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? "Expanded" : "Collapsed"}
          </span>
        ),
        SubCell: ({ row }) => (
            <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? "Expanded" : "Collapsed"}
          </span>
        )
    };

    const renderRowSubComponent = React.useCallback(
        ({ row, rowProps, visibleColumns, table }) => (
            <SubRowAsync
                row={row}
                rowProps={rowProps}
                visibleColumns={visibleColumns}
                getter={() => adaptedRows.slice(10, 15)}
                table={table}
            />
        ),
        []
    );

    return <JContentTable columns={adaptedColumns}
                          data={data}
                          pagination={{
                              pageCount: pageCount,
                              fetch: pageIndex => {
                                  const pageSize = 5;
                                  setTimeout(() => {
                                          const startRow = pageSize * pageIndex;
                                          const endRow = startRow + pageSize;
                                          setData(adaptedRows.slice(startRow, endRow));
                                          setPageCount(Math.ceil(adaptedRows.length / pageSize));
                                  }, 1000)
                              }
                          }}
                          cellReplacement={{
                              targetColumnId: 'lastModified',
                              component: () => <Dropdown
                                  icon={<Love/>}
                                  label={ddData[5].label}
                                  value={ddData[5].value}
                                  data={ddData}
                                  onChange={(e, item) => console.log('Change is coming...')}
                              />
                          }}
                          subRowsGetter={renderRowSubComponent}
    />
};

TableComponent.storyName = 'jContent table example';

export default {
    title: 'AAA/Table',
    component: Table,
    parameters: {
        knobs: {disable: true},
        storysource: {disable: true},
        actions: {argTypesRegex: '^on.*'}
    }
};

const ddData = [
    {
        label: 'option 1',
        value: '1'
    },
    {
        label: 'option 2',
        value: '2'
    },
    {
        label: 'option 3 with very long long label label label label label label label label',
        value: '3'
    },
    {
        label: 'option 4',
        value: '4',
        isDisabled: true
    },
    {
        label: 'option 5',
        value: '5'
    },
    {
        label: 'option 6',
        value: '6'
    },
    {
        label: 'option 7',
        value: '7'
    },
    {
        label: 'option 8',
        value: '8'
    },
    {
        label: 'option 9',
        value: '9'
    },
    {
        label: 'option 10',
        value: '10'
    },
    {
        label: 'option 11',
        value: '11'
    }
];
