import logo from "../images/react.png"

function MainHeader() {
  return(
    <div className="pt-2 py-1 pl-2" style={{backgroundColor: "black"}}>
      <img src={logo} alt="" style={{height:"35px",verticalAlign:"top"}}></img> 
      <span className="h2 pt-4 text-white">React Course TaskOPedia</span>
    </div>
    // <h1 className='text-primary'>REACT COURSE</h1>
  );
}
  const SubHeaderStyle = {
    color: "blueviolet",
    backgroundColor:"lightgray"
};
function SubHeader() {
  return(<p style={SubHeaderStyle} className="text-center">This is an Exciting course</p>);
}
const Header = () => {
  return (
    <div>
      <MainHeader></MainHeader> 
      <SubHeader></SubHeader>
    </div>
  );
} 

export default Header; //Can also be added in the function check students.jsx 