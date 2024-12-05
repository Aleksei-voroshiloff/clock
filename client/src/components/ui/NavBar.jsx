import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export default function NavBar() {
return (
<Navbar bg="dark" data-bs-theme="dark">
<Container>
<Navbar.Brand href="/">logo</Navbar.Brand>
<Nav className="me-auto">
{/* <Nav.Link href="#home">ссылка на карусель</Nav.Link>
<Nav.Link href="#features">ссылка на 3д модель</Nav.Link> */}
{/* <Nav.Link href="#pricing"> ссылка на на обратную связь</Nav.Link> */}
</Nav>
</Container>
</Navbar>
);
}



//     <Navbar bg="light" data-bs-theme="light">
//       <Container className="navbar">
//         <Navbar.Brand>logo</Navbar.Brand>
//         <Nav className="me-auto">
//           <NavLink className="nav-link" to={"/"}>
//             ссылка на карусель
//           </NavLink>
//           <NavLink className="nav-link" to={"/"}>
//             ссылка на 3д модель
//           </NavLink>
//           <NavLink className="nav-link" to={"/"}>
//             ссылка на на обратную связь
//           </NavLink>
//         </Nav>
//       </Container>
//     </Navbar>
//   );
// }
