import { useLocation } from "react-router-dom"

function Empresas () {

    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)

    const vEstado = searchParams

    //Listar todos os párametros da consulta
    searchParams.forEach((value, key ) => {
        console.log(`${key} : ${value}`)
    })

    return (
        <>
        <h1>Empresas</h1>
        </>
    )
}

export default Empresas