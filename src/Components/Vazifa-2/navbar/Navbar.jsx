import React, { Component } from 'react'
import './Navbar.css';
import Maxsulotlar from '../Maxsulotlar/maxsulotlar'
import searchlogo from '../Sidebar/images/search.svg'
import navLogo from '../Sidebar/images/Group 2.svg'
import {maxsulotlar} from "../Maxsulotlar/data";

export default class Navbar extends Component {
    // state={
    //     data:maxsulotlar
    // }
    render() {
        // const Search=({target})=>{
        //    const NewData=this.state.data.filter(value=>value.name.includes(target.value))
        //     this.setState({data:NewData});
        // }

        return (
            <div>
                <div className="navbar">
                    <div className="add-food">
                        <div className="add">
                            <div className="icon-add">
                               <h1>+</h1>
                            </div>
                            <div className="text-add">
                                <h6>
                                    Yangi maxsulot <br /> qo'shish
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="search">
                        <input  name='search' type="text" placeholder='Qidirish' />
                        <img src={searchlogo} alt="" />
                    </div>
                    <div className='btn'>
                        <img src={navLogo} alt="" />
                    </div>
                </div>
                <Maxsulotlar database={this.Search}/>
            </div>
        )
    }
}
