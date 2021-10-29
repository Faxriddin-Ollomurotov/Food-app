import React, { Component } from 'react'
import './maxsulotlar.css'
import {FiEdit3} from 'react-icons/fi'
import {RiDeleteBinLine} from 'react-icons/ri'
import { maxsulotlar } from './data'

export default class Maxsulotlar extends Component {
    


        state={
            FastFood:maxsulotlar
        }
        render() {
        const handleDelete=(id)=>{
            const NewMaxsulotlar=this.state.FastFood.filter(value=>value.id!==id);
            this.setState({FastFood:NewMaxsulotlar})
        }
        const handleSortCategory=()=>{
            const NewData=this.state.FastFood.sort((a,b)=>a.category.localeCompare(b.category));
            this.setState({FastFood:NewData})
            console.log(NewData);
        }
        const handleSortPrice=()=>{
            const NewDataa=this.state.FastFood.sort((a,b)=>Number(a.price)-Number(b.price)
            );
            this.setState({
                FastFood:NewDataa
            })
        }

        return (
            
            <div className='table-maxsulotlar'>
                <div className='pixel'></div>
                <div className="table-navbar">
                        <div>MAXSULOT</div>
                        <div style={{cursor:'pointer'}} onClick={handleSortCategory}>KATEGORIYA</div>
                        <div style={{cursor:'pointer'}} onClick={handleSortPrice}>NARXI</div>
                        <div>QO'SHIMCHA</div>
                        <div>ACTION</div>
                    </div>
                <div className="maxsulot">
                    {this.state.FastFood.map((value)=>{
                        return(
                            <div key={value.id} className="maxsulot-table">
                                <div className="row-maxsulot">
                                    <img src={value.imgURL} alt="rasm" />
                                    <div className="maxsulot-nomi">{value.name}</div>
                                </div>
                                <div className="maxsulot-categoriyasi">{value.category}</div>
                                <div className="maxsulot-narxi">{value.price} UZS</div>
                                <div className="maxsulot-qushimchasi">{value.reference}</div>
                                <div className="maxsulot-actioni">
                                    <div className="taxrirlash">
                                    <FiEdit3/>
                                    </div>
                                    <div onClick={()=>handleDelete(value.id)} className="taxrirlash">
                                    <RiDeleteBinLine />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="btn-yuklash">
                    <h3>Yana yuklash</h3>
                </div>
            </div>
        )
    }
}
