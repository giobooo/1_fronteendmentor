import manImage from "../assets/images/image-man-eating.webp";
import "../styles/_meaning-section.scss";

function MeaningSection(){
    return(
        <section className="meaning-section">
                <svg xmlns="http://www.w3.org/2000/svg" width="85.831" height="200.501" viewBox="0 0 85.831 200.501"><path fill="none" stroke="#ACC1DE" d="M82.719.092c7.831 41.7 2.31 140.08-82.43 200"/></svg>            
                    <img src={manImage} alt="man eating sushi"/>
                <div>
                    <h2>What your BMI result means</h2>
                    <span>A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.</span>
                </div>
        </section>
    );
}

export default MeaningSection;