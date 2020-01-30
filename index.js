const express = require("express");
const app = express();

app.set("view engine", "pug");
app.get('/', function (req, res) {

    const data = JSON.parse(`{"items":[{"descripcionItem":"hola","stepsItem":["remover pintura base","comprar metariales","tomar cafe"],"materiales":[["Cemento","M2"],["Sika de sol","M2"],["hola","M2"]],"cant":[2,2,2],"valoresUnit":["50,000","15,000","5,000"],"valoresTotal":["0","0","0"]},{"descripcionItem":"","stepsItem":["Comprar materials","Remover pintura","barrer"],"materiales":[["SIKA","M2"],["IMPERMEABILIZANTE","M2"]],"cant":[2,2],"valoresUnit":["24,000","12,000"],"valoresTotal":["0","0"]}],"total":"12,612,000","subtotal":"12,612,000","serviceId":"EdfxZhes","user":{"name":"Luis Fernando Meneses","id":"1114873110","email":"luism@weareangular.com","phone":"3193291141"},"property":{"direction":"Avenida Carrera 12 # 12 - 12"},"service":{"id":"Etwx7EpMO5PltqTL3yF4PA8DnqI2","metadata":{"property":{"contact":{"phone":"1111111"},"id":"Etwx7EpMO5PltqTL3yF4PA8DnqI2","location":{"address":{"corner":"12","number":"12","street":"12","street_type":"Avenida Carrera"},"city":{"city_code":"001"},"country":{"country_code":"57"},"department":{"department_code":"76"},"space":""},"management":"","metadata":{"deck_access":true,"description":"12","number_floors":"1"},"nickname":"asda","optional":{"locale":"","office_hours":{"final":"18","start":"07"},"shopping_center":""},"property_type":100,"query":"7e2358fbaecfc4be696c1f626ee05a32","unique_key":"7e2358fbaecfc4be696c1f626ee05a32"},"user":{"location":{"city":{"city_code":"001"},"country":{"country_code":"57"},"department":{"department_code":"76"}},"provider":"001","register_data":{"contact":{"email_associated":"luism@weareangular.com","phone":"3193291141"},"name":"Luis Fernando Meneses","secrets":{"identifier":"1114873110","password":"1LuisMeneses"},"thumbnail":""},"register_type":100,"user_type":100}},"provider":"001","query":"7e2358fbaecfc4be696c1f626ee05a32","request":{"general_description":"HOLA ESTO ES UNA PREUBA","priority":0,"resources":[{"name":"hola","type":"image","url":"https://firebasestorage.googleapis.com/v0/b/justo-pago.appspot.com/o/evidence_resources%2Fb301beae-33ac-5de6-b398-8da35fa2d187.png?alt=media&token=2655f943-00ea-45fb-b5b3-14bb98b6a3c5"}],"schedule":{"date_start":"2020-01-30T05:00:00.000Z","time_start":"0","visiting_time":"0"},"selected_services":[0,3,4]},"service_provider":"VuOR5RbCq9hjYUO6nRx6kjYITfl2","state":{"service_creation_date":"","service_end_date":"","service_update_date":"","stage":0}},"currentDate":"Jueves, Enero 30, 2020"}`);


    res.render('template', data);
  });

  app.listen(3000,()=>{
      console.log("listening in 3000")
  })