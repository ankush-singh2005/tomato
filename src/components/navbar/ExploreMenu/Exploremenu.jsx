import React from 'react'
import './Exploremenu.css'
import { menu_list } from '../../../Assets/assets'

const Exploremenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our menu</h1>
        <p className='explore-menu-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga porro ad libero in officia natus aliquid illum voluptatem rem vitae necessitatibus non perferendis laborum vel voluptatibus voluptas quo, consequatur nihil?</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                        <img className={category===item.menu_name?"active":""}src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default Exploremenu
