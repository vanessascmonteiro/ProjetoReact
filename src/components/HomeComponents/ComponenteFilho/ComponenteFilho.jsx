function ComponenteFilho({callback}){
    const handleclick = () => {
        callback('Mensagem do componete filho')
    }

    return (
        <>
        <button onClick={handleclick}>Clique aqui</button>
        </>
    )
}

export default ComponenteFilho