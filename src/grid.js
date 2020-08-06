// import React, { useEffect, useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';


// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//         margin: '0 auto',
//         marginTop: 50,
//         maxWidth: 1000,
//     },
//     paper: {
//         padding: theme.spacing(2),
//         textAlign: 'center',
//         color: theme.palette.text.secondary,
//     },
// }));

// export default function CenteredGrid() {

//     const [globalData, setGlobalData] = useState({});

//     useEffect(() => {

//         async function getData() {
//             const response = await fetch("https://api.thevirustracker.com/free-api?global=stats")
//             let data = await response.json();
//             // if we want this will remove from APi
//             delete data.results[0].source;
//             console.log(data.results[0]);
//         }
//         getData();
//     }, [])



//     const classes = useStyles();

//     return (
//         <div className={classes.root}>
//             <Grid container spacing={3}>
                
//                 {Object.keys(globalData).map((keys, ind) => {
//                     return (
//                         <Grid item xs={12} sm={4} key={ind}>
//                             <Paper className={classes.paper} elevation={3}>
//                                 {keys}
//                             </Paper>
//                         </Grid>
//                     )
//                 })}
//             </Grid>
//         </div>
//     );
// }
