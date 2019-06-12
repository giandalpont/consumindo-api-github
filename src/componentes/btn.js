import React from 'react'

const Btn = ({ btnName , link })=>(
    <a href={ link } target="_blank" rel="noopener noreferrer" >
        <div className="btn btn-primery">
            { btnName }
        </div>
    </a>
)

export default Btn