
import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import NavbarAcceuil from './NavbarAcceuil';
import CheckIcon from '@material-ui/icons/Check';
import Footer from './pages/Footer/Footer';
import { isAuthenticated } from '../helpers/auth';
import {  useHistory } from 'react-router-dom';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.gray,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, starter, market, pioneer, gold) {
  return { name, starter, market, pioneer, gold };
}



const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function FrontPricing() {
  const classes = useStyles();

  let history = useHistory();
  const redirected= ()=>{
    localStorage.setItem('redirected','/process')
  }
  
  const lien =()=>{
    
    if (isAuthenticated() && isAuthenticated().role===0){
      history.push('/process')
      
    }else{
      history.push('/signup')
    }
  }
  
  const rows = [
    createData('Nom de domaine et Hébergement + Adresses e-mail', <CheckIcon/>, <CheckIcon/>, <CheckIcon/>, <CheckIcon/>),
    createData('Conception et mise en œuvre de la boutique en ligne', <CheckIcon/>, <CheckIcon/>,<CheckIcon/>, <CheckIcon/>),
    createData('Gestion des commandes et des réclamations', <CheckIcon/>, <CheckIcon/>, <CheckIcon/>, <CheckIcon/>),
    createData('Formation et Coaching mensuels', <CheckIcon/>, <CheckIcon/> ),
    createData('Gestion des livraisons',  <CheckIcon style={{color:"rgba(0, 0, 0, 0.00)"}}/> , <CheckIcon style={{color:"rgba(0, 0, 0, 0.00)"}} />, <CheckIcon/>, <CheckIcon/>),
    createData('Référencement SEO', <CheckIcon style={{color:"rgba(0, 0, 0, 0.00)"}}/> , <CheckIcon style={{color:"rgba(0, 0, 0, 0.00)"}}/> ,<span>3 mots clés</span>, <span>10 mots clés + SMO</span>),
    createData('Création et envoi de newsletters', <CheckIcon style={{color:"rgba(0, 0, 0, 0.00)"}}/> , <span>Semestriel</span>, <span>Trimestriel</span>, <span>Mensuel</span>),
    createData('Community Management', <CheckIcon style={{color:"rgba(0, 0, 0, 0.00)"}}/>, <CheckIcon style={{color:"rgba(0, 0, 0, 0.00)"}}/>, <CheckIcon />, <CheckIcon />),
    createData('- Commentaires et messagerie', <CheckIcon style={{color:"rgba(0, 0, 0, 0.00)"}}/>, <CheckIcon style={{color:"rgba(0, 0, 0, 0.00)"}}/>, <CheckIcon style={{color:"rgba(0, 0, 0, 0.00)"}}/>, <CheckIcon style={{color:"rgba(0, 0, 0, 0.00)"}}/>),
    createData('- publications sur les réseaux sociaux', <CheckIcon style={{color:"rgba(0, 0, 0, 0.00)"}}/>, <CheckIcon style={{color:"rgba(0, 0, 0, 0.00)"}}/>, <span>4 par semaine</span>, <span>10 par semaine</span>),
    createData('Préparation et gestion des campagnes promotionnelles (1 produit ou une marque)', <CheckIcon style={{color:"rgba(0, 0, 0, 0.00)"}}/>, <span>1 promo chaque semestre</span>, <span>1 promo chaque trimestre</span>, <span>1 promo chaque mois</span>),
    createData('Mises à jour de la boutique', <CheckIcon style={{color:"rgba(0, 0, 0, 0.00)"}}/>, <span>1 mise à jour semestrielle</span>, <span>1 mise à jour trimestrielle</span>, <span>1 mise à jour trimestrielle</span>),
    createData('Assistance Technique', <span>Mail</span>,<span>Mail et téléphone</span> , <span>Mail et téléphone</span>,<span>Mail et téléphone</span>),
    createData('' ,
    <button className="btn btn-hello btn-sm" onClick={redirected,lien}>Démarer</button> ,
    <button className="btn btn-hello btn-sm" onClick={redirected,lien}>Démarer</button> ,
    <button className="btn btn-hello btn-sm" onClick={redirected,lien}>Démarer</button> ,
    <button className="btn btn-hello btn-sm" onClick={redirected,lien}>Démarer</button>
    )
  ];

  return (
    <>
    <div>
    <NavbarAcceuil/>
    <section className="o-hidden" >
    <section className="page-titlee o-hidden text-center"  style={{background:"#27558e",height:"30px"}}>
    <div className="d-none d-md-block" style={{marginTop:"-154px"}}><img className="img-fluid" src="deco/images/bg/08.png" alt="" /></div>
    
    <div className="container">
    <div className="row align-items-center">
    <div class="col-md-12">
    
    
    </div>
    </div>
    </div>
    </section>
    <div className="container">
  <div className="row align-items-center">
  <div class="col-md-12">
<h1 style={{marginTop:"29px",marginBottom:"29px"}}>Choisissez votre plan</h1>

</div>
  </div>
</div>

</section>
<div className="container">
    <TableContainer component={Paper} style={{marginBottom:"70px"}}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell style={{fontSize:"30px"}}> Nos offres</StyledTableCell>
            <StyledTableCell align="center">Starter<br/><span style={{color:"rgb(39, 85, 142)"}}>300Dt/M</span></StyledTableCell>
            <StyledTableCell align="center">Market Growth <br/><span style={{color:"rgb(39, 85, 142)"}}>800Dt/M</span></StyledTableCell>
            <StyledTableCell align="center">Pioneer<br/><span style={{color:"rgb(39, 85, 142)"}}>1500Dt/M</span></StyledTableCell>
            <StyledTableCell align="center">Gold <br/><span style={{color:"rgb(39, 85, 142)"}}>2000Dt/M</span></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.starter}</StyledTableCell>
              <StyledTableCell align="center">{row.market}</StyledTableCell>
              <StyledTableCell align="center">{row.pioneer}</StyledTableCell>
              <StyledTableCell align="center">{row.gold}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    <Footer/>
    </div>
    </>
  );
}
















