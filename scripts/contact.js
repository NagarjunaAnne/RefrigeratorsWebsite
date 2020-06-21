$(document).ready(function() {
	//focus on the date
	$("name").focus();
	
	//other setup processing can go here
	
	//validation plugin for fields
	$("#reservation_form").validate({
		//rules for each field
		
		//rules must be required and in date format
		rules: {
			name: {
				required: true
				
			},
			//email must be required and in the given range
			email: {
				required: true,
				email: true
	
			},
			//phone must be required
			phone: {
				required: true,
				phoneUS: true
			},
			//address required and in the format
			address: {
				required: true,
				
			},
			
			//city must be required 
			city: {
				required: true,
				
			},
			
			//state must be required 
			state: {
				required: true,
				
			},
			
			//zip must be required 
			zip: {
				required: true,
				rangelength: [6,7]
				
			}

		},//customise error messages
		messages: {
			phone: {	
				phoneUS: "Please specify a valid phone"
			},
			email: {	
				email: "Please specify a valid email"
			},
			zip: {	
				rangelength: "Please specify a valid zip"
			}
		//Messages for night in between 1 and 20
		}
				
			
		
	});//end validate
			
			
}); // end ready
