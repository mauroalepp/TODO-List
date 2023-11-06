import './SelectBar.css';

function SelectBar(){
    return(
        <div className='selectBar'>
            <span className='day'>Day</span>
            <span className='week'>Week</span>
            <span className='month'>Month</span>
            <span className='year'>Year</span>
        </div>
    );}

export {SelectBar};