const title = ({title})=>{
    return(
        <div className="title">
            <h2>{title||"Default Tittle"}</h2>
            <div className=" title-underline">
            </div>
        </div>
    )
}


export default title;