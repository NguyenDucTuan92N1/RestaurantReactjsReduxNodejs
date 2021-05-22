import  styled from 'styled-components'
import Content from './Content'

const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 10;
    background: rgba(0, 0, 0, 0.3);
    display: grid;
    place-items: center;
`
const Window = styled.div`
    background: white;
    width: 30%;
    height: 20rem;
    border-radius: 0.5rem;
    border: 1px solid #ccc;
`
const Title = styled.div`
    text-align: center;
    font-size: 1.2rem;
    padding: 0.5rem;
    
`
const Popup = ({setIsPopup}) => {

    return (
        <Container onClick={() => setIsPopup(false)}>
            <Window onClick={e => e.stopPropagation()}>
                <Title>Gio hang</Title>
                <Content/>
            </Window>
        </Container>
    )
}

export default Popup