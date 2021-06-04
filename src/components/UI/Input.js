import "./Input.css"

// const Input = (props) => {
//     return (
//         <div>
//             <label htmlFor={props.id}>Date</label>
//             <input id={props.id} type={props.type} value={props.value} onChange={props.onChange}/>
//         </div>
//     )
// }

// export default Input


const Input = (props) => {
    return (
        <div className={props.className}>
            <label htmlFor={props.input.id}>{props.labelText}</label>
            <input {...props.input}/>
   
        </div>
    )
}

export default Input;