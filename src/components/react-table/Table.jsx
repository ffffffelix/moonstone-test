import React from 'react';
import {useTable, useRowSelect, useSortBy, useExpanded, usePagination} from 'react-table';
import './Table.scss';
import mockData from './tableData';
import {SortIndicator} from './SortIndicator';
import {IndeterminateCheckbox} from './IndeterminateCheckbox';
import {Button} from '~/components';
import {ChevronDoubleLeft, ChevronDoubleRight, ChevronLeft, ChevronRight} from '~/icons';

/* eslint-disable */

export const Table = () => {
    const data = React.useMemo(() => mockData, []);

    const columns = React.useMemo(
        () => [
            {
                id: 'selection',
                Header: ({getToggleAllRowsSelectedProps}) => (
                    <div>
                        <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()}/>
                    </div>
                ),
                Cell: ({row}) => (
                    <div className="alignCenter">
                        <IndeterminateCheckbox {...row.getToggleRowSelectedProps()}/>
                    </div>
                )
            },
            {
                // Header: ({getToggleAllRowsExpandedProps, isAllRowsExpanded}) => (
                //     <>
                //         <span {...getToggleAllRowsExpandedProps()}>
                //             {isAllRowsExpanded ? '👇 ' : '👉 '}
                //         </span>
                //         <span>Name</span>
                //     </>
                // ),
                Header: 'Name',
                accessor: 'name',
                Cell: ({row}) => {
                    if (row.canExpand) {
                        return (
                            <span {...row.getToggleRowExpandedProps({style: {paddingLeft: `${row.depth * 2}rem`}})}>
                                {row.isExpanded ? '👇 ' : '👉 '}
                                {row.values.name}
                            </span>
                        );
                    }
                    return (
                        <span style={{paddingLeft: `${row.depth * 2}rem`}}>
                            {row.values.name}
                        </span>
                    );
                }
            },
            {
                Header: 'Type',
                accessor: 'type'
            },
            {
                Header: 'Created By',
                accessor: 'createdBy'
            },
            {
                Header: 'Last Modified On',
                accessor: 'lastModifiedOn',
                Cell: ({row}) => (
                    <div className="alignRight">{row.values.lastModifiedOn}</div>
                )
            }
        ], []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        getToggleAllRowsExpandedProps,
        isAllRowsExpanded,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: {pageIndex, pageSize}
    } = useTable(
        {columns, data},
        useSortBy,
        useExpanded,
        usePagination,
        useRowSelect
    );

    return (
        <>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()} key={column.id}>
                                        <div>
                                            {column.id === 'name'
                                                ? <span {...getToggleAllRowsExpandedProps()}>{isAllRowsExpanded ? '👇 ' : '👉 '}</span>
                                                : null}
                                            <span {...column.getSortByToggleProps()}>
                                                {column.render('Header')}
                                                <SortIndicator isSorted={column.isSorted} isSortedDesc={column.isSortedDesc}/>
                                            </span>                                        
                                        </div>
                                    </th>
                                ))
                            }
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} key={row.id}>
                                {row.cells.map(cell => (
                                    <td {...cell.getCellProps()} key={Math.random()}>
                                        {cell.render('Cell')}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="pagination">
                <Button
                    className="pagination_button"
                    onClick={() => gotoPage(0)}
                    disabled={!canPreviousPage}
                    icon={<ChevronDoubleLeft/>}
                />
                <Button
                    className="pagination_button"
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                    icon={<ChevronLeft/>}
                />
                <span className="pagination_pageDisplay">
                    Page {pageIndex + 1} of {pageOptions.length}
                </span>
                <Button
                    className="pagination_button"
                    onClick={() => nextPage()}
                    disabled={!canNextPage}
                    icon={<ChevronRight/>}
                />
                <Button
                    className="pagination_button"
                    onClick={() => gotoPage(pageCount - 1)}
                    disabled={!canNextPage}
                    icon={<ChevronDoubleRight/>}
                />
            </div>
        </>
    );
};
