import { useLocation, useNavigate } from 'react-router';
import { Category, RouterPaths } from '@/core/types';
import React from 'react';
import { useReduxSelect } from "@/redux/hooks.ts";
import { selectCategories } from "@/redux/slices/categories";

const Main = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const hash = location.hash;
  const priceList: Category[] = useReduxSelect(selectCategories);

  return (
    <section className="home-products">
      <div className="container">
        <div className="products-wrapper">
          { priceList.map((category) => (!hash || hash === `#${category.id}`) && <React.Fragment key={ category.id }>
            <h3 className="all-products">{ category.name }</h3>
            { category.products.map((product) => <React.Fragment key={ product.id }>
              <div className="product" onClick={ () => navigate(`${ RouterPaths.DETAILS }/${ product.id }`) }>
                <div>
                  <div className="img">
                    <img src={ `/images/products/${ product.imagePath }` } alt="product" loading="lazy"/>
                  </div>
                  <span className="title">
                    { product.name }
                  </span>
                </div>
                <div className="price">
                  <b>{ product.price }<small>₴</small></b> {product.weight && <span>Weight { product.weight }</span>}
                </div>
              </div>
            </React.Fragment>) }
          </React.Fragment>) }
        </div>
      </div>
    </section>
  );
};

export default Main;