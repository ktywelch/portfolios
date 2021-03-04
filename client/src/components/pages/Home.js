import useFetch from '../utils/useFetch'
import useAxios from '../utils/useAxios'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import Item from './Item'


const Home = () => {

    var items = [
        {
            name: "Hobby Vineyard",
            description: "Since 2017 proprietors of a small vineyard and winery in Glen Ellen",
            img: "../images/Vineyard.png",
            alt: "image of vineyard in sonoma"
        },
        {
            name: "Walking & hiking",
            description: "Love Hiking and walking, ususally in San Francisco and Sonoma",
            img: "../images/Hiking.png",
            alt: "image hiking in San Francisco"
        },
        {
            name: "Works at Genentech - Great place to work!",
            description: "Delivery Lead in Pernsonalised Health Care Informatics",
            img: "../images/genentech.jpg",
            alt: "image of Genentech"
        }
    ]
    return (
        <Carousel interval= {5000}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}


// const Home = () => {
  
//     return (  
//         <div className='home'>
   
//         </div> 
//     );
    
// }
 
export default Home;

