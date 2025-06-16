import "../styles/Home.scss";
import NavBar from "../components/NavBar";

type Props = {
  navVariable: number;
  setnavVariable: React.Dispatch<React.SetStateAction<number>>;
};

function Home({ navVariable, setnavVariable }: Props) {
  return (
    <div className="home ">
      <video className="bg-video" autoPlay loop muted playsInline>
        <source src={require("../assets/HomePageBg.mp4")} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <NavBar navVariable={navVariable} setnavVariable={setnavVariable} />
      <h3 className="motto">CODE COMPETE CONQUERE</h3>
    </div>
    // <div className="vh-97 bg-eventhra">
    //   <NavBar />
    //   <h3 className="d-flex justify-content-center text-white font-size-64 motto">
    //     CODE COMPETE CONQUERE
    //   </h3>
    // </div>
  );
}
export default Home;
