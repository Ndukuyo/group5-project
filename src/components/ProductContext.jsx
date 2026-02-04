import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductCardProvider = ( { children } ) => {
    const [products, setProducts] = useState([ 
        {
            id: 1, 
            image: "https://images.pexels.com/photos/28739328/pexels-photo-28739328.jpeg",
            productName: "Lenovo Thinkpad", 
            productDescription: "`256gb ssd, 8gb RAM, 2gb GPU `", 
            productPrice: "KES 50,000"
        },
        {
            id: 2, 
            image: "https://images.pexels.com/photos/33796979/pexels-photo-33796979.jpeg",
            productName: "Gaming PC", 
            productDescription: "gaming pc with LED lights 1TB ssd, 32GB RAM 8GB GPU", 
            productPrice: "KES 110,000"
        },
        {
            id: 3, 
            image: "https://images.pexels.com/photos/28190155/pexels-photo-28190155.jpeg",
            productName: "PC Case", 
            productDescription: "Desktop case with glass sides good for gaming pc self build", 
            productPrice: "KES 30,000"
        },
        {
            id: 4, 
            image: "https://images.pexels.com/photos/33174696/pexels-photo-33174696.jpeg",
            productName: "Power Suply Unit", 
            productDescription: "Powerfull power suply unit for your gaming PC ", 
            productPrice: "KES 20,000"
        },
        {
            id: 5, 
            image: "https://images.pexels.com/photos/20391486/pexels-photo-20391486.jpeg",
            productName: "Graphics Card", 
            productDescription: "NVIDIA 8GB Graphics card, ", 
            productPrice: "KES 20,000"
        },
        {
            id: 6, 
            image: "https://images.pexels.com/photos/11833899/pexels-photo-11833899.jpeg",
            productName: "HP Printer", 
            productDescription: "HP rt4567 good for ofice  work", 
            productPrice: "KES 38,000"
        },
        {
            id: 7, 
            image: "https://images.pexels.com/photos/24181866/pexels-photo-24181866.jpeg",
            productName: "Mechanical Keyboard", 
            productDescription: "Mechanical keyboard great for gaming ", 
            productPrice: "KES 3,000"
        },
        {
            id: 8, 
            image: "https://images.pexels.com/photos/7172699/pexels-photo-7172699.jpeg",
            productName: "Wireless mouse", 
            productDescription: "Wireless mouse with long batery life  ", 
            productPrice: "KES 1,000"
        },
        {
            id: 9, 
            image: "https://images.pexels.com/photos/5082570/pexels-photo-5082570.jpeg",
            productName: "All in one pc", 
            productDescription: "Sleek Macigtosh all in one desktop, 512GB ssd, 16GB RAM ", 
            productPrice: "KES 59,000"
        },
        {
            id: 10, 
            image: "https://images.pexels.com/photos/28190155/pexels-photo-28190155.jpeg",
            productName: "PC Case", 
            productDescription: "Desktop case with glass sides good for gaming pc self build", 
            productPrice: "KES 30,000"
        }             
    ]);

    const [searchTerm, setSearchTerm] = useState("")

    const filteredProducts = products.filter( (p) => 
        p.productName.toLowerCase(). includes(searchTerm.toLowerCase())
    );

    const addProduct = (newProduct) => {
        setProducts( [...products, newProduct]);
    };
     
    return (
        <ProductContext.Provider value= { {products: filteredProducts, setSearchTerm, addProduct } } >
            { children }
        </ProductContext.Provider>
    )
    
}
