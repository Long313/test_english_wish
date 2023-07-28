import Carousel from '../../components/Carousel';
import Header from '../../components/Header';
import './home.css';

function Home() {
   
    return ( <div>
        <Header/>
        <Carousel/>
        <div>
            <div className="text_why">
                Why?
                <p className="text_why_child">왜 독서일까요?</p>
            </div>
        </div>
    </div> );
}

export default Home;