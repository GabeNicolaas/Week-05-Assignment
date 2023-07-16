//This is my coding assingnment
console.log('Type here ');


////Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
//Use at least one array.
///Use at least two classes.
//Your menu should have the options to create, view, and delete elements.
//


// I deicide to go with a Order food online type of scenario

//in this code i go over the ordering process
// the order itself, wait time, alseo if choosen you can cancel your order

//this are my two two classes i choose to go with 



class Order {
    constructor(Food,Drink) {
        this.Food = Food;
        this.Drink = Drink;
    }
    describe(){
        return `${this.Food} and ${this.Drink}.`;
    }
}

class Process {
    constructor(time){
        this.time = time;
        this.OrderNumber = [];
    }
    addOrder(Process){
        if(this.OrderNumber instanceof Order){
            this.OrderNumber.push(this.OrderNumber);
        } else { 
            throw new Error(`Only one order can be placed at a time.: ${Order}`);
        }
    }

    describe(){
        return `${this.OrderNumber} has ${this.time.length} left to be ready.`;
    }
}

class Menu {
    constructor(){
        this.Process =[];
        this.Choices = null;
        

//this is called top to bottom method where you executing code in 
//before its actually wrote in.

    }
     start(){
        let Choices = this.showMainMenuOptions();
        while (Choices !=0){
            switch (Choices){
                case "1":
                    this.createOrder();
                    break;
                case "2":
                    this.viewWatingTime();
                    break;
                case "3":
                    this.CancelOrder();
                    break;
                default:
                    Choices = 0;
            }
            Choices = this.showMainMenuOptions();
        }

        alert('Goodbye Till Next Time!');
     }

     showMainMenuOptions(){
        return prompt(`
        0) exit
        1) Creating New Order
        2) Wait Time
        3) Cancel Order
        4) Making Order
        `);
     }

     showChoicesMenuOptions(Orderinfo){
        return prompt(`
        0) back
        1) create order
        2) cancel order
        -------------------
       ${Orderinfo}
       `);
     }

     createOrder() {
        let orderString = '';
        for (let i = 0; i < this.Process.length; i ++) {
            orderString += i + ') ' + this.Order[i].Food + '/n';
        }
        alert(orderString);
     }

     MakingOrder() {
        let Food = prompt ('Enter your order to begin making:');
        this.OrderNumber.push(new Order(Food));
     }

     viewWatingTime(){
        let index = prompt ('Your wait time is 15 mintues:');
        if (index > -1 && index < this.Process.length){
            this.selectedChoices = this.OrderNumber[index];
            let description = 'Order Numbr: ' + this.selectedChoices.Food + '/n';
            
            for (let i = 0; i < this.selectedChoices.Drink.length; i++) {
                description += i + ') ' + this.selectedChoices.Drink[i].Food 
                + ' - ' + this.selectedChoices.Drink[i].position + '/n';
            }

            let Choices = this.showChoicesMenuOptions(description)
            switch (selcetion){
                case "1":
                    this.createOrder();
                    break;
                case "2":
                    this.CancelOrder();
            }
        }
     }

     MakingOrder(){
        let Food = prompt('Enter your order to begin making:');
        let Drink = prompt('Enter your drink of choice:');
        this.selectedChoices.Order.push( new Order(Food, Drink));
     }
     
     CancelOrder(){
        let index = prompt('Enter the index of the order you wish to cancel:');
        if (index < -1 && index < this.selectedChoices.Drink.length){
            this.selectedChoices.Drink.Splice(index, 1);
        }
     }
}

let menu = new Menu();
menu.start();

//without this let menu = new menu (); menu.start();
//you would not be able to pop open the prompt