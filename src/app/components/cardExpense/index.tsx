import { Container } from "./styled"

export const CardExpense = ()=>{
    return(
        <Container>
            <div className="info-card">
                <h3>Titulo: internet</h3>
                <h3>Valor: 10000</h3>
                <h3>Data: 00/00/0000</h3>
            </div>
            <div className="btns">
                <button 
                    type="button"
                    className="btn-update"
                >Alterar</button>
                <button 
                    type="button"
                    className="btn-delete"
                >Excluir</button>
            </div>
        </Container>
    )
}