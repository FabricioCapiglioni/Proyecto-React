import iphone12 from '../assets/img/iPhone12Card.png'
import s21 from '../assets/img/s21.png'
import fold3 from '../assets/img/fold3.png'



const products = [{
    id: "01",
    brand: "Apple",
    name: "iPhone 12 Pro Max",
    description: "Smartphone Apple iPhone 12 Pro Max 256 GB",
    stock: 10,
    price: 1200,
    pictureUrl: iphone12,
    techSpecs: {
        ram: "6 GB",
        capacity: "256 GB",
        display: "Super Retina XDR display 6.7‑inch (diagonal) all‑screen OLED display 2778‑by‑1284-pixel resolution at 458 ppi",
        chip: "A14 Bionic chip",
        camera: "Front 12 MP / Rear 12 + 12 + 12 MP",
        batery: "3.687 mAh"
    }
},
{
    id: "02",
    brand: "Samsung",
    name: "Samsung S21",
    description: "Smartphone Samsung Galaxy S 21 Ultra",
    stock: 500,
    price: 1250,
    pictureUrl: s21
},
{
    id: "03",
    brand: "Samsung",
    name: "Samsung Galaxy Z Fold3 ",
    description: "Smartphone Samsung Galaxy Z Fold3 5G",
    stock: 500,
    price: 1150,
    pictureUrl: fold3
}
]


export default products;