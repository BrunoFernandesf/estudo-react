const Challenge = () => {
    var a = 2;
    var b = 5;

    const handleSoma = () => {
        return (
            console.log("A soma é igual a " + (a + b))
        )
    }

    return (
        <div>
            <p>O valor de a = {a}</p>
            <p>O valor de b = {b}</p>
            <button onClick={handleSoma}>Somar</button>
        </div>
    )
}

export default Challenge