import React, { useState,useEffect } from "react";
import getDescendantProp from '../utils/getDescendantProp'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card,Typography, CardHeader, CardMedia, TextField } from "@material-ui/core/";

/*    useEffect(() => {
       setFilteredEmployees (
            employees.filter ( employee => {
                return employee.name.last.toLowerCase().includes(searchName.toLowerCase()) ||  employee.name.first.toLowerCase().includes(searchName.toLowerCase());
            }))
    }, [searchName, employees])*/

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

    const [filteredProjects, setFilteredProjects] =  useState(projects)
    const [searchTitle, setSerachTitle] = useState('');

    useEffect(() => {
       setFilteredProjects (
            projects.filter ( project => {
                return project.title.toLowerCase().includes(searchTitle.toLowerCase());
            }))
    }, [searchTitle, projects])

    return (
        <div className={classes.root}>
            <TextField style={{ padding: 10}} id="outlined-basic" label="Title Filter" variant="outlined" type="text" onChange={ e => setSerachTitle(e.target.value)} />
             <Grid container spacing={2} direction="row" xs={12} justify="flex-start" alignItems="flex-start"> 
             { filteredProjects.map((card) => (
            
                     <Grid item xs={3} style={{ backgroundColor: 'teal', justify: "center", margin: 2 }}   key={card._id}>
                        <Card style={{ paddingBottom: 10  }}>
                        <CardHeader style={{ textAlign: 'center' }} bgcolor="background.paper" title={card.title} />
                            {<CardMedia className="media"  image={card.imgLoc}  title={card.title} />}
                            <Typography style={{ margin: 20  }}> {card.description}</Typography>
                            {<button type="button" onClick={() => window.open(card.gitBtn)} >Repository </button>}
                            {card.deployBtn ? 
                                <button type="button"  onClick={() => window.open(card.deployBtn)} >Deployed </button> : null}
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

