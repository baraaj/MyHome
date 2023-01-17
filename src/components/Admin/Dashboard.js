import SideNav from '../Sidenav/Sidenav';
import '../Sidenav/Sidenav.css';
import {
  
  Link
} from "react-router-dom";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import 'bootstrap/dist/css/bootstrap.min.css';
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import axios from 'axios';
import { getRowIdFromRowModel } from '@mui/x-data-grid/hooks/features/rows/gridRowsUtils';
import {useState,useEffect} from 'react';
 import { useLocation, useParams } from "react-router-dom";  
export default function Dashboard() {
  const [selected, setSelected] =useState("");
  const [annonces, setAnnonces] =useState([]);
  const [approuved,setApprouved]=useState(false);
  const { id } = useParams();
  let ann=[];
  
  /** Function that will set different values to state variable
   * based on which dropdown is selected
   */
   const addAnnonce=  async(e,params)=>{
    setApprouved(true);
    e.preventDefault();
    var formdata = new FormData();
    formdata.append("Titre", params.row.Titre);
    formdata.append("Description", params.row.Description);
    formdata.append("Image", params.row.Image);
    formdata.append("Email", params.row.Email);
    formdata.append("Tel",params.row.Phone);
    formdata.append("Prix", params.row.Prix);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://localhost:3000/api/annonce/store", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        alert("Annonce added !");
      })
      .catch((error) => console.log("error", error));
  };
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 260 },
  {
    field: 'titre',
    headerName: 'Titre',
    width: 120,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 120,
    editable: true,
  },
  {
    field: 'prix',
    headerName: 'Prix',
    width: 80,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    //sortable: false,
    width: 120,
   
  },
  {
    field: 'phone',
    headerName: 'Phone',
    sortable: false,
    width: 120,
   
  },
  {
    field: 'image',
    headerName: 'Image',
    sortable: false,
    width: 120,
    renderCell:(params)=>{
      return(
        <>
      { console.log(params.row.image)}
     <img className='avatar'src={"http://localhost:3000/images/"+params.value} />
        </>
      )
    }

   
  },
 
  {
    field: 'action',
    headerName: 'Action',
    
    width: 120,
    renderCell:(params)=>{
      return(
        <>
        
       
        <button style={{backgroundColor:"greenyellow",borderColor:"greenyellow"}}>Approuved</button>
        <a onClick={(e)=>{deleteAnn(params.id,e)}}className="delete"><DeleteIcon style={{Color:'#444'}}/></a>
        </>
      )
    }
  }
];

  
  const rows =annonces.map((c) => {  
 
  return {
   
    id:c._id,
    titre:c.Titre,
    prix: c.Prix,
    email:c.Email,
    phone:c.Tel,
    description :c.Description,
    image:c.Image, 
     
  };});
   
    
  

   

 const getBrouillon=async ()=>{
  try {
    const res=await axios.get("http://localhost:3000/api/brouillon/"
    
    );
    
    const ann=res.data;
   setAnnonces(ann);
   
    
  } catch (err) {
    console.log(err);
  }
 };
 

  
  useEffect(()=>{
    
    getBrouillon();
    //console.log(annonces)
 },[]);
  const deleteAnn=async(id)=>{ 
    let annoncess=[];
   try {
     const res=await axios.delete(`http://localhost:3000/api/brouillon/${id}`)
     .then(res=>{
      console.log(annonces)
       annoncess =annonces.filter(item => item.id !== id);  
       console.log(annoncess);
       setAnnonces(annoncess);  
      alert("deleted")
     })
   } catch (err) {
     console.log(err);
   }
  };
 
 

 
  return (
    
    <div id="wrapper">

           

                <div id="content-wrapper" className="d-flex flex-column">
 
                    <div id="content">


                   
                        <div className="container-fluid">


                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 title">Liste des articles</h1>

                            </div>
                           

                       

                            <div className="container-lg">
                         
         
         
               
      <Box sx={{ width: '90%',height:'600px',paddingTop:'5rem',paddingRight:'5rem'}}>
      
     <DataGrid
       rows={rows}
       columns={columns}
       pageSize={5}
       rowsPerPageOptions={[5]}
       checkboxSelection
       disableSelectionOnClick
       experimentalFeatures={{ newEditingApi: true }}
     />
     </Box>
</div>     



                    </div>

                </div>
                <footer className="sticky-footer bg-white">
                
                </footer>

            </div> 

    </div >
  )
}
 