import React,{ Component } from "react";
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
class Contactdata extends Component
{
    state={
        name:'',
        email:'',
        address:{
            street:'',
            postalCode:''

        }
    }
    orderhandler =(event)=>{

        event.preventDefault();
             this.setState({loading:true})
        const order={
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer:{
                name: 'Ashima Kamra',
                address: {
                    street:'2',
                    zipCode: '335001'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
          axios.post('/orders.json',order)
          .then(Response=> {
              this.setState({loading:false});
            this.props.history.push('/');
          })
          .catch(error=> {
            this.setState({loading:false})
    });
    }
 render(){
     let form =(
        <form>
        <input type="text" name="name" placeholder="Your name" /><br/>
        <input type="text" name="email" placeholder="Your email" /><br/>
        <input type="text" name="street" placeholder="Your address" /><br/>
        <input type="text" name="postal" placeholder="Postal code" /><br/>
        <Button btnType="Success" clicked={this.orderhandler}>Order</Button>
    </form>
     );
     if(this.state.loading){
         form=<Spinner />;
     }
     return(
          <div className={classes.ContactData}>
              <h4>Enter your Contact Data</h4>
             {form}
          </div>
     )
 }
}

export default Contactdata;