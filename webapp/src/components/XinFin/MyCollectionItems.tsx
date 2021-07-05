import React from 'react'
import { Table } from 'decentraland-ui'
interface IProps {}
const MyCollectionItems: React.FC<IProps> = props => {
  const [collectionItems, setCollectionItems] = React.useState([
    {
      name: 'test',
      price: '$22.30',
      from: '1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2. P2SH',
      to: 'dg5vBMSEYstWetqTFn5Au4m3d3g7xJaNVN2. P2SH',
      date: 'Today (1hr ago)'
    }
  ])
  return (
    <div>
      <Table basic="very">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Item Name</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>From</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {collectionItems.map((item, index) => {
            return (
              <Table.Row key={index}>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.price}</Table.Cell>
                <Table.Cell>{item.from}</Table.Cell>
                <Table.Cell>{item.to}</Table.Cell>
                <Table.Cell>{item.date}</Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
    </div>
  )
}
export default MyCollectionItems
