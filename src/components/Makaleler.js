import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import './Makaleler.css';

const blogData = [
  { id: 1, title: "Ceza Hukuku", image: "/images/ceza_hukuku.jpg", description: "Ceza Hukuku: Ankara'da Bir Avukatın Perspektifinden" },
  { id: 2, title: "Aile Hukuku", image: "/images/aile_hukuku.jpg", description: "Aile Hukuku: Ankara'da Bir Avukatın Perspektifinden" },
  { id: 3, title: "İş Hukuku", image: "/images/is_hukuku.jpg", description: "İş ve İşçi Hukuku: Ankara'da Bir Avukatın Perspektifinden" },
  { id: 4, title: "Ticaret Hukuku", image: "/images/ticaret_hukuku.jpg", description: "Ticaret Hukuku: Ankara'da Bir Avukatın Perspektifinden" },
  { id: 5, title: "İcra ve İflas Hukuk", image: "/images/icra_iflas_hukuku.jpg", description: "İcra ve İflas Hukuku: Ankara'da Bir Avukatın Perspektifinden" },
  { id: 6, title: "Gayrimenkul Hukuku", image: "/images/gayrimenkul_hukuku.jpg", description: "Gayrimenkul Hukuku: Ankara'da Bir Avukatın Perspektifinden" },
  { id: 7, title: "Tüketici Hukuku", image: "/images/tuketici_hukuku.jpg", description: "Tüketici Hukuku: Ankara'da Bir Avukatın Perspektifinden" },
  { id: 8, title: "Miras Hukuk", image: "/images/miras_hukuku.jpg", description: "Miras Hukuku: Ankara'da Bir Avukatın Perspektifinden" },
];

export default function Makaleler() {
  return (
    <div id='ankara-avukat-tum-makaleler' className="makaleler-container">

      <h2 className="makaleler-header">Tüm Makaleler</h2>

      {blogData.map(blog => (
        <Card key={blog.id} className="makaleler-card">
          <CardActionArea>
            <CardMedia
              component="img"
              className="makaleler-media"
              image={blog.image}
              alt={blog.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" className="makaleler-card-title">
                {blog.title}
              </Typography>
              <Typography variant="body2" className="makaleler-card-description">
                {blog.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link to={`/blog/${blog.id}`} style={{ textDecoration: 'none' }}>
              <Button size="small" className="makaleler-button">
                Devamını Oku...
              </Button>
            </Link>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
