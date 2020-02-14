import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table';

const Styles = styled.div`
    .table-responsive {
        padding: 10px;
        margin-top: 20px;
        margin-bottom: 20px;
        border: 2px solid grey;
    }
`

export const MyOrganizations = () => (
    <Styles>

    <Container>

    <Table responsive>
        <thead>
            <tr>
            <th>#</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            </tr>
            <tr>
            <td>2</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            </tr>
            <tr>
            <td>3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            </tr>
        </tbody>
    </Table>
            
    </Container>
            
    </Styles>
)