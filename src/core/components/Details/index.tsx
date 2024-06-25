import {useNavigate, useParams} from 'react-router';
import {Category, RouterPaths} from '@/core/types';
import { formatDescription } from '@/core/components/Details/helpers.ts';
import DOMPurify from 'dompurify';
import {useReduxSelect} from "@/redux/hooks.ts";
import {selectCategories} from "@/redux/slices/categories";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const priceList: Category[] = useReduxSelect(selectCategories);

  const product = priceList
  .map(({ products }) => products).flat()
  .find((product) => product.id.toString() === id);

  if (!product) {
    navigate(RouterPaths.ROOT);
    return;
  }

  const description = formatDescription(product.description);

  return (
    <section className="card">
      <div className="container">
        <div className="card-top">
          <div className="card-img">
            <img src={ `/images/products/${ product.imagePath }` } alt="product"/>
          </div>
          <div className="card-sidebar">
            <div className="title">{ product.name }</div>
            <div className="price">
              <span>Price:</span> <b>{ product.price }<small>₴</small></b>
            </div>
            { product.weight && <div className="weight">
              <span>Amount of gr.</span> <b>{ product.weight }</b>
            </div> }
          </div>
        </div>
        { description && <div className="card-bottom">
            <div className="card-info">
                <h2 className="tab">Description</h2>
                <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(description)}}></p>
            </div>
        </div> }
      </div>
    </section>
  );
};

export default Details;