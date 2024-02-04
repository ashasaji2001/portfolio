import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { blueGrey } from '@mui/material/colors'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { motion } from 'framer-motion';
import img1 from '../Assets/Screenshot 2024-01-29 001733.png'
import img2 from '../Assets/Screenshot 2024-01-31 113925.png'
import img3 from '../Assets/Screenshot 2024-01-31 115652.png'
import img4 from '../Assets/Screenshot 2024-01-31 123844.png'
import img5 from '../Assets/Screenshot 2024-02-04 005705.png'
import img6 from '../Assets/Screenshot 2024-02-04 010219.png'
import img7 from '../Assets/Screenshot 2024-02-04 010809.png'
import img8 from '../Assets/Screenshot 2024-02-04 010922.png'
import './Header.css'
function Projects() {
  return (
    <div id="projects">
         <Box>
   
   <h3 className='text-center text-primary'>PROJECTS</h3>

   <Grid container  >
     
         <Grid item xs={12} md={3} >
     <motion.div whileInView={{x:0,opacity:1,scale:.9}} style={{width:'100%'}} initial={{x:-100,opacity:0,scale:0.8}} transition={{duration:.4}}>
         <motion.div whileHover={{scale:1.1}} initial={{scale:1}}>
               <Card sx={{ width:'100%',maxWidth: '100%' }}>
                 <CardMedia
                   component="img"
                   height={260}
                   sx={{objectFit:'contain',bgcolor:blueGrey[50],py:3}}
                   image={img1}
                   title="Contact App"
                   />
                 <CardContent>
                   <Typography gutterBottom variant="h5" letterSpacing={1} textAlign={'center'} fontWeight={700} component="div">
                    Contact App
                   </Typography>
                 </CardContent>
               </Card>
         </motion.div>
     </motion.div>
         </Grid>
     
     <Grid item xs={12} md={3}>
       <motion.div whileInView={{x:0,opacity:1,scale:.9}}  initial={{x:-100,opacity:0,scale:0.8}} transition={{duration:.4,delay:0.25}}>
         <motion.div whileHover={{scale:1.1}} initial={{scale:1}}>
       <Card sx={{ width:'100%',maxWidth: '100%' }}>
         <CardMedia
           component="img"
           height={260}
           sx={{objectFit:'contain',bgcolor:blueGrey[50],py:3}}
           image={img2}
           title="Calculator"
           />
         <CardContent >
           <Typography gutterBottom variant="h5" letterSpacing={1} textAlign={'center'} fontWeight={700} component="div">
            Budget Calculator
           </Typography>
         </CardContent>
       </Card>
       </motion.div>
     </motion.div>
     </Grid>
     
     <Grid item xs={12} md={3}>
       <motion.div whileInView={{x:0,opacity:1,scale:.9}} style={{width:'100%'}} initial={{x:-100,opacity:0,scale:0.8}} transition={{duration:.4,delay:0.50}}>
         <motion.div whileHover={{scale:1.1}} initial={{scale:1}}>
       <Card sx={{ width:'100%',maxWidth: '100%' }}>
         <CardMedia
           component="img"
           height={260}
           sx={{objectFit:'contain',bgcolor:blueGrey[50],py:3}}
           image={img3}
           title="Javascript"
           />
         <CardContent >
           <Typography gutterBottom variant="h5" letterSpacing={1} textAlign={'center'} fontWeight={700} component="div">
            Online Bank
           </Typography>
         </CardContent>
       </Card>
       </motion.div>
     </motion.div>
     </Grid>
           
     
     <Grid item xs={12} md={3}>
       <motion.div whileInView={{x:0,opacity:1,scale:.9}} style={{width:'100%'}} initial={{x:-100,opacity:0,scale:0.8}} transition={{duration:.4,delay:.75}}>
         <motion.div whileHover={{scale:1.1}} initial={{scale:1}}>
       <Card sx={{ width:'100%',maxWidth: '100%' }}>            
             <CardMedia
               component="img"
               height={260}
               sx={{objectFit:'contain',bgcolor:blueGrey[50],py:3}}
               image={img4}
               title="Bootstrap"
               />
         <CardContent >
           <Typography gutterBottom variant="h5" letterSpacing={1} textAlign={'center'} fontWeight={700} component="div">
            Discount Calculator
           </Typography>
         </CardContent>
       </Card>
       </motion.div>
     </motion.div>
     </Grid>
     
     <Grid item xs={12} md={3}>
       <motion.div whileInView={{x:0,opacity:1,scale:.9}} style={{width:'100%'}} initial={{x:-100,opacity:0,scale:0.8}} transition={{duration:.4,delay:1}}>
         <motion.div whileHover={{scale:1.1}} initial={{scale:1}}>
       <Card sx={{ width:'100%',maxWidth: '100%' }}>
         <CardMedia
           component="img"
           height={260}
           sx={{objectFit:'contain',bgcolor:blueGrey[50],py:3}}
           image={img5}
           title="Material ui"
           />
         <CardContent >
           <Typography gutterBottom variant="h5" letterSpacing={1} textAlign={'center'} fontWeight={700} component="div">
            Movie Search App
           </Typography>
         </CardContent>
       </Card>
       </motion.div>
     </motion.div>
     </Grid>

     <Grid item xs={12} md={3}>
       <motion.div whileInView={{x:0,opacity:1,scale:.9}} style={{width:'100%'}} initial={{x:-100,opacity:0,scale:0.8}} transition={{duration:.4,delay:1.25}}>
         <motion.div whileHover={{scale:1.1}} initial={{scale:1}}>
       <Card sx={{ width:'100%',maxWidth: '100%' }}>
         <CardMedia
           component="img"
           height={260}
           sx={{objectFit:'contain',bgcolor:blueGrey[50],py:3}}
           image={img6}
           title="React"
           />
         <CardContent>
           <Typography gutterBottom variant="h5" letterSpacing={1} textAlign={'center'} fontWeight={700} component="div">
            EMS Application
           </Typography>
         </CardContent>
       </Card>
       </motion.div>
     </motion.div>
     </Grid>

     <Grid item xs={12} md={3}>
       <motion.div whileInView={{x:0,opacity:1,scale:.9}} style={{width:'100%'}} initial={{x:-100,opacity:0,scale:0.8}} transition={{duration:.4,delay:1.25}}>
         <motion.div whileHover={{scale:1.1}} initial={{scale:1}}>
       <Card sx={{ width:'100%',maxWidth: '100%' }}>
         <CardMedia
           component="img"
           height={260}
           sx={{objectFit:'contain',bgcolor:blueGrey[50],py:3}}
           image={img7}
           title="React"
           />
         <CardContent>
           <Typography gutterBottom variant="h5" letterSpacing={1} textAlign={'center'} fontWeight={700} component="div">
            Restaurant App
           </Typography>
         </CardContent>
       </Card>
       </motion.div>
     </motion.div>
     </Grid>


     <Grid item xs={12} md={3}>
       <motion.div whileInView={{x:0,opacity:1,scale:.9}} style={{width:'100%'}} initial={{x:-100,opacity:0,scale:0.8}} transition={{duration:.4,delay:1.25}}>
         <motion.div whileHover={{scale:1.1}} initial={{scale:1}}>
       <Card sx={{ width:'100%',maxWidth: '100%' }}>
         <CardMedia
           component="img"
           height={260}
           sx={{objectFit:'contain',bgcolor:blueGrey[50],py:3}}
           image={img8}
           title="React"
           />
         <CardContent>
           <Typography gutterBottom variant="h5" letterSpacing={1} textAlign={'center'} fontWeight={700} component="div">
            Weather App
           </Typography>
         </CardContent>
       </Card>
       </motion.div>
     </motion.div>
     </Grid>
   </Grid>
 </Box>
    </div>
  )
}

export default Projects