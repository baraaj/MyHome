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
  const [clbs, setClubs] =useState([]);
  
  const { id } = useParams();
  let clb=[];
  
  /** Function that will set different values to state variable
   * based on which dropdown is selected
   */
   
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 60 },
  {
    field: 'nom',
    headerName: 'Nom',
    width: 120,
    editable: true,
  },
  {
    field: 'activité',
    headerName: 'Activité',
    width: 120,
    editable: true,
  },
  {
    field: 'emplacement',
    headerName: 'Emplacement',
    width: 120,
    editable: true,
  },
  {
    field: 'région',
    headerName: 'Région',
    sortable: false,
    width: 120,
   
  },
  {
    field: 'gouvernement',
    headerName: 'Gouvernement',
    sortable: false,
    width: 120,
   
  },
  {
    field: 'logo',
    headerName: 'Logo',
    sortable: false,
    width: 120,
    renderCell:(params)=>{
      return(
        <>
       
     <img className='avatar'src={"http://localhost:3000/"+params.row.logo} />
        </>
      )
    }

   
  },
  {
    field: 'temps',
    headerName: 'Temps',
    sortable: false,
    width: 430,
     
    type: 'string',
  
   
  },
  {
    field: 'action',
    headerName: 'Action',
    
    width: 120,
    renderCell:(params)=>{
      return(
        <>
       <Link to={"/modifclubs/"+params.id} state={{club:params.row}}>
        <a className="edit"><EditIcon style={{Color:'#444'}}/></a>
        </Link>
        <a className="delete"><DeleteIcon style={{Color:"#555"}}/> </a>
        </>
      )
    }
  }
];

  
  const rows =clbs.map((c) => { 
 
  return {
    
    id:c._id,
    nom:c.nom_club,
    gouvernement: c.gouvernement,
    emplacement:c.emplacement,
    temps:c.temps.map(cc=>{
      return cc.jour.toString()+""+cc.horaire.toString()+"\r"
  }),
    région:c.region,
    logo:c.logo,
    activité:c.activite.map(a=>{return a.toString()+""})
   
  };});
   
    
  

   

 /* const getClubs=async ()=>{
  try {
    const res=await axios.get("/clubs"
    
    );
    const club=res.data.clubs;
   setClubs(club);
   
    
  } catch (err) {
    console.log(err);
  }
 };
 const find=()=>{
     
  axios.get("/clubs/findgouvernement/"+querygouv+"/"+queryregion)
  .then(response => {
    const clubs = response.data;
    
    setClubs(clubs);
   
  
   
  
  })};
  
  useEffect(()=>{
    
    getClubs();
   
 },[]);
  const deleteClub=async(id)=>{ 
    let clubs=[];
   try {
     const res=await axios.delete(`/clubs/${id}`)
     .then(res=>{

       clubs =clbs.filter(item => item.id !== id);  
       console.log(clubs);
       setClubs(clubs);  
      alert("deleted")
     })
   } catch (err) {
     console.log(err);
   }
  };
 
 
*/
 
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
 