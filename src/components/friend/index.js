import React, { useEffect, useState } from 'react';
import { Grid, Card, Image, Container, CardHeader, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import "./style.css"
import Header from "../header";
import ModalPopUp from "../modalPopUp"
import { connect } from "react-redux";
import { getFriendsData } from "../../actions/friend";

const Friend = (props) => {
    const [isOpenModal,setOpenModal] = useState(false);
    const [isSelectedData, setSelectedData] = useState({})

    const [friends, setFriends] = useState([]);

    useEffect(()=>{
        props.getFriendsData()
        setFriends(props.friend_data)
    },[props.friend_data])
    return (
        <div className="mainContainer">
            <Header {...props}/>
            <div className="friends-block">
                <Container>
                    <Grid>
                        <Grid.Row className='friends-block-row'>
                            {
                                friends.map((data, index) => {
                                    return (
                                        <Grid.Column className="friends-list" key={index}>
                                            <Card onClick={()=>{setOpenModal(true)
                                                setSelectedData(data)
                                            }}>
                                                <div className='friend-head'>
                                                    <div className="friend-img">
                                                        <Image src={data.image} wrapped ui={false} />
                                                    </div>
                                                    <div className="friend-title-tag">
                                                        <CardHeader>{data.name}</CardHeader>
                                                        <div className="friend-tag">
                                                            <div className="mutual-friend">
                                                                <Icon name='users' />
                                                                <span>{Math.floor(Math.random() * 10)}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card>
                                        </Grid.Column>
                                    )
                                })

                            }
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
            {
                isOpenModal &&
                <ModalPopUp  open={isOpenModal} onClick={()=>setOpenModal(false)} data={isSelectedData} />
            }
        </div>
    )
}

const mapStateToProps = state => {
    const {friend_data} = state.friend;
    return {
        friend_data
    };
};
export default connect(
    mapStateToProps,
    {
        getFriendsData
    },
)(Friend);
