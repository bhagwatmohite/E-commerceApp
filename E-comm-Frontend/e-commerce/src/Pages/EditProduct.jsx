import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { BsPencilSquare, BsTrash } from 'react-icons/bs';

const Products = () => {
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    image: '',
    description: '',
    price: '',
    quantity: ''
  });

  // Dummy product data (replace with your actual JSON data)
  const products = [
    {
      id: 1,
      name: 'Product 1',
      image: 'https://via.placeholder.com/150',
      description: 'Description of Product 1',
      price: 29.99,
      quantity: 10
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'https://via.placeholder.com/150',
      description: 'Description of Product 2',
      price: 19.99,
      quantity: 5
    },
    {
      id: 3,
      name: 'Product 3',
      image: 'https://via.placeholder.com/150',
      description: 'Description of Product 3',
      price: 39.99,
      quantity: 15
    }
    // Add more products as needed
  ];

  const handleEdit = (productId) => {
    // Find the product by ID from the products array
    const productToEdit = products.find((product) => product.id === productId);

    // Set the newProduct state with the existing product details
    setNewProduct({
      name: productToEdit.name,
      image: productToEdit.image,
      description: productToEdit.description,
      price: productToEdit.price.toString(),
      quantity: productToEdit.quantity.toString()
    });

    // Show the modal
    setShowModal(true);
  };

  const handleCloseModal = () => {
    // Reset newProduct state and hide the modal
    setNewProduct({
      name: '',
      image: '',
      description: '',
      price: '',
      quantity: ''
    });
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleSaveChanges = () => {
    // Implement logic to save edited product (e.g., API call)
    console.log('Edited Product:', newProduct);
    // Reset form fields and close modal
    setNewProduct({
      name: '',
      image: '',
      description: '',
      price: '',
      quantity: ''
    });
    setShowModal(false);
  };

  return (
    <>
      <h1 className="text-center font-weight-bold">All Products Here</h1>
      <button type="button" className="btn btn-dark btn-lg" onClick={() => setShowModal(true)}>
        Add Product
      </button>

      <div className="container mt-4">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  <img src={product.image} alt={product.name} style={{ maxWidth: '100px' }} />
                </td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>{product.quantity}</td>
                <td>
                  <BsPencilSquare
                    className="action-icon text-primary me-2"
                    onClick={() => handleEdit(product.id)}
                  />
                  <BsTrash
                    className="action-icon text-danger"
                  // onClick={() => handleDelete(product.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Product Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="editProductName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product name"
                name="name"
                value={newProduct.name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="editProductImage">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image URL"
                name="image"
                value={newProduct.image}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="editProductDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter product description"
                name="description"
                value={newProduct.description}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="editProductPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter price"
                name="price"
                value={newProduct.price}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="editProductQuantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter quantity"
                name="quantity"
                value={newProduct.quantity}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Products;
