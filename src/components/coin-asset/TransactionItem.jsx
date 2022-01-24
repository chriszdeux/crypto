import React from 'react'
import { icons } from '../../utils/icons/icons_object'

export const TransactionItem = ({ item }) => {
  // debugger
  const { date:{ month, day }, transaction_type, name, amount_asset, amount_bought, symbol } = item
  return (
    <li className="pd mg--b">
      <h3 className="transaction--date">{ month }<span>{ day }</span></h3>
      { icons.change_horizontal_icon }
      <h3 className="transaction--completed">{ transaction_type } { name } <span>Completed</span></h3>
      <h3 className="asset--amount">+{ amount_asset }{ symbol } <span>+${ amount_bought }</span></h3>
    </li>
  )
}
