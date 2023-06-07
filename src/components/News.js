import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
// import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"

const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  //  document.title = `${capitalizeFirstLetter(props.category)} - NewsJunk`;

//capitaize first letter
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   articles: [],
  //   //   loading: false,
  //   //   page: 1,
  //   //   totalResults: 0
  //   // }
  // }


//setting up news articles with progress bar.. loading gif
  
const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    props.setProgress(50);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }

  //load once when page loads
  useEffect(() => {
    updateNews();
    // eslint-disable-next-line  
  }, [])

  // async componentDidMount() {
  // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3625dc96f44b42e0b8a2384bcdac2ea3&page=1&pageSize=${props.pageSize}`;
  // this.setState({ loading: true });
  // let data = await fetch(url);
  // let parsedData = await data.json();
  // // console.log(parsedData);
  // this.setState({
  //   articles: parsedData.articles,
  //   totalResults: parsedData.totalResults,
  //   loading: false
  // });
  //   this.updateNews();
  // }

  // handlePreviousClick = async () => {
  //   console.log("previous");
  //   updateNews();  
  //   setPage(page-1);

  // }

  // handleNextClick = async () => {
  //   console.log("Next");
  //   updateNews();  
  //   setPage(page+1)
  // }

  //load more data for single page
  const fetchMoreData = async () => {

    // console.log(page);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1)
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData)
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(false);
  };



  return (
    <>
      <h1 className='text-center' style={{ margin: '30px 0', marginTop: '90px', color: props.mode === 'light' ? 'black' : 'white' }} >NewsJunk - Top Headlines from {capitalizeFirstLetter(props.category)} </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        loader={<Spinner />}
        hasMore={articles.length !== totalResults}>

        <div className='container' style={{ color: props.mode === 'light' ? 'black' : 'white' }} >
          <div className='row' >
            {articles.map((element) => {
              return <div className='col-md-4' key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 60) : ""} description={element.description ? element.description.slice(0, 50) : ""}
                  imageUrl={element.urlToImage ? element.urlToImage : "https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-760x400.webp"} newsUrl={element.url}
                  author={element.author ? element.author : "Unknown Sources"}
                  date={element.publishedAt}
                  source={element.source.name} />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  )

  // News.defaultProps = {
  //   country: 'in',
  //   pageSize: 8,
  //   category: 'general'
  // }

  // News.propTypes = {
  //   country: PropTypes.string,
  //   pageSize: PropTypes.number,
  //   category: PropTypes.string,
  // }
}

export default News;
