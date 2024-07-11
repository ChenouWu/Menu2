const MenuItems = ({title,category,price,img,desc})=>{
    return(
        <div className="menu-item">
            <div>
            <h5 className="item-info h5">{title}</h5>
            <span className="item-price">{price}</span>
            <img  className="img" src={img}/>
            <p className="item-text">{desc}</p>
            </div>
        </div>
    )
}


export default MenuItems