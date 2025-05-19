const HeroSection = () => {
    return (
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVES THE BEST</h1>
                <p>
                    We design shoes that elevate your style while delivering all-day support. Whether you're conquering the boardroom, the trail, or the city streets, our footwear is built to go wherever life takes you.
Explore our collection of premium sneakers, formal shoes, and outdoor gear — all engineered with precision, passion, and performance in mind.
                </p>

                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>

                <div className="shopping">
                    <p>Also Available On</p>

                    <div className="brand-icons">
                        <img src="/Images/amazon.png" alt="amazon-logo" />
                        <img src="/Images/flipkart.png" alt="flipkart-logo" />
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="/Images/hero-image.png" alt="hero-image-logo" />
            </div>
        </main>
    );
};

export default HeroSection;