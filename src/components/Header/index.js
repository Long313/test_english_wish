import "./header.css";
import logo from "../../assets/images/header_logo.png";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";
import { CiMenuFries } from "react-icons/ci";
function Header() {
  return (
    <div className="header">
      <div className="container_logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navigate">
        <div className="link">
          <NavLink
            to="/leadingTime"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            리딩타임이란
          </NavLink>
          <AiOutlineDown />
        </div>
        <div className="link">
          <NavLink
            to="/classReview"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            수업후기
          </NavLink>
        </div>
        <div className="link">
          <NavLink
            to="/freeTrial"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            무료체험 신청
          </NavLink>
        </div>
        <div className="link">
          <NavLink
            to="/purchasePass"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            이용권 구매
          </NavLink>
        </div>
        <div className="link">
          <NavLink
            to="/serviceCenter"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            고객센터
          </NavLink>
          <AiOutlineDown />
        </div>
      </div>
      <div className="container_btn">
        <div className="btn btn_login">
          <Link to="/login">Login</Link>
        </div>
        <div className="btn btn_join">
          <Link to="/joinUs">Join us</Link>
        </div>
        <div className="container_icon">
          <CiMenuFries size={30}/>
        </div>
      </div>
    </div>
  );
}

export default Header;
