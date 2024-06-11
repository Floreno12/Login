// import React, { useState } from 'react';
// import { Menubar } from 'primereact/menubar';
// import { Button } from 'primereact/button';
// import { useNavigate } from 'react-router-dom';
// import { InputText } from 'primereact/inputtext';
// import { NavLink } from 'react-router-dom';
// import { CSidebar, CSidebarNav, CNavItem, CContainer, CForm } from '@coreui/react';
// import { RiDashboardLine } from 'react-icons/ri';
// import { Avatar } from 'primereact/avatar';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import axios from 'axios';
// import SepioLogo from './../image/Sepio_Logo.png';

// export default function Layout() {
//     const navigate = useNavigate();
//     const [searchQuery, setSearchQuery] = useState('');
//     const [responseMessage, setResponseMessage] = useState('');
//     const [foundMacAddresses, setFoundMacAddresses] = useState([]);

//     const handleLogout = () => {
//         navigate('/');
//     }

//     const handleStartClick = () => {
//         navigate('/querytool');
//     };

//     const handlePostMac = async () => {
//         try {
//             const macAddresses = searchQuery.split(',').map(mac => mac.trim());
//             const promises = macAddresses.map(mac => axios.post('/api/check-mac', { macAddress: mac }));

//             const results = await Promise.all(promises);
//             const newFoundMacAddresses = results.map((response, index) => ({
//                 macAddress: macAddresses[index],
//                 tables: response.data.tables || []
//             }));

//             setResponseMessage('Search completed');
//             setFoundMacAddresses(newFoundMacAddresses);
//         } catch (error) {
//             console.error('Error posting MAC address:', error);
//             setResponseMessage('Error occurred while checking MAC address.');
//             setFoundMacAddresses([]);
//         }
//     }

//     const start = (
//         <>
//             <img alt='logo' src={SepioLogo} height='40' className='mr-2' onClick={handleStartClick} />
//         </>
//     );

//     const end = (
//         <div className='flex align-items-center gap-2'>
//             <NavLink to='/' className='p-button p-component p-button-text' style={{ borderRadius: '10px', padding: '10px' }}>
//                 <span className='pi pi-sign-out' style={{ marginRight: '5px' }} />
//                 Logout
//             </NavLink>
//             <Avatar icon='pi pi-user' size='large' shape='circle' />
//         </div>
//     );

//     return (
//         <div>
//             <Menubar start={start} end={end} />

//             <CSidebar className='border-end custom-sidebar'>
//                 <CSidebarNav>
//                     <CContainer fluid>
//                         <CForm className='d-flex'>
//                             {/*Place for additional form elements after demo*/}
//                         </CForm>
//                     </CContainer>
//                     <CNavItem>
//                         <NavLink to='/querytool/mac' className='nav-link'><RiDashboardLine className='nav-icon' /> MAC</NavLink>
//                     </CNavItem>
//                     <CNavItem>
//                         <NavLink to='/querytool/settings' className='nav-link'><RiDashboardLine className='nav-icon'/> Settings </NavLink>
//                     </CNavItem>
//                 </CSidebarNav>
//             </CSidebar>

//             <div style={{ display: 'flex', justifyContent: 'center', marginTop: '-600px', top: '4px', marginRight: '-150px' }}>
//                 <InputText
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     placeholder="Search MAC"
//                     style={{ width: `${(searchQuery.length < 45 ? 45 : searchQuery.length) * 8 + 20}px`, minWidth: '600px' }} // Adjusting width dynamically
//                 />
//                 <Button label='Search' icon='pi pi-search' onClick={handlePostMac} style={{ backgroundColor: '#183462', borderColor: '183462', marginLeft: '0px' }} />
//             </div>
//             {responseMessage && (
//                 <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', color: responseMessage.includes('not found') ? 'red' : 'green' }}>
//                     {responseMessage}
//                 </div>
//             )}
//             {foundMacAddresses.length > 0 && (
//                 <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
//                     {foundMacAddresses.map((item, index) => (
//                         <div key={index} style={{ marginBottom: '20px', width: '80%', paddingLeft: '300px' }}>
//                             <div style = {{marginLeft: '-300px'}}>
//                             <h4>{item.macAddress}</h4>
//                             </div>
//                             <DataTable value={[item]} responsiveLayout="scroll" style={{ minWidth: '200px', maxWidth: '600px' }}>
//                                 <Column field="macAddress" header="MAC Address" style={{ width: '50%' }} />
//                                 <Column field="tables" header="Found In" body={(rowData) => rowData.tables.join(', ')} style={{ width: '50%' }} />
//                             </DataTable>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }





//new
import React, { useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { NavLink } from 'react-router-dom';
import { CSidebar, CSidebarNav, CNavItem, CContainer, CForm } from '@coreui/react';
import { RiDashboardLine } from 'react-icons/ri';
import { Avatar } from 'primereact/avatar';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import SepioLogo from './../image/Sepio_Logo.png';

export default function Layout() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [foundMacAddresses, setFoundMacAddresses] = useState([]);

    const handleLogout = () => {
        navigate('/');
    }

    const handleStartClick = () => {
        navigate('/querytool');
    };

    const handlePostMac = async () => {
        try {

            if (searchQuery.trim() === '') {
                setResponseMessage('Please enter at least one MAC address.');
                return;
            }

            const macAddresses = searchQuery.split(',').map(mac => mac.trim());

            const responce = await axios.post('/api/check-mac', { macAddress: macAddresses });

            console.log("post responce > " + responce.data.tables);

            const newFoundMacAddresses = responce.data.map((response, index) => ({
                macAddress: macAddresses[index],
                macAddressStatus: response.macAddress,
                tables: response.tables || []
            }));

            setResponseMessage('Search completed');
            setFoundMacAddresses(newFoundMacAddresses);
        } catch (error) {
            console.error('Error posting MAC address:', error);
            setResponseMessage('Error occurred while checking MAC address.');
            setFoundMacAddresses([]);
        }
    }

    const start = (
        <>
            <img alt='logo' src={SepioLogo} height='40' className='mr-2' onClick={handleStartClick} />
        </>
    );

    const end = (
        <div className='flex align-items-center gap-2'>
            <NavLink to='/' className='p-button p-component p-button-text' style={{ borderRadius: '10px', padding: '10px' }}>
                <span className='pi pi-sign-out' style={{ marginRight: '5px' }} />
                Logout
            </NavLink>
            <Avatar icon='pi pi-user' size='large' shape='circle' />
        </div>
    );

    return (
        <div>
            <Menubar start={start} end={end} />

            <CSidebar className='border-end custom-sidebar'>
                <CSidebarNav>
                    <CContainer fluid>
                        <CForm className='d-flex'>
                            {/*Place for additional form elements after demo*/}
                        </CForm>
                    </CContainer>
                    <CNavItem>
                        <NavLink to='/querytool/mac' className='nav-link'><RiDashboardLine className='nav-icon' /> MAC</NavLink>
                    </CNavItem>
                    <CNavItem>
                        <NavLink to='/querytool/settings' className='nav-link'><RiDashboardLine className='nav-icon' /> Settings </NavLink>
                    </CNavItem>
                </CSidebarNav>
            </CSidebar>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '-600px', top: '4px', marginRight: '-150px' }}>
                <InputText
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search MAC"
                    style={{ width: `${(searchQuery.length < 45 ? 45 : searchQuery.length) * 8 + 20}px`, minWidth: '600px' }} // Adjusting width dynamically
                />
                <Button label='Search' icon='pi pi-search' onClick={handlePostMac} style={{ backgroundColor: '#183462', borderColor: '183462', marginLeft: '0px' }} />
            </div>
            {responseMessage && (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginLeft: '140px', color: responseMessage.includes('Please enter') ? 'red' : 'green' }}>
                    {responseMessage}
                </div>
            )}
            {foundMacAddresses.length > 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px', width: '100%', marginLeft: '100px' }}>
                    {foundMacAddresses.map((item, index) => (
                        <div key={index} style={{ marginBottom: '20px', width: '90%', maxWidth: '900px' }}>
                            <h4 style={{ textAlign: 'center' }}>{item.macAddress}</h4>
                            <DataTable value={[item]} responsiveLayout="scroll" style={{ width: '100%', minWidth: '650px' }}>
                                <Column field="macAddressStatus" header="MAC Address Status" style={{ minWidth: '300px', width: '60%' }} />
                                <Column field="tables" header="Found In" body={(rowData) => rowData.tables.join(", ")} style={{ minWidth: '300px', width: '40%' }} />
                            </DataTable>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}