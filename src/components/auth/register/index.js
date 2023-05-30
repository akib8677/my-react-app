
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../service/user";
import logo from '../../../assets/auth-logo.jpg';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
} from 'mdb-react-ui-kit';
function Register() {
    const { ragister } = useAuth();
    const [isError, setIsError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const [payload, setPayload] = useState({
        email: '',
        password: ''
    })

    function handleOnChange(event) {
        setPayload(
            {
                ...payload,
                [event.target.name]: event.target.value
            }
        )

    }

   async function register(event) {
        event.preventDefault();
        try {
            setIsError('')
            setLoading(true)
            const res = await ragister(payload.email, payload.password);
            window.localStorage.setItem('token', res?.user.accessToken)
            navigate('/', { replace: true })
        } catch  {
            setIsError('Invalid credentials!')
        }
        setLoading(false)
    }



    return (
        <>
          <MDBContainer className="my-5 login-container" style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', width: '750px' }}>
              <MDBCard>
                  <MDBRow className='g-0'>
                      <MDBCol md='6' style={{ backgroundColor: 'rgb(52 35 90)' }}>
                          <MDBCardImage src={logo} alt="login form" style={{ borderRadius: '1rem', maxHeight: '550px' }} className='rounded-start w-100' />
                      </MDBCol>
                      <MDBCol md='6'>
                          <MDBCardBody className='d-flex flex-column '>
                              <div className='d-flex flex-row justify-content-center mt-2'>
                                  <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                                  <span className="h1 fw-bold mb-0">Register</span>
                              </div>
                              <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px', textAlign: 'center' }}>Register into your account</h5>
                              <MDBInput wrapperClass='mb-4' label='Email address' id='email' value={payload.email} onChange={handleOnChange} type='email' name="email" size="lg" />
                              <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" value={payload.password} onChange={handleOnChange} name="password" />
                              <p className="text-danger">{isError}</p>
                              <MDBBtn className="mb-4 px-5" color='dark' size='lg' onClick={register}>Ragister</MDBBtn>
                              <p className="mb-5 pb-lg-2 text-center" style={{ color: '#393f81' }}>have an account? <Link to="/auth/login" style={{ color: 'rgb(102 104 241)' }}>Login here</Link></p>
                              <div className='d-flex flex-row justify-content-center'>
                                  <a href="#!" className="small text-muted me-1">Terms of use.</a>
                                  <a href="#!" className="small text-muted">Privacy policy</a>
                              </div>
                          </MDBCardBody>
                      </MDBCol>
                  </MDBRow>
              </MDBCard>
          </MDBContainer>
        </>
    )
}

export default Register;