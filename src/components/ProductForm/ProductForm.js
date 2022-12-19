import OptionColor from '../OptionColor/OptionColor'
import OptionSize from '../OptionSize/OptionSize';
import Button from '../Button/Button';
import styles from './ProductForm.module.scss';
import PropTypes from 'prop-types';

const ProductForm = props => {

  const addToCart = props => {
    return (
    console.log('Summary'),
    console.log('########'),
    console.log('Name: ', props.title),
    console.log('Price: ', props.currentPrice),
    console.log('Size: ', props.currentSize),
    console.log('Color: ', props.currentColor)
    )
  };

  return (
    <form onSubmit={(e) => {e.preventDefault(); addToCart(props)}}>
      <OptionSize
        currentSize={props.currentSize}
        setCurrentSize={props.setCurrentSize}
        getPrice={props.getPrice}
        sizes={props.sizes}
      />
      <OptionColor 
        currentColor={props.currentColor} 
        setCurrentColor={props.setCurrentColor} 
        color={props.color}
      />
      <Button className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  )
};

ProductForm.propTypes = {
  title: PropTypes.string.isRequired,
  currentColor: PropTypes.string.isRequired,
  color: PropTypes.array.isRequired,
  currentSize: PropTypes.string.isRequired,
  sizes: PropTypes.array.isRequired,
};

export default ProductForm;