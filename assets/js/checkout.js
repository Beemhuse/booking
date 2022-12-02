const paymentForm = document.getElementById('paymentForm');
paymentForm.addEventListener("submit", payWithPaystack, false);
function payWithPaystack(e) {
  e.preventDefault();

  let handler = PaystackPop.setup({
    key: 'pk_test_2143fb8e476f9d3d1d8e8ca6c01efc048776b31a', // Replace with your public key
    email: 'email@gmail.com',
    amount: 2000 * 100,
    ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    // label: "Optional string that replaces customer email"
    onClose: function(){
      alert('Window closed.');
    },
    callback: function(response){
      let message = 'Payment complete! Reference: ' + response.reference;
      $.post(
        "verify.php", 
        {reference:response.reference},
        function(status){
        if(status == "success"){
           //successful transaction
           alert('Transaction was successful');
        }else{
           //transaction failed
           alert(status);
        }
    });
      
      alert(message);
    }
  });

  handler.openIframe();
}










































// function payWithPayStack(e) {
// e.preventDefault()
//     var handler = PaystackPop.setup({ 
//         key: 'pk_test_2143fb8e476f9d3d1d8e8ca6c01efc048776b31a', //put your public key here
//         email: 'customer@email.com', //put your customer's email here
//         amount: 20000, 
//         metadata: {
//             custom_fields: [
//                 {
//                     display_name: "Mobile Number",
//                     variable_name: "mobile_number",
//                     value: "+2348012345678" //customer's mobile number
//                 }
//             ]
//         },
//         onClose: function(){
//             alert('Window closed.');
//           },
//           callback: function(response){
//             let message = 'Payment complete! Reference: ' + response.reference;
//             alert(message);
//           }
        
//         });
//     handler.openIframe(); //open the paystack's payment modal
// }