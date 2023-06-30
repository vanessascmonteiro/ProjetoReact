import Formulario from "../../components/Form/Formulario.jsx"
import ToDo from "../../components/TaskComponentes/ToDO/ToDo.jsx"
import {useState, useEffect} from "react"

function Task (){

    const [tarefas, setTarefas] = useState ([
        'Limpar a casa',
        'Estudar'
    ])

    useEffect(() =>{
        document.title = `${tarefas.length} cadastradas.`
    })

    const novaTarefaCriada =(novaTarefa) => {
        console.log(`${novaTarefa} foi criada.`)

        setTarefas([...tarefas,novaTarefa])
    }

    const limparTarefas =() => {
        setTarefas([])
    }

    return( 
        <>
        <h2>Tarefas</h2>
        <Formulario handleSubmit={novaTarefaCriada}/>
        <ToDo tarefas={tarefas}/>

        <button onClick={limparTarefas}>LimparTarefas</button>
        </>
    )
}

export default Task