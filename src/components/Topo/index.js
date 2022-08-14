import './Topo.css';

export const Topo = (props) => {
    return(
    <header className="logo">
        <img src="/assets/logo.jpeg" alt="Logo"/>
        <label>{props.label}</label>
    </header>
    )    
}

export default Topo