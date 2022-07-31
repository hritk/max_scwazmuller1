import "./ExpenseItem.css";

function ExpenseItem(){
    return( 
    <div className="expense-item">
        <div>march 28</div> 
        <div className="expense-item__description">
        <h2> car insurance</h2>
        <div className="expense-item__price"> $22234</div>
        </div>
    
      
    </div>


    );
};

export default ExpenseItem;