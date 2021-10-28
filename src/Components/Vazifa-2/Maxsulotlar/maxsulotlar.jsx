import React, { Component } from 'react'
import './maxsulotlar.css'
import {FiEdit3} from 'react-icons/fi'
import {RiDeleteBinLine} from 'react-icons/ri'

export default class Maxsulotlar extends Component {
    
    render() {
        const maxsulotlar =[
            {
                id:1,
                imgURL:'https://bugaga.ru/uploads/posts/2018-03/1522426582_4.jpg',
                name:'Lavash mini',
                category:'Lavash',
                price:'18.000',
                reference:'Kichkina lavash',
            },
            {
                id:2,
                imgURL:'https://bugaga.ru/uploads/posts/2018-03/1522426582_4.jpg',
                name:'ChizburgerMax',
                category:'Burger',
                price:'23.000',
                reference:'Kichkina lavash',
            },
            {
                id:3,
                imgURL:'https://bugaga.ru/uploads/posts/2018-03/1522426582_4.jpg',
                name:'LavashMax',
                category:'Lavash',
                price:'8.000',
                reference:'Kichkina lavash',
            },
            {
                id:4,
                imgURL:'https://bugaga.ru/uploads/posts/2018-03/1522426582_4.jpg',
                name:'Lavash S Sirom',
                category:'Lavash',
                price:'21.000',
                reference:'Kichkina lavash',
            },
            {
                id:5,
                imgURL:'https://bugaga.ru/uploads/posts/2018-03/1522426582_4.jpg',
                name:'Burger mini',
                category:'Burger',
                price:'11.000',
                reference:'Kichkina lavash',
            },
            {
                id:6,
                imgURL:'https://bugaga.ru/uploads/posts/2018-03/1522426582_4.jpg',
                name:'Lavash mini',
                category:'Lavash',
                price:'18.000',
                reference:'Kichkina lavash',
            },
            // {
            //     id:7,
            //     imgURL:'https://bugaga.ru/uploads/posts/2018-03/1522426582_4.jpg',
            //     name:'Coco-Cola 1,5l',
            //     category:'Ichimlik',
            //     price:'34.000',
            //     reference:'Kichkina lavash',
            // },
            // {
            //     id:8,
            //     imgURL:'https://bugaga.ru/uploads/posts/2018-03/1522426582_4.jpg',
            //     name:'Coco-cola 1l',
            //     category:'Ichimlik',
            //     price:'18.000',
            //     reference:'Kichkina lavash',
            // },
            // {
            //     id:9,
            //     imgURL:'https://bugaga.ru/uploads/posts/2018-03/1522426582_4.jpg',
            //     name:'Burger mini',
            //     category:'Burger',
            //     price:'11.000',
            //     reference:'Kichkina lavash',
            // },
            // {
            //     id:10,
            //     imgURL:'https://bugaga.ru/uploads/posts/2018-03/1522426582_4.jpg',
            //     name:'Lavash mini',
            //     category:'Lavash',
            //     price:'18.000',
            //     reference:'Kichkina lavash',
            // }
        ];



        return (
            
            <div className='table-maxsulotlar'>
                <div className='pixel'></div>
                <div className="table-navbar">
                        <div>MAXSULOT</div>
                        <div>KATEGORIYA</div>
                        <div>NARXI</div>
                        <div>QO'SHIMCHA</div>
                        <div>ACTION</div>
                    </div>
                <div className="maxsulot">
                    {maxsulotlar.map((value)=>{
                        return(
                            <div className="maxsulot-table">
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
                                    <div className="taxrirlash">
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
