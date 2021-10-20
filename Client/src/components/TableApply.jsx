import React, {useState} from 'react'

const TableApply = props => {
    const [data, setData] = useState([])

    return (
        <table className="table-auto">
        <thead className="bg-gray-200">
          <tr>
            <th>Company</th>
            <th>Applicant</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>PT Skilvul</td>
            <td>Adam</td>
            <td>Pending</td>
            <td>Accept</td>
          </tr>
          <tr>
            <td>PT. Skilvul</td>
            <td>Adam</td>
            <td>112</td>
          </tr>
          <tr>
            <td>Intro to JavaScript</td>
            <td>Chris</td>
            <td>1,280</td>
          </tr>
        </tbody>
      </table>
    )
}

export default TableApply