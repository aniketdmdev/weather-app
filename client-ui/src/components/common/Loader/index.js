import React from 'react'

function Loader() {
    return (
        <div style={{ width: "100%", height:"50%" , display: "flex", justifyContent: "center", alignContent: "center" }}>
            <img src='/assets/loader.gif' alt='loader' />
        </div>
    )
}

export default Loader;
