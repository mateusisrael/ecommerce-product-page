import FALL_LIMITED_EDITION_THUMB from '../images/image-product-1-thumbnail.jpg'

export interface IProduct {
  id: number,
  title: string,
  description: string
  thumb: string,
  price: number,
  discountPercentage: number,
}

export const products: [IProduct] = [
  {
    id: 1,
    title: 'Fall Limited Edition Sneakers',
    description: 'These low-profile sneakers are perfect casual wear companion. Featuring a durable rubber outer sole, they all withstand everything the weather can offer.',
    thumb: FALL_LIMITED_EDITION_THUMB,
    price: 250.00,
    discountPercentage: 50,
  }
];