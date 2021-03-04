import React, { useState,useEffect } from "react";
import getDescendantProp from '../utils/getDescendantProp'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, CardContent, Typography, CardHeader, CardMedia, Button } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  }
}));


const PortfolioCards = (props) => { 
    const classes = useStyles();   

    console.log(props);
    
    const projects = props.cards;

    const [filteredTitle, setFilteredTitle] =  useState([])
    const [searchTitle, setSerachTitle] = useState('');
    // const [sortedField, setSortedField] = useState(null);
    // const [sortDirection, setSortDirection] = useState('descending');
    // const [classBtnVal,setClassBtnval ] = useState({name: 'none', country: 'none', email: 'none'})

    // const filteredEmployees = employees.filter ( employee => {
    //     return employee.name.last.toLowerCase().includes(searchName.toLowerCase()) ||  employee.name.first.toLowerCase().includes(searchName.toLowerCase())
        
    //   })
    useEffect(() => {
       setFilteredTitle (
            projects.filter ( project => {
                return project.title.toLowerCase().includes(searchTitle.toLowerCase());
            }))
    }, [searchTitle, projects])

    //let sortedEmployees=[...filteredEmployees]

    // if (sortedField !== null) {
    // sortedEmployees.sort((a, b) => {
    //     let s_order=1; 
    //     sortDirection === 'ascending'?s_order=1:s_order=-1
    //     // because our data is hirearchical need to helper function to convert the string into an opject of descending keys
    //     let a_valField = getDescendantProp(a,sortedField);
    //     let b_valField = getDescendantProp(b,sortedField);
    //     //Making the sort function less calls these two lines replace the whole section
    //      let val = 0; 
    //      a_valField < b_valField ? val = -1 : val = 1;
    //      return val * s_order;
    //   });
    // }
    

    return (
        <div className={classes.root}>
            <span>Filter by Title: </span> 
             <input type="text" placeholder="Enter Filter Criteria" onChange={ e => setFilteredTitle(e.target.value)} />
             <Grid container spacing={2} direction="row" xs={12} justify="flex-start" alignItems="flex-start"> 
             { projects.map((card) => (
            
                     <Grid item xs={4} key={card._id}>
                        <Card>
                        <CardHeader title={card.title} />
                            {<CardMedia className="media" image={card.imgLoc}  title={card.title} />}
                                <p>{card.description}</p>
                            {<Button type="button" onClick={() => window.open(card.gitBtn)} >Repository </Button>}
                            {<Button type="button" onClick={() => window.open(card.deployBtn)} >Deployed </Button>}
                        </Card>
                    </Grid>


             )
             )
            } 
        </Grid> 
      </div>         
 
      );
  }
  
      
export default PortfolioCards;

