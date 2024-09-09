const TemplateExpressions = () => {

    const name = "Bruno"
    const data = {
        age: 28,
        job: "Programmer"
    }

    return(
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você tem {data.age} e trabalha como {data.job}</p>
        </div>
    )
}

export default TemplateExpressions;