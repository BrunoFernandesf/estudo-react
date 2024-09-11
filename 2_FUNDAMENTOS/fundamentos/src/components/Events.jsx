const Events = () => {
    const handleMyEvent = (e) => {

        console.log("Evento Ativado")

        console.log(e)
    }

    const renderSomething = (x) => {

        if(x){
            return (
                <h1>Eu posso renderizar isso se verdadeiro</h1>
            )
        }
        else {
            return (
                <h1>Renderizar isso se falso</h1>
            )
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui</button>
            </div>
            <div>
                <button onClick={() => {console.log("Botão Ativado!")}}>Clique aqui também</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
};
export default Events;