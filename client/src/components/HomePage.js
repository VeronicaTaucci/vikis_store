import 'bootstrap-icons/font/bootstrap-icons.css';
import ProductsList from './ProductsList';

import './style.css'
const HomePage = () => {


  return (
    <>
  <div className="container ">
    <div className="row align-items-center">
      <div className="hero-image">
        <img src="/img/banner.png"  alt="xenon"/>
      </div>
      <div className="col">
        {/* <h1>Headline Text Goes Here</h1> */}
        <div className='slogan  d-flex justify-content-center align-items-center'>Adauga confort si stil in viata ta cu mobila si electrocasnice de la noi!</div>
      </div>
    </div>
  </div>


{/* <nav className="navbar navbar-light custom-navbar"> */}
<div className="container titlu">
    
    <hr />
        {/* <div className="col-md-12 col-lg-6 text-start text-lg-end d-flex justify-content-center" data-aos="fade-up" > */}
        <div id="filters" className="filters d-flex justify-content-center">
            <a href='www.google.com' data-filter="*" className="active">Toate</a>
            <a href='www.google.com' data-filter=".web">Mobila Moale</a>
            <a href='www.google.com' data-filter=".web">Mobila Tare</a>
            <a href='www.google.com' data-filter=".design">Electrocasnice</a>
            <a href='www.google.com' data-filter=".branding">Draperii</a>
            <a href='www.google.com' data-filter=".photography">Obiecte de iluminat</a>
        </div>
        <hr />
        {/* </div> */}
</div>
{/* </nav> */}

<main id="main">

<section className="section site-portfolio">
    <div className="container">
    <div className="row mb-5 align-items-center">
    <div className="row justify-content-center text-center mb-4">
        <div className="col-12 ">
        <p>Bine ai venit pe pagina noastră de mobilă și electrocasnice! Suntem bucuroși că ai ales să ne vizitezi și sperăm să-ți oferim cea mai bună experiență de cumpărături. Avem o gamă largă de produse pentru toate nevoile tale, de la mobilă modernă și elegantă până la electrocasnice performante și de calitate. Indiferent dacă îți dorești să redecorezi casa ta sau să îți actualizezi electrocasnicele, suntem aici să te ajutăm să găsești produsul potrivit.</p>
    </div>
    
        </div>
    </div>
    <div id="portfolio-grid" className="row no-gutter" data-aos="fade-up" data-aos-delay="200">
    <div className="col-2">
        <ProductsList />
    </div>
    <div className="col">
        <div className="row">
            <div className="item web col-sm-6 col-md-4 col-lg-4 mb-4">
                <a href="work-single.html" className="item-wrap fancybox">
                    <div className="work-info">
                        <h3>Dormitoare</h3>
                    </div>
                    <img alt='' className="img-fluid" src="/img/bedroom.jpg"/>
                </a>
            </div>
            <div className="item photography col-sm-6 col-md-4 col-lg-4 mb-4">
                <a href="work-single.html" className="item-wrap fancybox">
                    <div className="work-info">
                        <h3>Bucatarii</h3>
                    </div>
                    <img alt='' className="img-fluid" src="/img/kitchen.jpg"/>
                </a>
            </div>
            <div className="item branding col-sm-6 col-md-4 col-lg-4 mb-4">
                <a href="work-single.html" className="item-wrap fancybox">
                    <div className="work-info">
                        <h3>Dormitoare</h3>
                    </div>
                    <img alt='' className="img-fluid" src="/img/bedroom.jpg"/>
                </a>
            </div>
        </div>
        <div className="row">
            <div className="item design col-sm-6 col-md-4 col-lg-4 mb-4">
                <a href="work-single.html" className="item-wrap fancybox">
                    <div className="work-info">
                        <h3>Dormitoare</h3>
                    </div>
                    <img alt='' className="img-fluid" src="/img/bedroom.jpg"/>
                </a>
            </div>
            <div className="item photography col-sm-6 col-md-4 col-lg-4 mb-4">
                <a href="work-single.html" className="item-wrap fancybox">
                    <div className="work-info">
                        <h3>Dormitoare</h3>
                    </div>
                    <img alt='' className="img-fluid" src="/img/bedroom.jpg"/>
                </a>
            </div>
            <div className="item branding col-sm-6 col-md-4 col-lg-4 mb-4">
                <a href="work-single.html" className="item-wrap fancybox">
                    <div className="work-info">
                        <h3>Dormitoare</h3>
                    </div>
                    <img alt='' className="img-fluid" src="/img/bedroom.jpg"/>
                </a>
            </div>
        </div>
    </div>
</div>


    </div>
</section>
{/* <section className="section services">
    <div className="container">
  
    <div className="row">

        <div className="col-12 col-sm-6 col-md-6 col-lg-3">
        <i className="bi bi-card-checklist"></i>
        <h4 className="h4 mb-2">Mobila:</h4>
        <p>În magazinul nostru veți găsi o selecție vastă de mobilă modernă și clasică.</p>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-3">
        <i className="bi bi-binoculars"></i>
        <h4 className="h4 mb-2">Electrocasnice</h4>
        <p>Electrocasnice de ultimă generație și accesorii pentru casă și birou. </p>
        
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-3">
        <i className="bi bi-brightness-high"></i>
        <h4 className="h4 mb-2">Draperii și perdele</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit explicabo inventore.</p>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-3">
        <i className="bi bi-card-checklist"></i>
        
        <h4 className="h4 mb-2">Mobila:</h4>
        <p>În magazinul nostru veți găsi o selecție vastă de mobilă modernă și clasică.</p>
        </div>
     
    </div>
    </div>
</section> */}
<section className="section">
    <div className="container">
    <div className="row justify-content-center text-center mb-4">
        <div className="col-5">
        <h3 className="h3 heading">Companii</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit explicabo inventore.</p>
        </div>
    </div>
    <div className="row">
        <div className="col-4 col-sm-4 col-md-2">
        <a href='www.google.com' className="client-logo"><img alt='' src="/logos/ambianta.png"  className="img-fluid"/></a>
        </div>
        <div className="col-4 col-sm-4 col-md-2">
        <a href='www.google.com' className="client-logo"><img alt='' src="/logos/lg.jpeg"  className="img-fluid"/></a>
        </div>
        <div className="col-4 col-sm-4 col-md-2">
        <a href='www.google.com' className="client-logo"><img alt='' src="/logos/samsung.jpeg"  className="img-fluid"/></a>
        </div>
        <div className="col-4 col-sm-4 col-md-2">
        <a href='www.google.com' className="client-logo"><img alt='' src="/logos/ambianta.png"  className="img-fluid"/></a>
        </div>
        <div className="col-4 col-sm-4 col-md-2">
        <a href='www.google.com' className="client-logo"><img alt='' src="/logos/lg.jpeg"  className="img-fluid"/></a>
        </div>
        <div className="col-4 col-sm-4 col-md-2">
        <a href='www.google.com' className="client-logo"><img alt='' src="/logos/samsung.jpeg"  className="img-fluid"/></a>
        </div>

    </div>
    </div>
</section>

{/* 
<section className="section pt-0">
    <div className="container">

    <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
        <div className="swiper-wrapper">

        <div className="swiper-slide">
            <div className="testimonial-wrap">
            <div className="testimonial">
                <img alt='' src="assets/img/person_1.jpg"  className="img-fluid"/>
                <blockquote>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis
                    explicabo inventore.</p>
                </blockquote>
                <p>&mdash; Jean Hicks</p>
            </div>
            </div>
        </div>

        <div className="swiper-slide">
            <div className="testimonial-wrap">
            <div className="testimonial">
                <img alt='' src="assets/img/person_2.jpg"  className="img-fluid"/>
                <blockquote>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis
                    explicabo inventore.</p>
                </blockquote>
                <p>&mdash; Chris Stanworth</p>
            </div>
            </div>
        </div>

        </div>
        <div className="swiper-pagination"></div>
    </div>

    </div>
</section> */}

</main>
{/* <footer className="footer" role="contentinfo">
<div className="container">
    <div className="row">
    <div className="col-sm-6">
        <p className="mb-1">&copy; Copyright MyPortfolio. All Rights Reserved</p>
        <div className="credits">
        
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
    </div>
    <div className="col-sm-6 social text-md-end">
        <a href='www.google.com'><span className="bi bi-twitter"></span></a>
        <a href='www.google.com'><span className="bi bi-facebook"></span></a>
        <a href='www.google.com'><span className="bi bi-instagram"></span></a>
        <a href='www.google.com'><span className="bi bi-linkedin"></span></a>
    </div>
    </div>
</div>
</footer> */}

<a href='www.google.com' className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

<script src="assets/vendor/aos/aos.js"></script>
<script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
<script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
<script src="assets/vendor/php-email-form/validate.js"></script>

<script src="assets/js/main.js"></script>
    </>
  )
}

export default HomePage