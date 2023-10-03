import React from 'react';
import logo from '..//img/logo.png';
class Home extends React.Component{
    render(){
        return(
            <div className='bg'>
                <div className='form-inline' style={{marginLeft: 300, paddingTop: 10}}>
                    <img src={logo} alt="logo" width={35}/>
                    <h4 id='title-main' style={{paddingTop: 10, color: "#1E90FF", marginLeft: 5}}>HEALTHCARE</h4>
                </div>
                <div id='content' className='content'>
                    <div className='nd-1'>
                        <h1>HEALTH MONITORING SYSTEM</h1>
                    </div>
                    <div className='nd-2'>
                        <h1><strong style={{color: "#1E90FF"}}>Health</strong> your</h1>
                        <h1><strong style={{color: "#1E90FF"}}>Primary care</strong> ours</h1>
                    </div>
                    <a href="/login"><button className='btn btn-primary'>Log in now <i class="fas fa-caret-right"></i></button></a>
                </div>
            </div>
        );
    }
}

export default Home;