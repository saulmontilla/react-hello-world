import React from 'react'

const PropsExample = props => {
    return (
        <div>
            <p>El nombre es {props.name} y su apellido {props.lastName}</p>
            {props.children}
        </div>
    )
}

export default PropsExample