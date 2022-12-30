### Day6

1. API
2. XML-HTTP request
3. Rest countries simple access

4. API -> Application programming interface
   i) It is like a link which is used to get the data from
   the server
   ii) Server have the copy of the data that is collected from the
   database in the url format
   iii) client give request to server and get the copy of the data
   from the server
   iv) In this above process Api is like a mediator

5. To Extract the data from Api we can use Xml-Http request
   It follows of four steps:

step 1 -> create a xhr object:
var request = new xmlhttprequest();

step 2 -> opening a connection:
request.open();
There are two parameters:

1. "Http Method" 2. Api url

1. Http method -> Inbuild methods of four steps
   i) C -> create -> POST
   ii) R -> read -> GET
   iii) U -> update -> PUT
   iv) D -> delete -> DELETE

1. Api url -> (" url likl");

step 3 -> sending the connections:
request.send();

step 4 -> After date successfully loaded then
request.onload = function(){}

3. Rest countries examples
