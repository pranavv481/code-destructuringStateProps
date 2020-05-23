import React from 'react'

// const Greet = ({ name }) => {
//     return (
//         <div>
//             <h1>Hello {name}</h1>
//         </div>
//     )
// }



const Greet = (props) => {
    const { name } = props
    return (
        <div>
            <h1>Hello {name}</h1>
        </div>
    )
}


export default Greet
