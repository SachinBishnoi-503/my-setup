import React from 'react'
const Footer = () => {

    const year = new Date().getFullYear()

    return (
        <div>
            <p>{year} copyright</p>
        </div>
    )
}


export default Footer