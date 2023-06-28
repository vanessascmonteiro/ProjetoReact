//Exercicio 02
function ToDo ({ tarefas }) { //Exercicio04
    return (
        //Exercicio 03
        <div>
            <ul>
        {/* Exercicio05 */}
        {tarefas.map(item => {
            return <li key={item}>{item}</li>
        })}
            </ul>
        </div>
    )
}

export default ToDo
