import useFetch from '../utils/useFetch'
import useAxios from '../utils/useAxios'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import Item from './Item'


const Home = () => {

    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]
    return (
        <Carousel>
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

