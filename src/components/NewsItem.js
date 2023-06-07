import React from 'react';

const NewsItem = (props) => {


    //setting up single news article
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className='my-3'>
            <div className="card" >
                <div style={{ display: 'flex', right: 0, justifyitems: 'flex-end', position: 'absolute' }}>
                    <span className="badge bg-danger" >
                        {source}
                    </span>
                </div>



                <img src={imageUrl} className="card-img-top" alt="..." />

                <div className="card-body bg-dark" style={{ color: props.mode === 'light' ? 'black' : 'white' }} >
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted"> By: {author} Date: {new Date(date).toGMTString()}</small></p>


                    <a href={newsUrl} rel="noreferrer" target='_blank' className='btn btn-sm btn-dark'>Readmore...</a>
                </div>
            </div>
        </div>
    )

}

export default NewsItem
