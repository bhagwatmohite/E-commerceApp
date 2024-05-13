import axios from "axios";
import { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import { LuUsers } from "react-icons/lu";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";



const Dashboard = () => {

  // const productData = [
  //   { id: 1, name: "Product A", price: 50, stock: 20 },
  //   { id: 2, name: "Product B", price: 40, stock: 15 },
  //   { id: 3, name: "Product C", price: 30, stock: 25 },
  //   { id: 4, name: "Product A", price: 50, stock: 20 },
  //   { id: 5, name: "Product B", price: 40, stock: 15 },
  //   { id: 6, name: "Product C", price: 30, stock: 25 }
  // ];

  const [productData, setProductData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/allproduct');
        setProductData(response.data); // Set product data in state
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProductData();
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  // Calculate index of the first and last item to display on current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productData.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle pagination button click
  // const handlePageChange = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };


  return (
    <div
      className="container py-4"
      style={{
        display: "grid",

        maxWidth: '100vw', // Set maximum width to viewport width
        width: '100%', // Take up full width of the viewport
        padding: '0 20px', // Optional: Add horizontal padding
        boxSizing: 'border-box' // Ensure padding is included in width calculation
      }}
    >
      <h1 className="mb-4">Dashboard</h1>

      <div
        className="row row-cols-1 row-cols-md-3 g-4"
        style={{

          height: '200px' // Ensure cards stretch vertically

        }}
      >
        {/* Total Users Card */}
        <div className="col">
          <div className="card h-100 bg-primary text-white">
            <div className="card-body">
              <h5 className="card-title">Total Users</h5>
              <LuUsers />
              <p className="card-text">1000</p>
            </div>
          </div>
        </div>

        {/* Revenue in Month Card */}
        <div className="col">
          <div className="card h-100 bg-success text-white">
            <div className="card-body">
              <h5 className="card-title">Revenue in Month</h5>
              <RiMoneyRupeeCircleFill />



              <p className="card-text">$10,000</p>
            </div>
          </div>
        </div>

        {/* Daily User Activity Card */}
        <div className="col">
          <div className="card h-100 bg-warning text-white">
            <div className="card-body">
              <h5 className="card-title">Daily User Activity</h5>
              <LuUsers />
              <p className="card-text">200 active users</p>
            </div>
          </div>
        </div>
      </div>

      {/* Table for Ecommerce Data */}
      {/* Table for Products and Available Stock */}
      <div className="mt-4">
        <h2>Products and Available Stock</h2>
        <div className="table-responsive mt-4">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Product Id</th>
                <th>Product Name</th>

                <th>Stock</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {/* Dynamically render table rows from productData array */}
              {currentItems.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>

                  <td>{product.quantity ? `${product.quantity} In stock` : 'Out of Stock'}</td>
                  <td>₹{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Pagination with arrows instead of page numbers */}
      <div className="mt-4 d-flex justify-content-end">
        <Pagination>
          {/* Previous Button */}
          <Pagination.Prev
            onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}
            disabled={currentPage === 1}
          />
          {/* Next Button */}
          <Pagination.Next
            onClick={() => setCurrentPage(currentPage < Math.ceil(productData.length / itemsPerPage) ? currentPage + 1 : currentPage)}
            disabled={currentPage === Math.ceil(productData.length / itemsPerPage)}
          />
        </Pagination>
      </div>
    </div>
  );
};

export default Dashboard;
