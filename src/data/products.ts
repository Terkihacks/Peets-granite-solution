import { productTypes } from '../types/types'
import image3 from '../assets/image 3.webp'
import selgatio from '../assets/selgatio.jpeg'
import Rosa  from '../assets/Rosa.jpeg'
import WhiteEldo from '../assets/White Eldo.jpeg'
import safaga from '../assets/safaga.jpeg'
import redRoyale from '../assets/Red royale.jpeg'


export const productList:productTypes[] = [
    {
        id: 1,
        name: 'Selgatio',
        description:
            '2.40 * 0.60 18mm thickness',
        image: selgatio,
        price: '7000',
    },
    {
        id:2,
        name:'Rosa',
        description:
        '2.40 * 0.60 18mm thickness',
        image:Rosa,
        price:'15000'
    },
    {
        id:3,
        name:'WhiteEldo',
        description:
        '2.40 * 0.60 18mm thickness',
        image:WhiteEldo,
        price:'16000'
    },
    {
        id:4,
        name:'Safaga',
        description:
        '2.40 * 0.60 18mm thickness',
        image:safaga,
        price:'16000'
    },
    {
        id:4,
        name:'Red royal',
        description:
        '2.40 * 0.60 18mm thickness',
        image:redRoyale,
        price:'16000'
    },
    {
        id:5,
        name:'Sample',
        description:
        'Best available',
        image:image3,
        price:'7000'
    }
   

]