/*QUANDO SCHIACCIO I VARI BOTTONI SI COLORA IL RIQUADRO E IL TESTO DEL BOTTONE*/

function Button(props){
    let colorF;
    /*controllo per vedere che bottone premo e che colore relativo mi deve restituire*/
    if(props.c== props.coloreTesto){
        colorF = props.c
    }else(
        colorF ='black'
    )
        return(
                <button style={props.styling}
                onClick={() => props.colorChange(props.c,props.id)}><span style={{color: colorF}}>{props.c}</span>
                </button>
        )
    }

/*creo la classe colorchange con le props e setto i bottoni*/
class ColorChange extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            id:[1,2,3],
            colorsAr:['red','green','blue'],
            bckColor:'#fff',
            styling:{padding:'1em 2em',borderRadius:10,fontSize:22},
            colorText:'black'
        }
        this.handleColor = this.handleColor.bind(this);
    }
    handleColor(color,keyIndex){
        this.setState({
            bckColor:color,
            colorText:color,
            keyIndex:keyIndex,
        })
    }

/*richiamo la funzione render:con la funzione MAP per ogni bottone assegno una key e un indice*/
render(){
    return(
     <div>
       <div className="colorBlock"
       style={{width:400,height:400,background:this.state.bckColor}}></div>
       {this.state.colorsAr.map( (cl,index) => {
           return(
               <Button 
                       key={this.state.id[index]}
                       id={this.state.id[index]} 
                       styling={this.state.styling} 
                       c={cl} 
                       coloreTesto={this.state.colorText} 
                       colorChange={this.handleColor} />     
                 )
        })}        
        </div>
           )
         } 
     }
/*creo la funzione app e richiamo colorchange*/
function App(){
  return(
    <div className="App" style={{display:'flex',width:'100%',height:'660px',backgroundColor:"orange"}}>
    <header className="App-header" style={{margin:'auto',justifyContent:'center',alignItems:'center'}}>
      <ColorChange />,
    </header>
    </div>
  )
}

/*render*/
ReactDOM.render(
  <App />,
  document.getElementById('root')




);/* soluzione base senza testo bottoni che si colorano
render(){
    return(
      <div>
        <div className="colorBlock"
        style={{whidth:250,height:200,background:this.state.bckColor}}></div>
        <button onClick={()=>this.handleColor('red')}>Red</button>
        <button onClick={()=>this.handleColor('green')}>Green</button>
        <button onClick={()=>this.handleColor('blue')}>Blue</button>
      </div>
    )
}
}
*/