import styled from 'styled-components'
import Row from './Row'
const Container = styled.div`
    & th {
        
    }
`

const Content = () => {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Dish name</th>
                        <th>Amount</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <Row/>
                    <Row/>
                    <Row/>
                    <Row/>
                    <Row/>
                </tbody>
            </table>
        </Container>
    )
}

export default Content