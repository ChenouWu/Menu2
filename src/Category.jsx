const Category=({Categories,filterItems})=>{
    return(
        <section className="btn-container">
            {Categories.map((Category)=>{
               return <button 
                onClick={()=>{filterItems(Category)}}
                className="btn" 
                type="button" 
                key={Categories}
                >{Category}</button>
            })}
        </section>
        
    )
}


export default Category