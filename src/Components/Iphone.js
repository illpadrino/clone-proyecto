const Iphone = () =>{

    const diccionario = ['a', 'e', 'i', 'o', 'u']
    const evento = (e) =>{
        let valor = e.key;
        if(diccionario.includes(valor) ){
            e.preventDefault()
            console.log('error');
        }
    }

    return(
        <>
        <h3>Iphone</h3>
        <input onKeyDown={evento} type = 'text'></input>
        </>
        
    )
}

export default Iphone;