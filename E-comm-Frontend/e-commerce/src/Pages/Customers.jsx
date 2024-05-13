import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { BsPencilSquare, BsTrash } from 'react-icons/bs';
import AddCustomer from './AddCustomer';
import EditCustomer from './EditCustomer';

const Customers = () => {

  const [customerData, setCustomerData] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const [showAddModal, setShowAddModal] = useState(false);

  //get all customer data
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/allcustomer');
      setCustomerData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Function to handle delete customer
  const handleDeleteCustomer = async (customerId) => {

    try {

      await axios.delete(`http://localhost:8080/deletecustomer/${customerId}`);
      alert(`Product with ID ${customerId} deleted successfully.`);

      fetchData();

    } catch (error) {
      console.error('Error deleting customer:', error);
      alert(`Error deleting product with ID ${customerId}:`, error);
    }
  };

  // Function to handle opening edit modal
  const handleEditModal = (customer) => {
    setSelectedCustomer(customer);
    setShowEditModal(true);
  };

  // Function to handle updating customer data after edit
  const handleUpdateCustomer = (updatedCustomer) => {
    const updatedData = customerData.map((customer) =>
      customer.id === updatedCustomer.id ? updatedCustomer : customer
    );
    setCustomerData(updatedData);
  };


  // Function to handle adding new customer
  const handleAddCustomer = (newCustomer) => {
    setCustomerData([...customerData, newCustomer]);
  };

  return (
    <>
      <h1 className="text-center p-3 mb-4 bg-secondary text-white fw-bold">User Information</h1>
      <div className="d-flex justify-content-end p-3">
        <Button type="button" className="btn btn-dark btn-lg mb-3" onClick={() => setShowAddModal(true)}>
          Add User
        </Button>
      </div>
      <div className="table-responsive">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Mobile No</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Pincode</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customerData.map((customer, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{customer.id}</td>
                <td>{customer.firstName}</td>
                <td>{customer.lastName}</td>
                <td>{customer.email}</td>
                <td>{customer.password}</td>
                <td>{customer.mobileNumber}</td>
                <td>{customer.address}</td>
                <td>{customer.city}</td>
                <td>{customer.state}</td>
                <td>{customer.pincode}</td>
                <td>
                  <BsPencilSquare className="action-icon text-primary me-2" onClick={() => handleEditModal(customer)} />
                  <BsTrash className="action-icon text-danger" onClick={() => handleDeleteCustomer(customer.id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Edit Customer Modal */}
      {selectedCustomer && (
        <EditCustomer
          customer={selectedCustomer}
          show={showEditModal}
          handleClose={() => setShowEditModal(false)}
          handleUpdate={handleUpdateCustomer}
        />
      )}

      {/* Add Customer Modal */}
      <AddCustomer
        show={showAddModal}
        handleClose={() => setShowAddModal(false)}
        handleAddCustomer={handleAddCustomer}
      />
    </>
  )
}

export default Customers;