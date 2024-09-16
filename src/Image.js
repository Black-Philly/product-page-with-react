import product from "./product";


const Image = () => {

    return <img src={product.image} alt={product.name} width='300px' />

}


export default Image