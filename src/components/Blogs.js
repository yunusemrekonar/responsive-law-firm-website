import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { styled } from '@mui/material/styles';


const StyledCard = styled(Card)(({ theme }) => ({
  flex: '1 1 250px',
  maxWidth: 600,
  height: '50vh',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  overflow: 'hidden',
  margin: '0.5vh',
  '&:hover': { 
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
  },
  [theme.breakpoints.down('md')]: {
    flexBasis: '48%',
  },
  [theme.breakpoints.down('sm')]: {
    flexBasis: '100%',
  },
}));

const StyledMedia = styled(CardMedia)({
  height: '28vh',
  objectFit: 'cover',
});

const StyledButton = styled(Button)({
  backgroundColor: '#e0a96d',
  color: 'white',
  '&:hover': {
    backgroundColor: '#ddc3a5',
  },
});

const blogData = [
  { id: 1, title: "Ceza Hukuku", image: "/images/ceza_hukuku.jpg", description: "Ceza Hukuku: Ankara'da Bir Avukatın Perspektifinden" },
  { id: 2, title: "Aile Hukuku", image: "/images/aile_hukuku.jpg", description: "Aile ve Boşanma Hukuku: Ankara'da Bir Avukatın Perspektifinden" },
  { id: 3, title: "İş Hukuku", image: "/images/is_hukuku.jpg", description: "İş ve İşçi Hukuku: Ankara'da Bir Avukatın Perspektifinden" },
  { id: 4, title: "Ticaret Hukuku", image: "/images/ticaret_hukuku.jpg", description: "Ticaret Hukuku: Ankara'da Bir Avukatın Perspektifinden" },
];

export default function MultiActionAreaCard() {
  return (
    <div
      style={{
        backgroundColor: '#f4f4f4',
        position: 'relative',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1vh',
        background: '#f0f0f0',
        minHeight: '60vh',
        padding: '2vh',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Roboto, sans-serif',
      }}
    >
  
      <h2
        id='ankara-avukat-hukuki-makaleler'
        className='blogs'
        style={{
          position: 'relative',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          color: 'black',
          marginTop: '-1vh',
          marginBottom: '1vh',
          paddingBottom: '0.5vh',
          borderBottom: '2px solid #e0a96d',
          fontFamily: 'Roboto, sans-serif',
          padding: '10px 20px',
          fontSize: '3vh',
          width: '100%',
          textAlign: 'center',
        }}
      >
        Son Yayınlanan Makaleler
      </h2>


      {blogData.map(blog => (
        <StyledCard key={blog.id}>
          <CardActionArea>
            <StyledMedia
              component="img"
              image={blog.image}
              alt={blog.title}
            />
            <CardContent style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Typography gutterBottom variant="h5" style={{ fontWeight: 'bold', color: '#2c3e50' }}>
                {blog.title}
              </Typography>
              <Typography variant="body2" style={{ color: '#7f8c8d', flexGrow: 1 }}>
                {blog.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link to={`/blog/${blog.id}`} style={{ textDecoration: 'none' }}>
              <StyledButton size="small">
                Devamını Oku...
              </StyledButton>
            </Link>

            <Link to="/ankara-avukat-tum-makaleler" style={{ textDecoration: 'none', marginLeft: 'auto' }}>
              <button
                id="ankara-avukat-makalelere"
                style={{
                  color: 'black',
                  padding: '5px 10px',
                  fontSize: '0.9em',
                  backgroundColor: 'transparent',
                  border: '1px solid #e0a96d',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontFamily: 'Roboto, sans-serif',
                }}
              >
                TÜM MAKALELER
              </button>
            </Link>
          </CardActions>
        </StyledCard>
      ))}
    </div>
  );
}
