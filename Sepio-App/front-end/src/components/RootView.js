// import React, { useEffect, useState, useRef } from 'react';
// import { Menubar } from 'primereact/menubar';
// import { Avatar } from 'primereact/avatar';
// import { useNavigate } from 'react-router-dom';
// import { Button } from 'primereact/button';
// import { Menu } from 'primereact/menu';
// import { NavLink } from 'react-router-dom';
// import { CSidebar, CSidebarNav, CNavItem, CContainer, CForm } from '@coreui/react';
// import { RiDashboardLine } from 'react-icons/ri';
// import SepioLogo from './../image/Sepio_Logo.png';
// import SepioMainLogo from './../image/QueryTool.png';

// export default function Layout({icon_username}) {
//     const navigate = useNavigate();
// 	const [logoHeight, setLogoHeight] = useState('60px');

//     const handleLogout = () => {
//         navigate('/');
//     };

//     const handleResize = () => {
//         if (window.innerWidth <= 480) {
//             setLogoHeight('20px');
//         } else if (window.innerWidth <= 768) {
//             setLogoHeight('20px');
//         } else {
//             setLogoHeight('40px');
//         }
//     };

//     useEffect(() => {
//         window.addEventListener('resize', handleResize);
//         handleResize(); // Call it initially to set the correct size

//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
// 	 }, []);

// 	const menu = useRef();

// 	const userProfile = [
// 		{
// 			template: function setProfile(){

// 				return (
// 					<span className='list-group mt-3'  >
// 						<p>{icon_username}</p>
// 					</span>
// 				);
// 			}
// 		},
// 		{
// 				separator: true
// 			}
// 	];

//     const start = <img alt='logo' style={{cursor:'pointer'}} src={SepioLogo} height='40' className='mr-2' />;
//     const end = (
//         <div className='flex align-items-center gap-2'>
//             <NavLink to='/' className='p-button p-component p-button-text'  style={{ borderRadius: '10px', padding: '10px', textDecoration:'none' }}>
//                 <span className='pi pi-sign-out' style={{ marginRight: '5px' }} />
//                 Logout
//             </NavLink>
// 			 <Menu className="font-medium text-xl font-semibold text-center rounded-4 mt-2"  model={userProfile} popup ref={menu} id="popup_menu_left" closeOnEscape />
// 			 <Button
// 				 style={{width:'46px',height:'46px', borderRadius: '50%',  color: '#183462' }}
// 				 icon="pi pi-user"
// 				 rounded
// 				 text
// 				 severity="secondary"
// 				 aria-label="User"
// 				 className="mr-2"
// 				 onClick={(event) => menu.current.toggle(event)}
// 				 aria-controls="popup_menu"
// 				 aria-haspopup
// 			 />
//         </div>
//     );

//     return (
//         <div>
//             <Menubar start={start} end={end} />
//             <CSidebar className='border-end custom-sidebar' visible={true} style={{ height: '100vh', position: 'sticky', top: '0' }}>
//                 <CSidebarNav>
//                     <CContainer fluid>
//                         <CForm className='d-flex'>
//                         </CForm>
//                     </CContainer>
//                     <CNavItem>
//                         <NavLink to='/querytool/mac' className='nav-link'>
//                             <RiDashboardLine className='nav-icon' />MAC
//                         </NavLink>
//                     </CNavItem>
//                     <CNavItem>
//                         <NavLink to='/querytool/settings' className='nav-link'>
//                             <RiDashboardLine className='nav-icon' /> Settings
//                         </NavLink>
//                     </CNavItem>
//                 </CSidebarNav>
//             </CSidebar>
//             <div style={{
//                 display: 'flex',
//                 justifyContent: 'center',
//                 marginTop: '-600px',
//                 top: '4px',
//                 marginRight: '-150px'
//             }}>
//                 <img src={SepioMainLogo} style={{
//                     height: logoHeight,
//                     transition: 'height 0.3s ease'
//                 }} className='mr-2' />
//             </div>
//         </div>
//     );
// }

















// import React, { useEffect, useState, useRef } from 'react';
// import { Menubar } from 'primereact/menubar';
// import { Avatar } from 'primereact/avatar';
// import { useNavigate } from 'react-router-dom';
// import { Button } from 'primereact/button';
// import { Menu, MenuItem } from '@mui/material';
// import { NavLink } from 'react-router-dom';
// import { CSidebar, CSidebarNav, CNavItem, CContainer, CForm } from '@coreui/react';
// import { RiDashboardLine } from 'react-icons/ri';
// import SepioLogo from './../image/Sepio_Logo.png';
// import SepioMainLogo from './../image/QueryTool.png';

// export default function Layout({ icon_username }) {
// 	const navigate = useNavigate();
// 	const [logoHeight, setLogoHeight] = useState('60px');
// 	const [isScrollDisabled, setIsScrollDisabled] = useState(true);
// 	const [userPrivileges, setUserPrivileges] = useState(null)

// 	useEffect(() => {
// 		if(icon_username){
// 			fetch(`/api/user/${icon_username}`)
// 			.then(response => response.json())
// 			.then(data => {
// 				setUserPrivileges(data.privileges);
// 			})
// 			.catch(error => console.error('Error fetching user data:', error));
// 		}
// 	}, [icon_username]);

// 	const handleLogout = () => {
// 		navigate('/');
// 	};

// 	const handleResize = () => {
// 		if (window.innerWidth <= 480) {
// 			setLogoHeight('20px');
// 		} else if (window.innerWidth <= 868) {
// 			setLogoHeight('20px');
// 		} else {
// 			setLogoHeight('40px');
// 		}
// 	};

// 	useEffect(() => {
// 		if (isScrollDisabled) {
// 			document.body.style.overflow = 'hidden';
// 		} else {
// 			document.body.style.overflow = 'auto';
// 		}

// 		return () => {
// 			document.body.style.overflow = 'auto';
// 		}
// 	}, [isScrollDisabled]);


// 	useEffect(() => {
// 		window.addEventListener('resize', handleResize);
// 		handleResize(); // Call it initially to set the correct size

// 		return () => {
// 			window.removeEventListener('resize', handleResize);
// 		};
// 	}, []);

// 	const [dropDown, setDropDown] = useState(null)
// 	const open = Boolean(dropDown);
// 	const handleClick = (event) => {
// 		setDropDown(event.currentTarget)
// 	};
// 	const handleClose = () => {
// 		setDropDown(null);
// 	};



// 	const start = <img alt='logo' style={{ cursor: 'pointer' }} src={SepioLogo} height='40' className='mr-2' />;
// 	const end = (
// 		<div className='flex align-items-center gap-2'>
// 			<NavLink to='/' className='p-button p-component p-button-text' style={{ borderRadius: '10px', padding: '10px', textDecoration: 'none' }}>
// 				<span className='pi pi-sign-out' style={{ marginRight: '5px' }} />
// 				Logout
// 			</NavLink>
// 			<Menu
// 				anchorEl={dropDown}
// 				id='account-menu'
// 				open={open}
// 				onClose={handleClose}
// 				onClick={handleClose}
// 				PaperProps={{
// 					elevation: 5,
// 					sx: {
// 						width: '120px',
// 						borderRadius: '10px',
// 						overflow: 'visible',
// 						mt: 1,
// 						'&::before': {
// 							content: '""',
// 							display: 'inline-block',
// 							position: 'absolute',
// 							top: 0,
// 							right: 10,
// 							width: 10,
// 							height: 10,
// 							bgcolor: 'background.paper',
// 							transform: 'translateY(-50%) rotate(45deg)',
// 							zIndex: 0,
// 						},
// 					},
// 				}}
// 				transformOrigin={{
// 					vertical: 'top',
// 					horizontal: 'center',
// 				}}
// 				anchorOrigin={{
// 					vertical: 'bottom',
// 					horizontal: 'center',
// 				}}
// 			>
// 				<MenuItem sx={{ display: 'flex', justifyContent: 'center' }} title='Profile'>
// 					<p style={{ marginBottom: '0px' }}>
// 						User: {icon_username}
// 					</p>
// 				</MenuItem>
// 			</Menu>

// 			<Button
// 				style={{ width: '46px', height: '46px', borderRadius: '50%', color: '#183462' }}
// 				icon="pi pi-user"
// 				rounded
// 				text
// 				severity="secondary"
// 				aria-label="User"
// 				className="mr-2"
// 				onClick={handleClick}
// 				aria-controls={open ? 'account-menu' : undefined}
// 				aria-haspopup="true"
// 				aria-expanded={open ? 'true' : undefined}
// 			/>
// 		</div>
// 	);

// 	return (
// 		<div>
// 			<Menubar start={start} end={end} />
// 			<div>
// 				<CSidebar className='border-end custom-sidebar' visible={true} style={{ height: '100vh', position: 'sticky', top: '0' }}>
// 					<CSidebarNav>
// 						<CContainer fluid>
// 							<CForm className='d-flex'>
// 							</CForm>
// 						</CContainer>
// 						<CNavItem>
// 							<NavLink to='/querytool/mac' className='nav-link'>
// 								<RiDashboardLine className='nav-icon' />MAC
// 							</NavLink>
// 						</CNavItem>
// 						<CNavItem>
// 							<NavLink to='/querytool/settings' className='nav-link'>
// 								<RiDashboardLine className='nav-icon' /> Settings
// 							</NavLink>
// 							{userPrivileges !== 'UI_USER' && (
// 							<NavLink to='/querytool/createuser' className='nav-link'>
// 								<RiDashboardLine className='nav-icon' /> Users
// 							</NavLink>
// 							)}
// 						</CNavItem>
// 					</CSidebarNav>
// 				</CSidebar>
// 				<div style= {{
// 					display: 'flex',
// 					justifyContent: 'center',
// 					marginTop: '-600px',
// 					top: '4px',
// 					marginRight: '-150px'
// 				}}>

// 					<img src={SepioMainLogo} style={{
// 						position: 'fixed',
// 						top: '180px',
// 						left: '50%',
// 						transform: 'translateX(-50%)',
// 						zIndex: 1000,
// 						height: logoHeight,
// 						transition: 'height 0.3s ease'
// 					}} className='mr-2' />
// 				</div>
// 			</div>
// 		</div>
// 	);
// }















// import React, { useEffect, useState } from 'react';
// import { Menubar } from 'primereact/menubar';
// import { Avatar } from 'primereact/avatar';
// import { useNavigate } from 'react-router-dom';
// import { Button } from 'primereact/button';
// import { Menu, MenuItem } from '@mui/material';
// import { NavLink } from 'react-router-dom';
// import { CSidebar, CSidebarNav, CNavItem, CContainer, CForm } from '@coreui/react';
// import { RiDashboardLine } from 'react-icons/ri';
// import SepioLogo from './../image/Sepio_Logo.png';
// import SepioMainLogo from './../image/QueryTool.png';

// export default function Layout({ icon_username }) {
// 	const navigate = useNavigate();
// 	const [logoHeight, setLogoHeight] = useState('60px');
// 	const [isScrollDisabled, setIsScrollDisabled] = useState(true);
// 	const [userPrivileges, setUserPrivileges] = useState(null); // State for user privileges
// 	const [isLoading, setIsLoading] = useState(true); // State for loading

// 	useEffect(() => {
// 		if(icon_username){
// 			fetch(`/api/user/${icon_username}`)
// 			.then(response => response.json())
// 			.then(data => {
// 				setUserPrivileges(data.privileges);
// 				setIsLoading(false); // Set loading to false after fetching data
// 			})
// 			.catch(error => {
// 				console.error('Error fetching user data:', error);
// 				setIsLoading(false); // Set loading to false even if there is an error
// 			});
// 		}
// 	}, [icon_username]);

// 	const handleLogout = () => {
// 		navigate('/');
// 	};

// 	const handleResize = () => {
// 		if (window.innerWidth <= 480) {
// 			setLogoHeight('20px');
// 		} else if (window.innerWidth <= 868) {
// 			setLogoHeight('20px');
// 		} else {
// 			setLogoHeight('40px');
// 		}
// 	};

// 	useEffect(() => {
// 		if (isScrollDisabled) {
// 			document.body.style.overflow = 'hidden';
// 		} else {
// 			document.body.style.overflow = 'auto';
// 		}

// 		return () => {
// 			document.body.style.overflow = 'auto';
// 		}
// 	}, [isScrollDisabled]);


// 	useEffect(() => {
// 		window.addEventListener('resize', handleResize);
// 		handleResize(); // Call it initially to set the correct size

// 		return () => {
// 			window.removeEventListener('resize', handleResize);
// 		};
// 	}, []);

// 	const [dropDown, setDropDown] = useState(null)
// 	const open = Boolean(dropDown);
// 	const handleClick = (event) => {
// 		setDropDown(event.currentTarget)
// 	};
// 	const handleClose = () => {
// 		setDropDown(null);
// 	};

// 	const start = <img alt='logo' style={{ cursor: 'pointer' }} src={SepioLogo} height='40' className='mr-2' />;
// 	const end = (
// 		<div className='flex align-items-center gap-2'>
// 			<NavLink to='/' className='p-button p-component p-button-text' style={{ borderRadius: '10px', padding: '10px', textDecoration: 'none' }}>
// 				<span className='pi pi-sign-out' style={{ marginRight: '5px' }} />
// 				Logout
// 			</NavLink>
// 			<Menu
// 				anchorEl={dropDown}
// 				id='account-menu'
// 				open={open}
// 				onClose={handleClose}
// 				onClick={handleClose}
// 				PaperProps={{
// 					elevation: 5,
// 					sx: {
// 						width: '120px',
// 						borderRadius: '10px',
// 						overflow: 'visible',
// 						mt: 1,
// 						'&::before': {
// 							content: '""',
// 							display: 'inline-block',
// 							position: 'absolute',
// 							top: 0,
// 							right: 10,
// 							width: 10,
// 							height: 10,
// 							bgcolor: 'background.paper',
// 							transform: 'translateY(-50%) rotate(45deg)',
// 							zIndex: 0,
// 						},
// 					},
// 				}}
// 				transformOrigin={{
// 					vertical: 'top',
// 					horizontal: 'center',
// 				}}
// 				anchorOrigin={{
// 					vertical: 'bottom',
// 					horizontal: 'center',
// 				}}
// 			>
// 				<MenuItem sx={{ display: 'flex', justifyContent: 'center' }} title='Profile'>
// 					<p style={{ marginBottom: '0px' }}>
// 						User: {icon_username}
// 					</p>
// 				</MenuItem>
// 			</Menu>

// 			<Button
// 				style={{ width: '46px', height: '46px', borderRadius: '50%', color: '#183462' }}
// 				icon="pi pi-user"
// 				rounded
// 				text
// 				severity="secondary"
// 				aria-label="User"
// 				className="mr-2"
// 				onClick={handleClick}
// 				aria-controls={open ? 'account-menu' : undefined}
// 				aria-haspopup="true"
// 				aria-expanded={open ? 'true' : undefined}
// 			/>
// 		</div>
// 	);

// 	return (
// 		<div>
// 			<Menubar start={start} end={end} />
// 			<div>
// 				<CSidebar className='border-end custom-sidebar' visible={true} style={{ height: '100vh', position: 'sticky', top: '0' }}>
// 					<CSidebarNav>
// 						<CContainer fluid>
// 							<CForm className='d-flex'>
// 							</CForm>
// 						</CContainer>
// 						<CNavItem>
// 							<NavLink to='/querytool/mac' className='nav-link'>
// 								<RiDashboardLine className='nav-icon' />MAC
// 							</NavLink>
// 						</CNavItem>
// 						<CNavItem>
// 							<NavLink to='/querytool/settings' className='nav-link'>
// 								<RiDashboardLine className='nav-icon' /> Settings
// 							</NavLink>
// 							{/* Conditionally render the CreateUser NavLink */}
// 							{!isLoading && userPrivileges !== 'UI_USER' && (
// 								<NavLink to='/querytool/createuser' className='nav-link'>
// 									<RiDashboardLine className='nav-icon' /> Users
// 								</NavLink>
// 							)}
// 						</CNavItem>
// 					</CSidebarNav>
// 				</CSidebar>
// 				<div style= {{
// 					display: 'flex',
// 					justifyContent: 'center',
// 					marginTop: '-600px',
// 					top: '4px',
// 					marginRight: '-150px'
// 				}}>
// 					<img src={SepioMainLogo} style={{
// 						position: 'fixed',
// 						top: '180px',
// 						left: '50%',
// 						transform: 'translateX(-50%)',
// 						zIndex: 1000,
// 						height: logoHeight,
// 						transition: 'height 0.3s ease'
// 					}} className='mr-2' />
// 				</div>
// 			</div>
// 		</div>
// 	);
// }























import React, { useEffect, useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { Avatar } from 'primereact/avatar';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Divider, Menu, MenuItem, setRef } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { CSidebar, CSidebarNav, CNavItem, CContainer, CForm } from '@coreui/react';
import { RiDashboardLine } from 'react-icons/ri';
import SepioLogo from './../image/Sepio_Logo.png';
import SepioMainLogo from './../image/QueryTool.png';
import { Oval } from 'react-loader-spinner'; // Import loading spinner

export default function Layout({ icon_username }) {
	const navigate = useNavigate();
	const [logoHeight, setLogoHeight] = useState('60px');
	const [isScrollDisabled, setIsScrollDisabled] = useState(true);
	const [userPrivileges, setUserPrivileges] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (icon_username) {
			fetch(`/api/user/${icon_username}`)
				.then(response => response.json())
				.then(data => {
					setUserPrivileges(data.privileges);
					console.log(data.privileges)
					setTimeout(() => {
						setIsLoading(false);
					}, 100); // Simulate a delay of 1 second
				})
				.catch(error => {
					console.error('Error fetching user data:', error);
					setIsLoading(false);
				});
		}
	}, [icon_username]);



	const handleLogout = () => {
		navigate('/');
	};

	const handleResize = () => {
		if (window.innerWidth <= 480) {
			setLogoHeight('20px');
		} else if (window.innerWidth <= 868) {
			setLogoHeight('20px');
		} else {
			setLogoHeight('40px');
		}
	};

	useEffect(() => {
		if (isScrollDisabled) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}

		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [isScrollDisabled]);

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		handleResize();

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const [dropDown, setDropDown] = useState(null);
	const open = Boolean(dropDown);
	const handleClick = (event) => {
		setDropDown(event.currentTarget);
	};
	const handleClose = () => {
		setDropDown(null);
	};

	const start = <img alt='logo' style={{ cursor: 'pointer' }} src={SepioLogo} height='40' className='mr-2' />;
	const end = (
		<div className='flex align-items-center gap-2'>
			<NavLink to='/' className='p-button p-component p-button-text' style={{ borderRadius: '10px', padding: '10px', textDecoration: 'none' }}>
				<span className='pi pi-sign-out' style={{ marginRight: '5px' }} />
				Logout
			</NavLink>
			<Menu
				anchorEl={dropDown}
				id='account-menu'
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				PaperProps={{
					elevation: 5,
					sx: {
						width: '140px',
						borderRadius: '10px',
						overflow: 'visible',
						mt: 1,
						'&::before': {
							content: '""',
							display: 'inline-block',
							position: 'absolute',
							top: 0,
							right: 10,
							width: 10,
							height: 10,
							bgcolor: 'background.paper',
							transform: 'translateY(-50%) rotate(45deg)',
							zIndex: 0,
						},
					},
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
			>
				<Divider spacing={2}>User</Divider>
				<MenuItem sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }} title='Profile'>
					<p style={{ marginBottom: '0px' }}>
						{icon_username}
					</p>
				</MenuItem>
				<Divider spacing={1}>Role</Divider>
				<MenuItem sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }} title='Profile'>
					<p style={{ marginBottom: '0px' }}>
						{userPrivileges}
					</p>
				</MenuItem>
			</Menu>

			<Button
				style={{ width: '46px', height: '46px', borderRadius: '50%', color: '#183462' }}
				icon="pi pi-user"
				rounded
				text
				severity="secondary"
				aria-label="User"
				className="mr-2"
				onClick={handleClick}
				aria-controls={open ? 'account-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
			/>
		</div>
	);

	return (
		<div>
			<Menubar start={start} end={end} />
			<div>
				<CSidebar className='border-end custom-sidebar' visible={true} style={{ height: '100vh', position: 'sticky', top: '0' }}>
					<CSidebarNav>
						<CContainer fluid>
							<CForm className='d-flex'></CForm>
						</CContainer>
						<CNavItem>
							<NavLink to='/querytool/mac' className='nav-link'>
								<RiDashboardLine className='nav-icon' />MAC
							</NavLink>
						</CNavItem>
						<CNavItem>
							<NavLink to='/querytool/settings' className='nav-link'>
								<RiDashboardLine className='nav-icon' /> Settings
							</NavLink>
							{/* Conditionally render the CreateUser NavLink */}
							{!isLoading && userPrivileges !== 'UI_USER' && (
								<NavLink to='/querytool/createuser' className='nav-link'>
									<RiDashboardLine className='nav-icon' /> Users
								</NavLink>
							)}
						</CNavItem>
					</CSidebarNav>
				</CSidebar>
				<div style={{
					display: 'flex',
					justifyContent: 'center',
					marginTop: '-600px',
					top: '4px',
					marginRight: '-150px'
				}}>
					<img src={SepioMainLogo} style={{
						position: 'fixed',
						top: '180px',
						left: '50%',
						transform: 'translateX(-50%)',
						zIndex: 1000,
						height: logoHeight,
						transition: 'height 0.3s ease'
					}} className='mr-2' />
				</div>
			</div>
			{/* Render loading spinner if isLoading is true */}
			{isLoading && (
				<div style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100vh',
					position: 'fixed',
					top: 0,
					left: 0,
					width: '100%',
					backgroundColor: 'rgba(255, 255, 255, 0.8)',
					zIndex: 2000
				}}>

				</div>
			)}
		</div>
	);
}
