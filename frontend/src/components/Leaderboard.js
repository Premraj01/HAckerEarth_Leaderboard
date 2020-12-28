/** @format */
import React, { Fragment, useEffect, useState, useMemo } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Table } from 'react-bootstrap'
import { getTeams } from '../actions/leaderboardActions'
import { useTable, useRowSelect } from 'react-table'
import { COLUMNS } from './colums'
import Checkbox from './Checkbox'

const Leaderboard = () => {
  const dispatch = useDispatch()

  const teamDetails = useSelector((state) => state.teamDetails)
  const { loading, error, teams } = teamDetails

  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => teams, [])

  useEffect(() => {
    dispatch(getTeams())
  }, [dispatch])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
  } = useTable(
    {
      columns,
      data,
    },
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            team_name: 'selection',

            Cell: ({ row }) => (
              <Checkbox {...row.getToggleRowSelectedProps()} />
            ),
          },
          ...columns,
        ]
      })
    }
  )

  console.log('object')

  return (
    <Fragment>
      <Table className='table table-hover' {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </Table>
      <pre>
        <code>
          {JSON.stringify(
            {
              selectedFlatRows: selectedFlatRows.map((row) => row.original),
            },
            null,
            2
          )}
        </code>
      </pre>
    </Fragment>
  )
}

export default Leaderboard
