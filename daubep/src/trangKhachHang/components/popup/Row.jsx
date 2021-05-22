import {useState} from 'react'
import styled from 'styled-components'

const Cell = styled.td`
    display: flex;
    justify-content: space-between;
    & span {
        padding: 0.2rem 0.4rem;
        background: #CCC;
        border-radius: 0.2rem;
    }
`

const Row = () => {
    const [amount, setAmount] = useState(1)
    return (
        <tr>
            <td style={{width: "50%"}}>Banh xeo viet nam</td>
            <Cell style={{width: "25%"}}>
                <span onClick={() => setAmount(amount - 1)}>-</span>
                {amount}
                <span onClick={() => setAmount(amount + 1)}>+</span>
            </Cell>
            <td>{100000 * amount} vnd</td>
        </tr>
    )
}

export default Row