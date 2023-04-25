// This code will add a product to the cart when the "Add to Cart" button is clicked.

$(document).ready(function() {
	$("#add-to-cart").on("click", function() {
	  // Get the product ID from the hidden input field.
	  var productId = $("#product-id").val();
  
	  // Send an AJAX request to the server to add the product to the cart.
	  $.ajax({
		url: "/cart/add",
		data: {productId: productId},
		success: function(data) {
		  // If the request was successful, update the cart total.
		  if (data.success) {
			$("#cart-total").text(data.cartTotal);
		  } else {
			// If the request was not successful, show an error message.
			alert("Error adding product to cart.");
		  }
		},
		error: function() {
		  // If the request failed, show an error message.
		  alert("Error adding product to cart.");
		}
	  });
	});
  });
  