class ProductManager {
    Product = [];
constructor() {}
getProducts() {
    console.log(this.Product);
}
addProduct(title, description, price, thumbnail, code, stock){
    price = price || 800;
    code = code || 2918942;
    stock = stock || 100000;
    let id = 0;
    for (let i = 0; i < this.Product.length; i++) {
        const element = this.Product[i];
        if(element.id > id){
            id = element.id;
        }
    }
    id++;

    this.Product.push({ id: id, title, description, price, thumbnail, code, stock })
}
}

const manager = new ProductManager();
manager. addProduct('Monster', 'la mejor bebida energetica', 700, 'https://cordoba.parodisrl.com.ar/45903/energizante-monster-green-473-cc.jpg', 8938940, 100000)
manager. addProduct('Coca-Cola', 'Bebida refrescante', 1000, 'https://static.wixstatic.com/media/d2b1c5_d858b74ff2534bdc98694e72c576fbe0~mv2_d_1600_1600_s_2.jpg/v1/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d2b1c5_d858b74ff2534bdc98694e72c576fbe0~mv2_d_1600_1600_s_2.jpg', 8238933, 100000)
manager.getProducts();

