import FooterComponent from '../components/FooterComponent';
import HeaderComponent from '../components/HeaderComponent';
import HomePageBodyComponent from '../components/HomePageBodyComponent';
import './homepage.css'


function HomePage(){


    return(

        <>
            <HeaderComponent></HeaderComponent>
            <HomePageBodyComponent></HomePageBodyComponent>
            <FooterComponent></FooterComponent>
        </>
    )
}

export default HomePage;