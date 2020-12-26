import React, { useState } from 'react';
import './News.css';
import axios from 'axios';
import Card from '../Card/Card';
// 3c19ca91db734ccfbb98eff3e3305920


function News() {

    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    
    const getNews = (e) => {
        e.preventDefault();
        console.log(search)
        let url = "http://newsapi.org/v2/everything?q=" + search + "&from=2020-11-25&sortBy=publishedAt&apiKey=3c19ca91db734ccfbb98eff3e3305920";
        
        console.log(url)
        axios.get(url)
            .then((data) => {
                setData(data.data.articles)
            })
            .catch((err) => {
                console.log("Error:-", err)
            })
    }

    console.log("Data:-", data)

    return (
        <div className="news">
            <div className="news__search">
                <form>
                    <input
                        className="news__searchInput"
                        type="text"
                        placeholder="Search for News"
                        onChange={e => setSearch(e.target.value)}
                    />
                    <button onClick={getNews}>Search for News</button>
                </form>
            </div>
            <div className="news__result">
                {data.map((d) => (
                    <Card name={d.author} data={d.description} url={d.url} date={d.publishedAt} />
                ))}
            </div>
        </div>
    )
}

export default News
