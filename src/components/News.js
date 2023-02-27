import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";


function News(props) {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [result, setResult] = useState(0);
    const [loading, setLoading] = useState(true);
    document.title = `${props.category} -OneNews `;

    useEffect(() => {
        updateNews()
        /* eslint-disable */
    }, []);
    const fetchMoreData = async () => {

        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=add07e906b1a43edb7a2d6312fb66fd7&page=${page + 1}&pageSize=${props.pageSize}`;
        let data = await fetch(url);

        let parsedData = await data.json()

        console.log(parsedData);

        setArticles(
            articles.concat(parsedData.articles)
        )
        setResult(parsedData.totalResults)
        setPage(page + 1);
    }
    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=add07e906b1a43edb7a2d6312fb66fd7&page=${page}&pageSize=${props.pageSize}`;
        // setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(50);

        setLoading(false);
        console.log(parsedData.articles);
        setArticles(
            parsedData.articles,
        )
        setResult(parsedData.totalResults)
        console.log(page);
        props.setProgress(100);
    }

    // const handleprevCLick = () => {

    //     // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=92622e4af76141cb9e8052be88f84875&page=${page}&pageSize=${props.pageSize}`;
    //     // setLoading(true);
    //     // let data = await fetch(url);
    //     // let parsedData = await data.json()
    //     // setLoading(false);
    //     // //console.log(parsedData.articles);
    //     // setArticles(
    //     //     parsedData.articles,
    //     // )
    //     setPage(page - 1);
    //     updateNews();
    // }
    // const handlenextCLick = () => {
    //     setPage(page + 1);
    //     updateNews();
    //     // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=92622e4af76141cb9e8052be88f84875&page=${page}&pageSize=${props.pageSize}`;
    //     // setLoading(true);
    //     // let data = await fetch(url);
    //     // let parsedData = await data.json()
    //     // setLoading(false);
    //     // //console.log(url);
    //     // setArticles(
    //     //     parsedData.articles,
    //     // )


    // }
    return (
        <div className='container my-3'>
            <h2 className='text-center my-3'>OneNews-Top Headlines </h2>
            {/* {loading && <h1 className='text-center'>Loading...</h1>} */}
            {/* <div className="container d-flex justify-content-between">
                <button type="button" disabled={page === 1} className="btn btn-dark" onClick={handleprevCLick}>&larr; Prev</button>
                <button type="button" disabled={page + 1 > result / 20} className="btn btn-dark" onClick={handlenextCLick}>Next &rarr;</button>
            </div> */}
            {loading && <h4 className='text-center my-3'>Loading...</h4>}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== result}

                loader={loading && <h4 className='text-center my-3'>Loading...</h4>} >
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col md-3 my-3" key={element.url}>
                                <NewsItem title={element.title} description={element.description} url={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
            {/* <div className="container d-flex justify-content-between">
                <button type="button" disabled={page === 1} className="btn btn-dark" onClick={handleprevCLick}>&larr; Prev</button>
                <button type="button" disabled={page + 1 > result / props.pageSize} className="btn btn-dark" onClick={handlenextCLick}>Next &rarr;</button>
            </div> */}

        </div>
    )
}

export default News
