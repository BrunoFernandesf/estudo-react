import { useState } from "react"

const ManageData = () => {
    let varA = 10
    console.log(varA)

    const [number, setNumber] = useState(10)
    console.log(number)

    return(
        <div>
            <div>
                <p>O valor da variável A é {varA}</p>
                <button onClick={() => {varA = 15}}>Alterar valor A</button>
            </div>
            <div>
                <p>O valor da variável B é {number}</p>
                <button onClick={() => {setNumber(20)}}>Alterar valor B</button>
            </div>
        </div>
    )
}
export default ManageData;