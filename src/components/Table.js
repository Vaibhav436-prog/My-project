import React from 'react'
import Navbar from './Navbar'

function Table() {
  return (
    <>
    <Navbar/>
    <table class="table table-dark table-striped my-4">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>joey</td>
      <td>Thornton</td>
      <td>@slim</td>
    </tr>
  </tbody>
</table>
    </>
  )
}

export default Table