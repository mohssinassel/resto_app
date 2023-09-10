import React, { useState, useContext } from "react";
import { MenuList } from '/src/helpers/MenuList.js';
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

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('Breakfast');
  const categories = ['Breakfast', 'sandwich', 'Drinks', 'salade', 'tajine', 'compliments'];
  const icons = ['/images/icons/croissant.png', '/images/icons/sandwich.png', '/images/icons/drink.png', '/images/icons/salade.png', '/images/icons/tajine.png', '/images/icons/compliments.png'];
  const { addToCart } = useContext(ShopContext);

  const itemsPerPage = 6;

  const filteredMenu = MenuList.filter((menuItem) => {
    if (selectedCategory === 'All') {
      return true;
    } else {
      return menuItem.category === selectedCategory;
    }
  });


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
        {displayMenu.map((menuItem, key) => (
          <div onClick={() => addToCart(menuItem.id)} key={key}>
            <MenuItem
              key={key}
              image={menuItem.image}
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