import Formulario from "../../components/Form/Formulario.jsx"
import ToDo from "../../components/TaskComponentes/ToDO/ToDo.jsx"

function Task (){

    const tarefas = [
        'Limpar a casa',
        'Estudar'
    ]
    return( 
        <>
        <h2>Tarefas</h2>
        <ToDo tarefas={tarefas}/>
        <Formulario/>
        </>
    )
}

export default Task