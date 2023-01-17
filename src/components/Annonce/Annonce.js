import React from "react";
import { useState } from "react";
export default function Annonce() {
 
  const [titre, setTitre] = useState(null);
  const [description, setDescription] = useState(null);
  const [image, setImage] = useState(null);
  const [prix, setPrix] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);

  const Imagehandler = (e) => {
    setImage(e.target.files[0]);
  };

  const additem = async (e) => {
    e.preventDefault();
    var formdata = new FormData();
    formdata.append("Titre", titre);
    formdata.append("Description", description);
    formdata.append("Image", image);
    formdata.append("Email", email);
    formdata.append("Tel", phone);
    formdata.append("Prix", prix);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://localhost:3000/api/brouillon/store", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        alert("Brouillon added !");
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <div
      id="wrapper"
      style={{
        alignContent: "center",
        alignItems: "center",
        padding: "50px -100px",
      }}
    >
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <div class="container-fluid">
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 class="h3 mb-0 title">Ajout d'un article</h1>
            </div>
            <form onSubmit={additem}>
              
              <div className="form-group ">
                <label htmlFor="club">Titre</label>
                <input
                  type="text"
                  className="form-control"
                  id="club"
                  aria-describedby="Help"
                  placeholder="Entrer le titre"
                  onChange={(e) => setTitre(e.target.value)}
                  required
                />
              </div>
              <div className="form-group ">
                <label htmlFor="club">Description</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="club"
                  aria-describedby="Help"
                  placeholder="Entrer la description"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="form-group ">
                <label htmlFor="club">Price</label>
                <input
                  type="number"
                  className="form-control"
                  id="club"
                  aria-describedby="Help"
                  placeholder="Entrer le prix"
                  onChange={(e) => setPrix(e.target.value)}
                />
              </div>
              <div className="form-group ">
                <label htmlFor="club">Contact</label>
                <input
                  type="email"
                  className="form-control"
                  id="club"
                  aria-describedby="Help"
                  placeholder="Entrer le mail"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group ">
                <label htmlFor="club">Phone Number</label>
                <input
                  type="number"
                  className="form-control"
                  id="club"
                  aria-describedby="Help"
                  placeholder="Entrer le numero de telephone"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="form-group " style={{ margin: "20px 0px" }}>
                <label htmlFor="exampleFormControlFile1">Image</label>
                <input
                  type="file"
                  className="form-control-file"
                  id="exampleFormControlFile1"
                  onChange={Imagehandler}
                />
              </div>

              <div style={{ alignSelf: "center", paddingTop: "100px" }}>
                <button
                  type="submit"
                  className="btn-2 d-flex justify-content-center text-center"
                  style={{
                    backgroundColor: "greenyellow",
                    borderColor: "greenyellow",
                  }}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
        <footer class="sticky-footer bg-white"></footer>
      </div>
    </div>
  );
}
