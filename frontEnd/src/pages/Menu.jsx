import  { useState, useContext, useEffect } from "react";
// import { MenuList } from '/src/helpers/MenuList.js';
import MenuItem from "../components/MenuItem";
import { Swiper, SwiperSlide } from 'swiper/react';
import { ShopContext } from "../components/shop-context";
import ReactPaginate from "react-paginate";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Menu.css";
import "../styles/pagination.css";
import { slidesX } from "../helpers/SlidesX";
import { Container } from "reactstrap";
import {dishGetAll} from "../utils/ApiRoutes";
import axios from "axios";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Drinks');
  const categories = ['Breakfast', 'sandwich', 'Drinks', 'salade', 'tajine', 'compliments'];
  const icons = ['/images/icons/croissant.png', '/images/icons/sandwich.png', '/images/icons/drink.png', '/images/icons/salade.png', '/images/icons/tajine.png', '/images/icons/compliments.png'];
  const { addToCart } = useContext(ShopContext);

  useEffect(() => {
    const fetchDishData = async () => {
      try {
        const response = await axios.get(dishGetAll);
  
        if (response.data && response.data.msg) {
          console.log(response.data.msg);
        }
  
        console.log(response.data);
        setMenu(response.data);
      } catch (error) {
        console.error('Error fetching dishes:', error);
      }
    };
  
    fetchDishData();
  }, []); 
  

  const itemsPerPage = 6;

  const filteredMenu = menu.filter((menuItem) => {
    if (selectedCategory === 'All') {
      return true;
    } else {
      return menuItem.category === selectedCategory;
    }
  });
  console.log(menu,"filter",filteredMenu);


  const pageCount = Math.ceil(filteredMenu.length / itemsPerPage);

  const [pageNumber, setPageNumber] = useState(0);
  const startIndex = pageNumber * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayMenu = filteredMenu.slice(startIndex, endIndex);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="menu" id="menu">
      <section className="common__section">
        <Container>
          <h1 className="menuTitle">Our Menu</h1>
        </Container>
      </section>
      <div className="container justify-content-centre">
        <Swiper {...slidesX}>
          {categories.map((category, index) => (
            <SwiperSlide key={index} className={`custom-slide ${selectedCategory === category ? 'active' : ''}`} onClick={() => setSelectedCategory(category)}>
              <>
                <div className="logo-categ">
                  <img src={icons[index]} style={{ color: 'var(--title-color)', width: '30px', height: '30px', margin: '15px', fontWeight: '100' }} />
                </div>
                <button className={`btn-categ ${selectedCategory === category ? 'active' : ''}`}>{category}</button>
              </>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="menuList">
        {displayMenu.map((menuItem, _) => (
          <div onClick={() => addToCart(menuItem._id)} key={menuItem._id}>
            <MenuItem
              key={menuItem._id}
              image={menuItem.image_url}
              name={menuItem.name}
              price={menuItem.price}
            />
          </div>
        ))}
          </div>

        <div className="pagination">
          <ReactPaginate
            pageCount={pageCount}
            onPageChange={changePage}
            previousLabel={"Prev"}
            nextLabel={"Next"}
            containerClassName="paginationBttns"
          />
      </div>
    </div>
  );
}

export default Menu;
