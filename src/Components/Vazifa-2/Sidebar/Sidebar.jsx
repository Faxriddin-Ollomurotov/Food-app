import React, { Component } from 'react';
import './Sidebar.css';
import logo from './images/Bitmap.png'
import icon0 from './images/check-circle.svg'
import icon1 from './images/check-circle.svg'
import icon2 from './images/layers.svg'
import icon3 from './images/map-pin.svg'
import icon4 from './images/users.svg'
import icon5 from './images/bar-chart-2.svg'
import icon6 from './images/settings copy 2.svg'
import icon7 from './images/log-out.svg'

export default class Sidebar extends Component {
    render() {
        const menu=[
            {
                id:1,
                icon:icon0,
                title:'Buyurtmalar'
            },
            {
                id:2,
                icon:icon1,
                title:'Maxsulotlar'
            },
            {
                id:3,
                icon:icon2,
                title:'Kategoriyalar'
            },
            {
                id:4,
                icon:icon3,
                title:'Filiallar'
            },
            {
                id:5,
                icon:icon4,
                title:'Mijozlar'
            },
            {
                id:6,
                icon:icon5,
                title:'Xisobot'
            },
            {
                id:7,
                icon:icon6,
                title:'Katalog'
            }
        ]
        return (
            <div className="main">
                <div className="container">
                    <div className="logo">
                        <div className="img">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="text">
                            <h4>Fast Food</h4>
                            <p>Online maxsulot sotuvi</p>
                        </div>

                    </div>
                    <div className="menu">
                        {
                            menu.map(value=>{
                                return(
                                    <div key={value.id} className='menyu'>
                                    <div className="icon">
                                        <img src={value.icon} alt="logo" />
                                       
                                    </div> 
                                    <h2>{value.title}</h2>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="log-out">
                    <div className='menyu'>
                                    <div className="icon">
                                        <img src={icon7} alt="logo" />
                                       
                                    </div> 
                                    <h2>Chiqish</h2>
                                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
