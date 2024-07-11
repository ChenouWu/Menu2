import menu from "./data";
import Title from "./title";
import Menu from "./Menu";
import Category from "./Category";
import { useState } from "react";


const myArray = ['all', ...new Set(menu.map((item) => item.category))];

const App = () => {
  const[menuItems , setMenuItem] = useState(menu);
  const [category,setCategory] = useState(myArray)

  const filterItems = (category)=>{
    if(category === 'all'){
      setMenuItem(menu);
      return;
    }
    console.log(category)
    //Filter method is the key point!!
    //Filter return an copy of array, rather than fix the original array.
    //Thats why every time user change the filter and it could be works.
    const newItems = menu.filter((items)=>{return items.category === category });
    setMenuItem(newItems);
  }


  return(
    <main>
      <section className="menu">
      <Title title={"Our Menu"}/>
      <Menu item={menuItems}/>
      <Category Categories={category} filterItems={filterItems} />
      </section>
    </main>
  );
};
export default App;
