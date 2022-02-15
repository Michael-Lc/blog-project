import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import NavBar from '../components/navbar';
import PostCard from '../components/posts/PostCard';
import { CreateUserLink } from '../utils/FormLinks';

const data = {
  username: "John Doe",
  userImage: "",
}

const postData = [
  {
    postId: 0,
    postTitle: "Best of Paris in 7 Days Tour",
    postImage: "",
    postAuthor: "John Doe",
    postDate: new Date().toDateString(),
    postContent: "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
  },
  {
    postId: 1,
    postTitle: "Best of Ireland in 14 Days Tour",
    postImage: "",
    postAuthor: "John Doe",
    postDate: new Date().toDateString(),
    postContent: "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!",
  },
  {
    postId: 2,
    postTitle: "Best of Salzburg & Vienna in 8 Days Tour",
    postImage: "",
    postAuthor: "John Doe",
    postDate: new Date().toDateString(),
    postContent: "Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring this region's rich history and culture to life in festive Munich, Baroque Salzburg, sparkling Lake Hallstatt, monastic Melk, the blue Danube, and royal Vienna — with cozy villages and alpine vistas all along the way. Join us for the Best of Munich, Salzburg & Vienna in 8 Days!",
  },
  {
    postId: 3,
    postTitle: "Best of Rome in 7 Days Tour",
    postImage: "",
    postAuthor: "John Doe",
    postDate: new Date().toDateString(),
    postContent: "Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient Rome's Colosseum, Forum, Pantheon, and nearby Ostia Antica. From the Renaissance and Baroque eras, you'll marvel at St. Peter's Basilica, the Vatican Museums, Sistine Chapel, and Borghese Gallery. You'll also enjoy today's Rome, with neighborhood walking tours, memorable restaurants, and time to explore on your own. Join us for the Best of Rome in 7 Days!",
  },
  {
    postId: 4,
    postTitle: "Best of Poland in 10 Days Tour",
    postImage: "",
    postAuthor: "John Doe",
    postDate: new Date().toDateString(),
    postContent: "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, you'll experience mighty Malbork castle, the cobbly-cute village of Toruń, Poland's contemporary capital of Warsaw, the spiritual Jasna Góra Monastery, and charming Kraków — Poland's finest city. In this land of surprises — so trendy and hip, yet steeped in history — there's so much to discover. Join us for the Best of Poland in 10 Days!",
  },
];

export default function User() {
  const [user, setUser] = useState(data);
  const [posts, setPosts] = useState(postData);
  const userLink = CreateUserLink(user.username)

  return (
    <Container fluid>
      <NavBar />
      <Row className='justify-content-around'>
        <Col md="6">
          <Container>
            <div className="d-flex flex-column">
              {
                posts && posts.map(post => <PostCard post={post} key={post.postId} />)
              }
            </div>
          </Container>
        </Col>
        <Col md="3" className='mt-5 pt-5'>
          <Row>
            <Col sm='4'>
              <img src="" alt="" className="d-block w-100 h-100 rounded-circle" />
            </Col>
            <Col sm='8'>
              <Link to={`/${userLink}`} className='d-block'><b>{user.username}</b></Link>
              <span className="d-block text-uppercase font-weight-light">200 followers</span>
            </Col>
          </Row>
          <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti saepe mollitia tempora ab soluta quisquam deleniti, dicta est ducimus! Obcaecati enim dicta perferendis! Vel, distinctio enim. Ullam, odio earum. Accusamus.</p>
        </Col>
      </Row>
    </Container>
  );
}
