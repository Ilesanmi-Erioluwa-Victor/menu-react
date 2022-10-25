import { useState } from "react";
import Menu from "./Menu";
import Category from "./Categories";
import Items from "./Data";

function App() {
  const [menuItem, setMenuItem] = useState(Items);
  const [categories, setCategories] = useState([]);

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>

        <Category />
        <Menu />
      </section>
    </main>
  );
}

export default App;
