import './Seller_post.css'
function Seller_post(){

    return(
        <>
  
  <div className="container">
    <div className="post">
      <h1>POST HERE</h1>
    </div>
    <div className="product-details">
      <h1>Product Details</h1>
      <form>
        <div className="field1">
          <label>Title:</label>
          <input type="text" id="fname" name="firstname" placeholder="" />
        </div>
        <div className="field2">
          <label htmlFor="lname">Description:</label>
          <input type="text" id="lname" name="lastname" placeholder="" />
        </div>
      </form>
      <div className="category">
        <p>Select Category: </p>
        <select>
          <option>select a category</option>
          <option>Footwear</option>
          <option>accesories</option>
          <option>clothes</option>
        </select>
      </div>
    
      <form action="/action_page.php">
        
        <input type="radio" id="sell" name="select" />
        <label>Sell</label>
        
        <input type="radio" id="give-away" name="select"/>
        <label>Give away</label>
      </form>
    </div>
    <div className="price">
      <h1>Set Price</h1>
      <span>$</span>
      <input type="value" placeholder=" " />
    </div>
    <div className="images">
      <h1>Upload Images</h1>
    </div>
    <div className="contact">
      <h1>Contact Details</h1>
      <p>Address line 1:</p>
      <input type="text" placeholder=" " />
      <p>Address line 2:</p>
      <input type="text" placeholder=" " />
    </div>
    <label className="tc">
      Accept <a href='/tc'>terms and conditions</a>
      <input type="checkbox" unchecked="unchecked" />
      <span className="checkmark" />
    </label>
    <div className="submit">
      <button>Submit</button>
    </div>
  </div>
</>


    );
}

export default Seller_post;