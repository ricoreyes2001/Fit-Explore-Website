import { Link } from 'react-router-dom';
export default function Navprogram() {

    return (
            <div className='bgd-nav'>
                <div className='nav_program'>
                <Link to="/programs" 
                    style={{ textDecoration: "none", color: "white", fontSize:"13px", borderRadius: "10px", border: "solid 1px", borderColor: "black", padding: "10px", backgroundColor: "skyblue" }}>
                    Abs
                </Link>
                <Link to="/programs" 
                    style={{ textDecoration: "none", color: "white", fontSize:"13px", borderRadius: "10px", border: "solid 1px", borderColor: "black", padding: "10px", backgroundColor: "skyblue" }}>
                    Arm
                </Link>
                <Link to="/programs" 
                    style={{ textDecoration: "none", color: "white", fontSize:"13px", borderRadius: "10px", border: "solid 1px", borderColor: "black", padding: "10px", backgroundColor: "skyblue" }}>
                    Chest
                </Link>
                <Link to="/programs" 
                    style={{ textDecoration: "none", color: "white", fontSize:"13px", borderRadius: "10px", border: "solid 1px", borderColor: "black", padding: "10px", backgroundColor: "skyblue" }}>
                    Legs
                </Link>
                <Link to="/programs" 
                    style={{ textDecoration: "none", color: "white", fontSize:"13px", borderRadius: "10px", border: "solid 1px", borderColor: "black", padding: "10px", backgroundColor: "skyblue" }}>
                    Shoulder & back
                </Link>
                <Link to="/login" 
                    style={{ textDecoration: "none", color: "white", fontSize:"13px", borderRadius: "10px", border: "solid 1px", borderColor: "black", padding: "10px", backgroundColor: "skyblue" }}>
                    Login
                </Link>
                </div>
            </div>
    )
};
