import iphone12 from '../assets/img/iPhone12Card.png'
import s21 from '../assets/img/s21ultra.png'
import mi11ultra from '../assets/img/mi11ultra.jpg'
import z2fold from '../assets/img/zfold2.png'
import iphone13 from '../assets/img/iphone13card.png'
import mi11tpro from '../assets/img/mi11tpro.jpg'



const products = [{
    id: "01",
    brand: "Apple",
    name: "iPhone 12 Pro Max",
    description: "Smartphone Apple iPhone 12 Pro Max 256 GB",
    stock: 10,
    price: 1200,
    pictureUrl: iphone12,
    category: "iPhone-12-Series",
    ram: "6 GB",
    capacity: "256 GB",
    display: "Super Retina XDR display 6.7‑inch (diagonal) all‑screen OLED display 2778‑by‑1284-pixel resolution at 458 ppi",
    chip: "A14 Bionic chip",
    camera: "Front 12 MP / Rear 12 + 12 + 12 MP",
    batery: "3.687 mAh"
},
{
    id: "02",
    brand: "Samsung",
    name: "Samsung S21+",
    description: "Smartphone Samsung Galaxy S 21 Ultra",
    stock: 50,
    price: 1300,
    pictureUrl: s21,
    category: "Galaxy-S-Series",
    ram: "12 GB",
    capacity: "256 GB",
    display: 'Dynamic AMOLED 2X 6.8", Resolution: 3200 x 1440 (Quad HD+)',
    chip: "Snapdragon 888, Speed: 2.9GHz",
    camera: "Front 40 MP / Rear 108 MP + 10 MP + 12 MP + 10 MP",
    batery: "5000 mAh"
},
{
    id: "03",
    brand: "Xiaomi",
    name: "Mi 11 Ultra",
    description: "Smartphone Xiaomi Mi 11 Ultra",
    stock: 50,
    price: 1400,
    pictureUrl: mi11ultra,
    category: "Mi-11-Series",
    ram: "12 GB",
    capacity: "256 GB",
    display: 'Quad-curved displayWQHD+ 6.81" AMOLED DotDisplay, Resolution: 3200 x 1440',
    chip: "Snapdragon 888, Speed: 2.9GHz",
    camera: "Front 20 MP / Rear 50 MP + 48 MP + 48 MP",
    batery: "5000 mAh"
},
{
    id: "04",
    brand: "Samsung",
    name: "Samsung Galaxy Z Fold 2",
    description: "Smartphone Samsung Galaxy Z Fold 2",
    stock: 50,
    price: 1250,
    pictureUrl: z2fold,
    category: "Galaxy-Z-Series",
    ram: "12 GB",
    capacity: "256 GB",
    display: 'Dynamic AMOLED 2X 7.6" full rectangle, Resolution: 2208 x 1768 (QXGA+)',
    chip: "Snapdragon 865, Speed: 3.09 GHz ",
    camera: "Front 10 MP  / Rear 12 MP + 12 MP + 12 MP / Cover Camera 10.0 MP",
    batery: "4500 mAh"
}, 
{
    id: "05",
    brand: "Apple",
    name: "iPhone 13 Pro Max",
    description: "Smartphone Apple iPhone 13 Pro Max 256 GB",
    stock: 5,
    price: 1400,
    pictureUrl: iphone13,
    category: "iPhone-13-Series",
    ram: "6 GB",
    capacity: "256 GB",
    display: 'Super Retina XDR OLED, 120Hz 6.7" Resolution: 1284 x 2778 pixels',
    chip: "A15 Bionic chip",
    camera: "Front 12 MP / Rear 12 MP + 12 MP + 12 MP",
    batery: "4,400 mAh"
},
{
    id: "06",
    brand: "Xiaomi",
    name: "Mi 11T Pro",
    description: "Smartphone Xiaomi Mi 11T Pro",
    stock: 80,
    price: 1100,
    pictureUrl: mi11tpro,
    category: "Mi-11-Series",
    ram: "12 GB",
    capacity: "256 GB",
    display: 'AMOLED DotDisplay 6.67" 120Hz Resolution: 3200 x 1440',
    chip: "Snapdragon 888, Speed: 2.9GHz",
    camera: "Front 16 MP / Rear 108 MP +8 MP + 5 MP ",
    batery: "5000 mAh"
}
]


export default products;