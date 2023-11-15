class ProductManager {
    constructor() {
        this.products = [];
    }

    getProducts() {
        return this.products;
    }

    addProduct({ title, description, price, thumbnail, code, stock }) {
        const id = this.generateUniqueId();
        const newProduct = { id, title, description, price, thumbnail, code, stock };
        this.products.push(newProduct);
        return newProduct;
    }

    getProductById(id) {
        const product = this.products.find((p) => p.id === id);
        if (!product) {
            throw new Error('Product not found');
        }
        return product;
    }

    updateProduct(id, updatedFields) {
        const index = this.products.findIndex((p) => p.id === id);
        if (index !== -1) {
            this.products[index] = { ...this.products[index], ...updatedFields, id };
            return this.products[index];
        } else {
            throw new Error('Product not found');
        }
    }

    deleteProduct(id) {
        const index = this.products.findIndex((p) => p.id === id);
        if (index !== -1) {
            const deletedProduct = this.products.splice(index, 1);
            return deletedProduct[0];
        } else {
            throw new Error('Product not found');
        }
    }

    generateUniqueId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }
}

// Crear instancia de ProductManager
const productManager = new ProductManager();

// Obtener productos (debería devolver [])
console.log(productManager.getProducts());

// Agregar un producto
const newProduct = productManager.addProduct({
    title: 'producto prueba',
    description: 'Este es un producto prueba',
    price: 200,
    thumbnail: 'Sin imagen',
    code: 'abc123',
    stock: 25,
});
console.log('Producto agregado:', newProduct);

// Obtener productos (debería contener el producto recién agregado)
console.log(productManager.getProducts());

// Obtener producto por id
const productId = newProduct.id;
try {
    const retrievedProduct = productManager.getProductById(productId);
    console.log('Producto encontrado por ID:', retrievedProduct);
} catch (error) {
    console.error(error.message);
}

// Actualizar producto
const updatedProduct = productManager.updateProduct(productId, { price: 250, stock: 30 });
console.log('Producto actualizado:', updatedProduct);

// Eliminar producto
try {
    const deletedProduct = productManager.deleteProduct(productId);
    console.log('Producto eliminado:', deletedProduct);
} catch (error) {
    console.error(error.message);
}


