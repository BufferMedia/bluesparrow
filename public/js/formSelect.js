
      $(document).ready(function(){         
         var BlueSparrow = [
	       {display: "Admin", value: "admin" }, 
	       {display: "Reviewer", value: "reviewer" }, 
	       {display: "Publisher", value: "publisher" },
	       {display: "Content Provider", value: "content-owner" }];
	
       var PlayCode = [
	      {display: "Publisher", value: "publisher" },
	       {display: "Content Provider", value: "content-owner" }];
	
       var AudeBook = [
	     {display: "Publisher", value: "publisher" },
	     {display: "Content Provider", value: "content-owner" }];

       var BoxAfrica = [
	     {display: "Publisher", value: "publisher" },
	     {display: "Content Provider", value: "content-owner" }];
		 
	   var Muzik365 = [
	     {display: "Publisher", value: "publisher" },
	     {display: "Content Provider", value: "content-owner" }];

		 
		 
		      $("#parent_selection").change(function() {
		       var parent = $(this).val(); //get option value from parent 
		
		   switch(parent){ //using switch compare selected option and populate child
			  case 'BlueSparrow':
			 	list(BlueSparrow);
				break;
			  case 'PlayCode':
			 	list(PlayCode);
				break;				
			  case 'AudeBook':
			 	list(AudeBook);
				 break;
		      case 'BoxAfrica':
			 	list(BoxAfrica);
				break;
			 case 'Muzik365':
			 	list(Muzik365);
				break;
			default: //default child option is blank
				$("#child_selection").html('');	 
				break;
		 		 }
				 
     });
	 
	 $(function (){
	   $('#colorselector').change(function(myFunction){
		  $('#.colors').hide();
           $('#' + $(this).val()).show();
	 });
	}); 
	 

   //function to populate child select box
   function list(array_list)
{
	$("#child_selection").html(""); //reset child options
	$(array_list).each(function (i) { //populate child options 
		$("#child_selection").append("<option value=\""+array_list[i].value+"\">"+array_list[i].display+"</option>");
	});
}

 });		 