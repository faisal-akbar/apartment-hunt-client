import React, { useEffect, useState } from 'react';
import Apartments from '../Apartments/Apartments';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import Services from '../Services/Services';
import PreLoader from '../../PreLoader/PreLoader';

const Home = () => {
    document.title = "Apartment Hunt";
    const [apartments, setApartments] = useState([])
  // loader
  const [loading, setLoading] = useState(true);

  // Get data from API and set the data:
  useEffect(() => {
    fetch('http://apartment-hunt-react.herokuapp.com/apartments')
      .then((res) => res.json())
      .then((data) => {
        setApartments(data);
        setLoading(false);
      });
  }, []);


    return (
        <div className="overflow-hidden">
            <NavBar />
            <Header />
            <section className="container my-4">
                <div className="text-center">
                    <h6>House Rent</h6>
                    <h2>Discover the latest Rent <br /> available today</h2>
                    <PreLoader loading={loading} />
                    <div className="row">
                    
                        {
                            apartments.map(apt => <Apartments apartment={apt} key={apt._id}></Apartments>)
                        }
                    </div>
                </div>
            </section>
            <Services />
            <Footer />
        </div>
    );
};

export default Home;