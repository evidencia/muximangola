import { Container } from "reactstrap";

import profileImg from '../assets/images/ava-3.jpg'
import '../styles/profile.css'
import { CommonSection } from "../components/UI/CommonSection";


export function Profile() {
  return (
    <div>
       <CommonSection title="Perfil" />

       <Container>
        <div className="row gutters my-5">
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div className="card ">
              <div className="card-body">
                <div className="account-settings">
                  <div className="user-profile">
                    <div className="user-avatar">
                      <img src={profileImg} alt="profile" />
                    </div>
                    <h5 className="user-name">Evidencia David</h5>
                    <h6 className="user-email">evidenciadaavid2016@gmail.com</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div className="card h-100">
              <div className="card-body">
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 className="mb-3">Personal Details</h6>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-3">
                    <div className="form-group">
                      <label form="fullName">Nome completo</label>
                      <input type="text" className="form-control mt-1" id="fullName"  value="Evidencia David" />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label form="eMail">Email</label>
                      <input type="email" className="form-control mt-1 mb-3" id="eMail" value="evidenciadavid2016@gmail.com" />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label form="phone">Telefone</label>
                      <input type="text" className="form-control mt-1 mb-3" id="phone" value="+244 944113252" />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label form="password">Senha</label>
                      <input type="password" className="form-control mt-1" id="password" value="12345" />
                    </div>
                  </div>
                </div>
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 className="mt-4 mb-3">Address</h6>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-3">
                    <div className="form-group">
                      <label form="Street">Street</label>
                      <input type="name" className="form-control mt-1" id="Street" placeholder="Enter Street" />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label form="ciTy">City</label>
                      <input type="name" className="form-control mt-1" id="ciTy" placeholder="Enter City" />
                    </div>
                  </div>
                </div>
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="text-right mt-4">
                      <button type="button" id="submit" name="submit" className="btn btn-color">Editar perfil</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </div>
    
  )
}
