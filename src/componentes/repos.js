import React from 'react'

const Repos = ({ className, title, repos })=>(
    <div className={className}>
        <h3>{title}</h3>
        <hr />
        <div className="">
            {repos.map((repo, i)=>(
                <div key={i}>
                    <a href={repo.link}>{repo.name}</a>
                </div>
            ))}
        </div>
    </div>
)

export default Repos