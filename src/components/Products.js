import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCircle, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Products() {
    const[products,setProducts]=useState([])
    useEffect(()=>{
        handleGetProducts();
    },[]);
    const handleGetProducts=()=>{
        axios.get("http://localhost:9000/products").then(resp=>{
            const products=resp.data;
            setProducts(products);

        }).catch(err=>{
            console.log(err);
        })
    }
   const handleDeleteProduct=(product)=>{
    const newProducts=products.filter((p)=>p.id!=product.id);
    setProducts(newProducts);
   }
  return (
    <div className="p-3">
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                         <table className="table">
                            <thead>
                                <tr >
                                   <th>ID</th> 
                                   <th>Name</th>
                                   <th>Price </th>
                                   <th>Checked</th>
                                   <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map(product=>(
                                        <tr key={product.id}>
                                            <td>{product.id}
                                            </td><td>{product.name}</td>
                                            <td>{product.price}</td>
                                            <td>
                                            <button onClick={()=>handleCheckedProduct(product)} className="btn btn-outline-success">
                                                <FontAwesomeIcon icon={product.checked? faCheckCircle:faCircle}>

                                                </FontAwesomeIcon>
                                            </button>
                                            </td>
                                            <td>
                                            <button onClick={()=>handleDeleteProduct(product)} className="btn btn-outline-danger">
                                                <FontAwesomeIcon icon={faTrash}>

                                                </FontAwesomeIcon>
                                            </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>

                        </table>
                     </div>
                </div>
            </div>

        </div>
        
    </div>
  )
}
