import { productTypes } from '../types/types'
import image1 from '../assets/image 1.png'
import image3 from '../assets/image 3.webp'

export const productList:productTypes[] = [
    {
        id: 1,
        name: 'Granite Level 0',
        description:
            'Lorem ipsum dolor sit ametsequi illum facere recusandae voluptatibus',
        image: image1,
        price: 'ksh 12090',
    },
    {
        id:2,
        name:'Granite Level 1',
        description:
        'The best Granite for counter tops',
        image:image3,
        price:'Ksh 15000'
    },
    {
        id:3,
        name:'Granite Level 3',
        description:
        'The best Granite for counter tops and building solutuions',
        image:image3,
        price:'Ksh 16000'
    },
    {
        id:4,
        name:'Granite Level 5',
        description:
        'The best Granite for counter tops and building solutuions in your home',
        image:image3,
        price:'Ksh 16000'
    }

]