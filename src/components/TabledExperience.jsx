import React,{useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const TabledExperience = (props) =>{
    const {experiences} = props;
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="table experience">
            <TableHead data-aos="zoom-out-down">
                <TableRow >
                <TableCell 
                sx={{ fontSize: '1.2rem',
                fontWeight: 'bold',
                padding: '16px',
                }} align="center">
                    Enterprise
                </TableCell>
                <TableCell 
                sx={{ fontSize: '1.2rem',
                fontWeight: 'bold',
                padding: '16px',
                }} align="center">
                    Position
                </TableCell>
                <TableCell 
                sx={{ fontSize: '1.2rem',
                fontWeight: 'bold',
                padding: '16px',
                }} align="center">
                    Time
                </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {experiences.map((row,index) => (
                <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell data-aos="zoom-out-down" align="center">{row.Enterprise}</TableCell>
                    <TableCell data-aos="zoom-out-down" align="center">{row.Position}</TableCell>
                    <TableCell data-aos="zoom-out-down" align="center">{row.Time}</TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    );
}
export default TabledExperience;