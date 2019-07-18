const styleBl = {color: 'deepskyblue'}
const stylePr = {textDecoration: 'line-through'}
const styleDual = {color: 'deepskyblue',
                 textDecoration: 'line-through' }


const expr = ( <div>
    <h1 style={styleBl}> hi</h1>
    <h2 style={stylePr}> hi</h2>
    <p style={styleDual}> p </p>
     </div> );

const root = document.getElementById('root');

ReactDOM.render(expr, root);
