import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import Wallpaper from '../assets/Wallpaper.jpg';
import profile from '../assets/profile.jpg';

const Styles = styled.div`
    .jumbotron{
        background: url(${Wallpaper}) no-repeat;
        background-size: cover;
        color: #ccc;
        width: 100%;
        height: auto;
    }

    .profile{
        text-align: center;
        color: white;
        font-family:"Adobe Garamond Pro Bold", Georgia, "Times New Roman", Times, serif;
        font-size: 16px;
    }

    .profile p{
        padding-top: 15px;
        color: white;
        font-family:"Adobe Garamond Pro Bold", Georgia, "Times New Roman", Times, serif;
        font-size: 18px; 
    }
`;


export const Jumbotron = () => (
<Styles>
    <div class="jumbotron jumbotron-cover-image">
        <div class="container">
            <div class="container">
                <div class="profile">
                    <img
                        src={profile}
                        width="250"
                        height="250"
                        className="d-inline-block align-top"
                        alt="Profile"
                    />
                    <p>My Profile</p>  
                </div> 
            </div>
        </div>
    </div>  
</Styles>
)