/* eslint-disable react/prop-types */

import { Button, Form, Modal } from 'react-bootstrap';

const EditProductModal = ({ showModal, handleCloseModal, handleUpdateProduct, product, validated, handleInputChange }) => {

  return (

    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleUpdateProduct}>
          <Form.Group controlId="productName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product name"
              name="name"
              value={product.name}
              onChange={handleInputChange}
              required
            />
            <Form.Control.Feedback type="invalid">Please enter a product name.</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="productDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter product description"
              name="description"
              value={product.description}
              onChange={handleInputChange}
              required
            />
            <Form.Control.Feedback type="invalid">Please enter a product description.</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="productSize">
            <Form.Label>Size</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product size"
              name="size"
              value={product.size}
              onChange={handleInputChange}
              required
            />
            <Form.Control.Feedback type="invalid">Please enter a product size.</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="productCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product category"
              name="category"
              value={product.category}
              onChange={handleInputChange}
              required
            />
            <Form.Control.Feedback type="invalid">Please enter a product category.</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="productColor">
            <Form.Label>Color</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product color"
              name="color"
              value={product.color}
              onChange={handleInputChange}
              required
            />
            <Form.Control.Feedback type="invalid">Please enter a product category.</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="productPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter product price"
              name="price"
              value={product.price}
              onChange={handleInputChange}
              required
            />
            <Form.Control.Feedback type="invalid">Please enter a valid price.</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="productQuantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter product quantity"
              name="quantity"
              value={product.quantity}
              onChange={handleInputChange}
              required
            />
            <Form.Control.Feedback type="invalid">Please enter a valid quantity.</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="productImage">
            <Form.Label>Upload Image</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              name="imageFile"
              value={product.imageFile}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Update Product
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditProductModal;


