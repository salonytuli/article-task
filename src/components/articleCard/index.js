import React, { useState } from 'react';
import { Image, Card, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import "./style.css"

const ArticleCard = (props) => {
    const [isVisible, setIsVisible] = useState(true);
    const [description, setDescription] = useState([]);
    const handleMoreOption = (id, length, isShow) => {
        let newArray = [];
        newArray[id] = isShow ? length : 100;
        setDescription(newArray);
        setIsVisible(!isVisible)
    }
    return (
        <Card key className="article-card">
            {props.data.urlToImage && <Image src={props.data.urlToImage} wrapped ui={false}/>}
            <Card.Content>
                <Card.Header>{props.data.name}</Card.Header>
                <Card.Meta>{props.data.author}</Card.Meta>
                {
                    <Card.Description className="description">
                        {
                            props.data.description.substr(0, description[props.data.id] ? description[props.data.id] : 100)
                        }
                        {props.data.description.length > 100 && isVisible && "..."}
                    </Card.Description>
                }
                {
                    props.data.description.length > 100 &&
                    <Button className="show-more-btn" onClick={() => {
                        handleMoreOption(props.data.id, props.data.description.length, isVisible)
                    }}>
                        {isVisible ? "Show More.." : "Show Less.."}
                    </Button>
                }
            </Card.Content>
        </Card>
    )
}
export default ArticleCard
