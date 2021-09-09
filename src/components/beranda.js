import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Beranda extends Component{
    render(){
        return(
            <div style={{width:'100%', margin:'auto'}}>
                <Grid  className="beranda-grid">
                    <Cell col={12}>
                        <img src="http://webprofilefitrah.000webhostapp.com/foto.jpg" alt="avatar" className="avatar-img" />

                        <div className="banner-text">
                            <h1>Web Master</h1>
                            <hr/>
                            <p>HTML/CSS | PHP | MySQL | BootStrap | React | React Native | JavaScript | Codeigniter | Laravel </p>
                            <div className="social-links">
                                <a href="https://facebook.com/zee0scraft/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook-square" aria-hidden="true" />
                                </a>
                                <a href="https://twitter.com/bukulokomedia" rel="noopener noreferrer" target="_blank" >
                                    <i className="fa fa-twitter-square" aria-hidden="true" />
                                </a>
                                <a href="https://github.com/fitrah100" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                                <a href="https://id.linkedin.com/in/fitrah-yusuf-anwar-pohan-6899b318" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>
                                <a href="https://www.youtube.com/channel/UCg76fWFN86jk6Zu6vLKoGzQ" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square" aria-hidden="true" />
                                </a>
                            </div>
                        </div> 
                    </Cell>
                </Grid> 
            </div>
        )
    }
}
export default Beranda;