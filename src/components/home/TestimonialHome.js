import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TestimonialHome = () => {
  // Jeu de données pour les témoignages
  const testimonials = [
    {
        id: 1,
        name: "Jean Dupont",
        position: "Promoteur immobilier",
        image: "https://cdn-icons-png.freepik.com/512/8742/8742495.png",
        description:
          "Ce site m'a permis de trouver rapidement des collaborateurs compétents pour mes projets immobiliers. Une expérience fluide et très satisfaisante.",
      },
      {
        id: 2,
        name: "Marie Durand",
        position: "Investisseur",
        image: "https://cdn-icons-png.freepik.com/512/8742/8742495.png",
        description:
          "Grâce à cette plateforme, j'ai pu entrer en contact avec des promoteurs fiables et des opportunités d'investissement intéressantes. Je recommande vivement.",
      },
      {
        id: 3,
        name: "Paul Morel",
        position: "Chef d'entreprise",
        image: "https://cdn-icons-png.freepik.com/512/8742/8742495.png",
        description:
          "En tant que chef d'entreprise, j'ai trouvé des collaborateurs qualifiés pour m'accompagner dans mes projets. Une solution indispensable pour les entrepreneurs.",
      },
      {
        id: 4,
        name: "Claire Bernard",
        position: "Collaboratrice",
        image: "https://cdn-icons-png.freepik.com/512/8742/8742495.png",
        description:
          "Travailler avec des promoteurs et investisseurs via cette plateforme a été une excellente expérience. Un service efficace et intuitif.",
      },
  ];

  // Configuration de la réactivité du carrousel
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // Nombre d'éléments à faire défiler par clic
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <section
      className="testimonial-1 bg-image"
      style={{ background: `url(assets/img/bg-simple.jpg)` }}
      data-overlay="6"
    >
      <div className="container">
        <div className="row">
          <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000}>
            {/* Boucle à travers les données pour afficher chaque témoignage */}
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-detail">
                {/* Image du témoignage */}
                <div className="pic">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                {/* Texte du témoignage */}
                <p className="user-description">{testimonial.description}</p>
                {/* Nom et poste de la personne */}
                <h3 className="user-testimonial-title">{testimonial.name}</h3>
                <span className="user-post">{testimonial.position}</span>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialHome;
