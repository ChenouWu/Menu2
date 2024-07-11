import MenuItems from "./MenuItems"
const Menu =({item})=>{
    return(
        <div className="section-center">    
            {item.map((menuItem)=>{
                return <MenuItems key={menuItem.id} {...menuItem}/>
            })}
        </div>
    )
}


export default Menu