function validation()
         {
              var name = document.getElementById('user').value;
              var email = document.getElementById('email').value;
              var age = document.getElementById('age').value;
              var phone= document.getElementById('phone').value;
              var gender = document.getElementById('gender').value;

              if(name =="")
                    {
                       document.getElementById('name').innerHTML ="*Please fill the name field*";
                       return false;
                    }

                   if((name.length <=2) || (name.length > 20))
                      {
                         document.getElementById('name').innerHTML ="*name length must be between 2 to 20*";
                          return false;
                      }
                   if(!isNaN(name))
                     {
                        document.getElementById('name').innerHTML ="*Only Characters are allowed*";
                        return false;
                     }


                     if(phone =="")
                    {
                       document.getElementById('phone').innerHTML ="*Please fill the Mobile Number field*";
                  return false;

                   }
                   if(isNaN(phone))
                   {
                      document.getElementById('phone').innerHTML ="*User must write digits only no charaters*";
                  return false;
                   }
                   if(phone.length!=10)
                    {
                       document.getElementById('phone').innerHTML ="*User should write only 10 digits*";
                  return false;
                   }
                   else if(email =="")
                   {
                      document.getElementById('email').innerHTML ="*Please fill the Email ID field*";
                 return false;
                  }
                  else if(email.indexOf('@')<= 0)
                  {                
                     document.getElementById('email').innerHTML ="*@ at invalid position*";
                 return false;
                  }
                  else if((email.charAt(emails.length-4)!='.')&&  (emails.charAt(emails.length-3)!='.'))
                  {
                      document.getElementById('email').innerHTML ="* '.' at invalid position *";
                 return false;
                  }
         }
