import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../Home/NewsCard/NewsCard';
import useTitle from '../../Hookes/useTitle';

const Category = () => {
    useTitle('category');
    const {id} = useParams();
    const categoryNews = useLoaderData();
    return (
        <div>
            <h2>this is category: {categoryNews.length}</h2>
            {
                categoryNews.map(news => <NewsCard
                key={news._id}
                news={news}
                >

                </NewsCard>)
            }
        </div>
    );
};

export default Category;