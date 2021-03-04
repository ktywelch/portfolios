import React, { useState,useEffect } from "react";
import getDescendantProp from '../utils/getDescendantProp'

const EmployeeTable = (props) => {    
    
    const employees = props.employees.results;

    const [filteredEmployees, setFilteredEmployees] =  useState([])
    const [searchName, setSerachName] = useState('');
    const [sortedField, setSortedField] = useState(null);
    const [sortDirection, setSortDirection] = useState('descending');
    const [classBtnVal,setClassBtnval ] = useState({name: 'none', country: 'none', email: 'none'})


    // const filteredEmployees = employees.filter ( employee => {
    //     return employee.name.last.toLowerCase().includes(searchName.toLowerCase()) ||  employee.name.first.toLowerCase().includes(searchName.toLowerCase())
        
    //   })
    useEffect(() => {
       setFilteredEmployees (
            employees.filter ( employee => {
                return employee.name.last.toLowerCase().includes(searchName.toLowerCase()) ||  employee.name.first.toLowerCase().includes(searchName.toLowerCase());
            }))
    }, [searchName, employees])

    let sortedEmployees=[...filteredEmployees]

    if (sortedField !== null) {
    sortedEmployees.sort((a, b) => {
        let s_order=1; 
        sortDirection === 'ascending'?s_order=1:s_order=-1
        // because our data is hirearchical need to helper function to convert the string into an opject of descending keys
        let a_valField = getDescendantProp(a,sortedField);
        let b_valField = getDescendantProp(b,sortedField);
        //Making the sort function less calls these two lines replace the whole section
         let val = 0; 
         a_valField < b_valField ? val = -1 : val = 1;
         return val * s_order;
      });
    }
    

        return (
        <div className="container">
            <span>Filter by Name: </span> 
             <input type="text" placeholder="Enter Filter Criteria" onChange={ e => setSerachName(e.target.value)} />
            
              <table className='employee-table pagination' data-pagecount="4">
                  <thead>
                  <tr>     
                      <th></th>
                      <th>
                        <button type="button" onClick={() => {
                            setSortedField ('name.last');
                            sortDirection === 'ascending' ? setSortDirection('descending'): setSortDirection('ascending');
                             setClassBtnval({name: sortDirection, country: 'none', email: 'none'})
                             }}
                            className={classBtnVal.name}>
                         Name
                         </button>
                      </th>
                      <th><button type="button" onClick={() => {
                          setSortedField ('location.country')
                          sortDirection === 'ascending' ? setSortDirection('descending'): setSortDirection('ascending') 
                          setClassBtnval({name: 'none', country: sortDirection, email: 'none'})
                          }}
                          className={ classBtnVal.country}>
                         Country
                         </button>
                     </th>
                      <th><button type="button" onClick={() => {
                          setSortedField ('email');
                          sortDirection === 'ascending' ? setSortDirection('descending'): setSortDirection('ascending')
                          setClassBtnval({name: 'none', country: 'none', email: sortDirection})
                          }}
                          className={classBtnVal.email}>
                         Email
                         </button>
                     </th>
                  </tr>
                  </thead>
                  <tbody>
                      {
                          sortedEmployees.map((employee) => (    
                            <tr className='table-row' key={employee.login.uuid}>
                                <td>
                                    <img src={employee.picture.thumbnail} alt="random thumbnail of person"/>
                                </td>
                                <td>{employee.name.title} {employee.name.first} {employee.name.last}</td>
                                <td>{employee.location.country}</td>
                                <td>{employee.email}</td>
                                
                            </tr>
                        ))
                      }
                  </tbody>
              </table>
          </div>
 
      );
  }
  
      
   
 
export default EmployeeTable;

