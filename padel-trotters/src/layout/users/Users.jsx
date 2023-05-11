import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userData } from "../../services/userSlice";
import { viewAllUsers } from "../../services/apiCalls";
import { addChoosen } from "../../services/detailSlice";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import ListGroup from "react-bootstrap/ListGroup";
import './Users.css';

export const Users = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const credencialesRdx = useSelector(userData);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (users.length === 0) {
      viewAllUsers(credencialesRdx.credentials.token)
        .then((resultado) => {
          setUsers(resultado.data.data);
        })
        .catch((error) => console.log(error));
    }
  }, [users]);

  const selected = (persona) => {
    dispatch(addChoosen({ choosenObject: persona }));
    setTimeout(() => {
      navigate("/detail");
    }, 500);
  };

  return (
    <Container fluid>
      <Row className="usersDesign align-items-center d-flex justify-content-center text-center">
        {users.length > 0 ? (
          <Col sm={4} lg={2} className="mt-4">
            <h2 className="mb-4">LISTA DE USUARIOS</h2>
            {users.map((persona) => {
              return (
                <ListGroup className="usersDiv" key={persona.id}>
                  <ListGroup.Item
                    as="li"
                    onClick={() => selected(persona)}
                    action
                    className="usersDiv"
                  >
                    {persona.name} {persona.surname}
                  </ListGroup.Item>
                </ListGroup>
              );
            })}
          </Col>
        ) : (
          <div>
            <Spinner animation="border" variant="info" />
            <span>Cargando...</span>
          </div>
        )}
      </Row>
    </Container>
  );
};
