import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Grid, Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import "./style.css"
import ArticleCard from "../articleCard"
import Header from "../header";
import { getArticleData } from "../../actions/article"

const Article = (props) => {
    const [articles, setArticles] = useState([]);

    useEffect(()=>{
        props.getArticleData()
        setArticles(props.article_data)
    },[props.article_data])

    return (
        <div className="mainContainer">
            <Header {...props}/>
            <div className="main-article">
                <Container>
                    <Grid columns={1}>
                        <Grid.Row className='article-row'>
                            {
                                (articles || []).map((item, index) => {
                                    return (
                                        <Grid.Column className="article-list" key={index}>
                                            <ArticleCard
                                                data={item || {}}
                                                id={index}
                                            />
                                        </Grid.Column>
                                    )
                                })
                            }
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    const {article_data} = state.home;
    return {
        article_data
    };
};
export default connect(
    mapStateToProps,
    {
        getArticleData
    },
)(Article);

