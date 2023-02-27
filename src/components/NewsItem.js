import React from 'react'
//apikey:add07e906b1a43edb7a2d6312fb66fd7
//apikey:92622e4af76141cb9e8052be88f84875
function NewsItem(props) {
    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <img src={props.url} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text"><small className="text-muted">By {!props.author ? "Unknown" : props.author} on  {new Date(props.date).toGMTString()}</small></p>
                    <a href={props.newsurl} target="_blank" rel='noreferrer' className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
