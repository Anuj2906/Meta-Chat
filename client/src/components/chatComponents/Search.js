import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';

const Search = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Search for users``
    </Tooltip>
  );
  return (
    <Container d="flex">
        {/* <OverlayTrigger
          placement="bottom"
          delay={{ show: 100, hide: 400 }}
          overlay={renderTooltip}
          >
          <Button variant="outline-secondary" className="mt-2">
              <i class="fa-solid fa-magnifying-glass fa-fade"></i>
              &nbsp; Search
            </Button>
        </OverlayTrigger> */}
        <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
        </Form>
        <Nav className="justify-content-end flex-grow-1 pe-3">
            hello
        </Nav>
    </Container>
  )
}

export default Search;