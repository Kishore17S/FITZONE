import React, { useState } from "react";
import store from '../components/store';
import { Link, useNavigate } from "react-router-dom";
import "./Styles/SideNavBar.css";
import userprofile from "./userprofiledp";



import icona from './icons/grid.svg'
import a from './icons/user.svg'
import b from './icons/message.svg'
import c from './icons/pie-chart.svg'
import d from './icons/folder.svg'
import e from './icons/shopping-cart.svg'
import f from './icons/heart.svg'
import g from './icons/settings.svg'
import i from './icons/admin-avatar.svg'
import j from './icons/logout.svg'
import k from './icons/trainer.svg'
import logo1 from '../1.png'



const SideNavBar = () => {
	
	const nav = useNavigate();
	const name = store.getState().name.name;
    console.log(name)
	
	
	const LogOut = () =>{
		nav("/")
	}

	const [isExpanded, setExpendState] = useState(false);
	const menuItems = [
		{
			text: "Dashboard",
			icon: icona,
			link:"/Dash"
		},
		{
			text: "Profile",
			icon: a,
			link:"/Profile",
		},
		{
			text: "Videos",
			icon: b,
			link:"/video"
		},
		{
			text: "Trainer",
			icon: k,
			link:"/Trainer"
		},
		// {
		// 	text: "File Manager",
		// 	icon: d
		// },
		// {
		// 	text: "Orders",
		// 	icon: e
		// },
		// {
		// 	text: "Saved Items",
		// 	icon: f
		// },
		{
			text: "Settings",
			icon: g,
			link:"/"
		},
	];
	return (
		<div
			className={
				isExpanded
					? "side-nav-container"
					: "side-nav-container side-nav-container-NX"
			}
		>
			<div className="nav-upper">
				<div className="nav-heading">
					{isExpanded && (
						<div className="nav-brand">
							<img style={{height:'80px',width:'80px',marginTop:"5px"}} src={logo1} alt="" srcset="" />
							<h2 style={{marginTop:"25px"}}>FIT ZONE</h2>
						</div>
					)}
					<button
						className={
							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
						}
						onClick={() => setExpendState(!isExpanded)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				<div className="nav-menu">
					{menuItems.map(({ text, icon,link }) => (
						<Link to={link} style={{textDecoration:"none"}}>
						<a
							className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
							href="#"
						>
							<img className="menu-item-icon" src={icon} alt="" srcset=""  onClick={userprofile}/>
							{isExpanded && <p>{text}</p>}
						</a>
						</Link>
					))}
				</div>
			</div>
			<div className="nav-footer">
				{isExpanded && (
					<div className="nav-details">
						<img
							className="nav-footer-avatar"
							src={i}
							alt=""
							srcset=""
						/>
						<div className="nav-footer-info">
							<p className="nav-footer-user-name">{name}</p>
							<p className="nav-footer-user-position">store admin</p>
						</div>
					</div>
				)}
				<img className="logout-icon" src={j} alt="" srcset="" onClick={LogOut}/>
			</div>
		</div>
	);
};

export default SideNavBar;
