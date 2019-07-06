import React from 'react';
// import ReactDOM from 'react-dom';


class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
        };
        this.hendleChanges=this.hendleChanges.bind(this);
        this.hendleSubmit=this.hendleSubmit.bind(this);
    }
    hendleChanges(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    hendleSubmit(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render(){
        return(
            <div>
                <form className='login' onSubmit={this.hendleSubmit}>
                    <LabeledInputs name='username' type='text'  placeholder='Emilsworks' onChange={this.hendleChanges} value={this.state.username}/>
                    <LabeledInputs name='password' type='password' placeholder='*****************' onChange={this.hendleChanges} value={this.state.password}/>
                    <button className='submit' type='submit'>Login</button> 
                </form>
            </div>
        );
    }
}

class RegisterForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            name:'',
            email:'',
            date:''
        };
        this.hendleChanges=this.hendleChanges.bind(this);
        this.hendleSubmit=this.hendleSubmit.bind(this);
    }
    hendleChanges(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    hendleSubmit(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render(){
        return(
            <div>
                <form className='register' onSubmit={this.hendleSubmit}>
                    <LabeledInputs name='username' type='text'  placeholder='Emilsworks' onChange={this.hendleChanges} value={this.state.username}/>
                    <LabeledInputs name='password' type='password' placeholder='*****************' onChange={this.hendleChanges} value={this.state.password}/>
                    <LabeledInputs name='name' type='text'  placeholder='Emils works' onChange={this.hendleChanges} value={this.state.name}/>
                    <LabeledInputs name='email' type='email'  placeholder='emilsworks@gmail.com' onChange={this.hendleChanges} value={this.state.email}/>
                    <LabeledInputs name='date' type='text'  placeholder='22/08/01' onChange={this.hendleChanges} value={this.state.date}/>
                    <button className='submit' type='submit'>Sign up</button> 
                </form>
            </div>
        );
    }
}

let LabeledInputs=({name,type,placeholder,label=name,value,onChange})=>{
    return(
        <div>
            <input name={name} type={type} value={value} onChange={onChange} placeholder={placeholder}/>
            <label htmlor={name}>{label}</label>
        </div>
    )
}

export {RegisterForm,LoginForm};