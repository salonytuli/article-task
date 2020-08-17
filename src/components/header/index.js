import React from 'react';
import {Grid, Container} from 'semantic-ui-react'
import "./style.css"

const Header = (props) =>{
    return(
        <div className="top-header">
            <Container>
                <Grid columns={2} className="header-row">
                    <Grid.Column>
                        <h2 className="" color='white'>
                            News Articles
                        </h2>
                    </Grid.Column>
                    <Grid.Column>
                        <Grid className='top-menu-list'>
                            <a className="menu-btn" onClick={()=>{
                                props.history.push("/home")
                            }}>
                                Home
                            </a>
                            <a className="menu-btn" onClick={()=>{
                                props.history.push("/friends")
                            }}>
                                Friend
                            </a>
                        </Grid>
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    )
}
export default Header
