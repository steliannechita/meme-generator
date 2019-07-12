import React,{Component} from 'react'

class MemeGenerator extends Component{
    constructor(){
        super()
        this.state={
            topText:'',
            bottomText:'',
            randomImg:'http://i.imgflip.com/1bij.jpg',
            allMemeImgs:[]
          }
    }
    handleChange=(event)=>{
    const {name,value}=event.target
    this.setState({[name]:value})      
    }
    handleClick=()=>{
        let randomNumber= Math.floor(Math.random()*this.state.allMemeImgs.length)
        this.setState({randomImg:this.state.allMemeImgs[randomNumber].url})
    }
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(data=>data.json())
        .then(response=>{
            const{memes}=response.data
            this.setState({allMemeImgs:memes})
        })
        
    }
    render(){
       return(
        
        <div>
            <from className='meme-form'>
                <input 
                type ='text' 
                name='topText'
                placeholder='top text'
                onChange={this.handleChange}
                value={this.state.topText}
                />
                <br/>
                <input 
                type ='text' 
                name='bottomText'
                placeholder='bottom text'
                onChange={this.handleChange}
                value={this.state.bottomText}
                />
                <button onClick={this.handleClick}>Generate!</button>
            </from>
            <div className='meme'>
                <img src={this.state.randomImg} alt=''/>
                <h2 className='top'>{this.state.topText}</h2>
                <h2 className='bottom'>{this.state.bottomText}</h2>
            </div>   
        
        
          
        </div>
       ) 
    }
}

export default MemeGenerator