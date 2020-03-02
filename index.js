const express = require("express");
const app = express();

app.set("view engine", "pug");
app.get('/', function (req, res) {

    const data = {
        "workforceTotal": "230,000",
        "items": [
            {
                "descripcionItem": "Ocurrio  un problema en la Breakera,\n",
                "stepsItem": [
                    "Cambiar los breakers que creo que están quemados.",
                    "Probar funcionamiento de breakers que se instalaron.",
                    "Ubicar breakera que no esta por ningún lado."
                ],
                "materiales": [
                    [
                        "Breaker.",
                        "UNIDAD/ES"
                    ]
                ],
                "cant": [
                    2
                ],
                "valoresUnit": [
                    "20,000"
                ],
                "valoresTotal": [
                    "40,000"
                ],
                "resources": [
                    "https://firebasestorage.googleapis.com/v0/b/justo-pago.appspot.com/o/evidence_resources%2Fa73c4697-3d2f-5daa-96c0-830f48aaca17.png?alt=media&token=241ddf4b-0cd8-484c-b8ea-25fabb4091a5",
                    "https://www.lemara.es/wp-content/uploads/2019/02/humedad-techo.jpg",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsGfVVkvEHMPs4ijgeHpPIdQ3fUYt9Z4jwZVD7d3Ses4xcx-6I",
                    "https://www.arquitecturasimple.com/wp-content/uploads/2018/03/C-1024x768.jpg",
                    "https://grupoparisien.com/wp-content/uploads/2019/01/humedad_paredes.jpg"
                ]
            }
        ],
        "total": "309,989.9",
        "ivaProcent": 19,
        "ivaByAiuTotal": "8,589.9",
        "aiuTotal": "45,210",
        "subtotal": "274,000",
        "serviceId": "3gwY8pZf",
        "discountTotal": "0",
        "user": {
            "name": "Usuario desarrollo JP",
            "id": "000000000",
            "email": "particular.jp@gmail.com",
            "phone": "0000000000"
        },
        "property": {
            "direction": "Carrera 100 # 120 - 21"
        },
        "service": {
            "id": "d4vHHvu13hhVYvQ9jCxrcplp70x2",
            "metadata": {
                "property": {
                    "contact": {
                        "phone": "0000000000"
                    },
                    "id": "d4vHHvu13hhVYvQ9jCxrcplp70x2",
                    "location": {
                        "address": {
                            "corner": "21",
                            "number": "120",
                            "street": "100",
                            "street_type": "Carrera"
                        },
                        "city": {
                            "city_code": "001"
                        },
                        "country": {
                            "country_code": "57"
                        },
                        "department": {
                            "department_code": "76"
                        },
                        "space": ""
                    },
                    "management": "e53bce6d7c202bd219a1febc2f8cf3dd",
                    "metadata": {
                        "deck_access": false,
                        "description": "Angular Diseño más Interacción",
                        "number_floors": "1"
                    },
                    "nickname": "Inmueble de desarrollo JP",
                    "optional": {
                        "locale": "",
                        "office_hours": {
                            "final": "06:00 PM",
                            "start": "08:00 AM"
                        },
                        "shopping_center": ""
                    },
                    "property_type": 100,
                    "query": "751c22a519fc9f58db57550f7bb92a8d",
                    "unique_key": "751c22a519fc9f58db57550f7bb92a8d"
                },
                "user": {
                    "location": {
                        "city": {
                            "city_code": "001"
                        },
                        "country": {
                            "country_code": "57"
                        },
                        "department": {
                            "department_code": "76"
                        }
                    },
                    "provider": "001",
                    "register_data": {
                        "contact": {
                            "email_associated": "particular.jp@gmail.com",
                            "phone": "0000000000"
                        },
                        "name": "Usuario desarrollo JP",
                        "secrets": {
                            "identifier": "000000000",
                            "password": "2020JustoPago",
                            "type_identifier": "NIT"
                        },
                        "thumbnail": "https://firebasestorage.googleapis.com/v0/b/justo-pago.appspot.com/o/thumbnails%2Fac6c7e4d-040e-50e9-a54d-318cceb4a814.png?alt=media&token=9e8d647c-19dd-41b9-b527-202fede170e5"
                    },
                    "register_type": 100,
                    "user_type": 100
                }
            },
            "provider": "001",
            "query": "751c22a519fc9f58db57550f7bb92a8d",
            "request": {
                "general_description": "La mitad de la casa no tiene electricidad, cayo una tormenta y se daño. por favor necesito resolver eso rápido. ",
                "priority": 0,
                "resources": [
                    {
                        "name": "1541415581_512991_1541437245_noticia_normal",
                        "type": "image",
                        "url": "https://firebasestorage.googleapis.com/v0/b/justo-pago.appspot.com/o/evidence_resources%2F784194df-a0de-500c-b0fe-218f3287bc45.png?alt=media&token=5bf61092-2e7a-4498-bb8d-09c090bdbca7"
                    }
                ],
                "schedule": {
                    "date_start": "2020-03-08T05:00:00.000Z",
                    "time_start": "08:00 AM - 06:00 PM",
                    "visiting_time": "2020-02-27T05:00:00.000Z"
                },
                "selected_services": [
                    1
                ]
            },
            "service_provider": "mPKnsUM5VdMvNqU7oST3Mf4KPg53",
            "state": {
                "active_warranty": false,
                "service_creation_date": 1582820160674,
                "service_end_date": "",
                "service_update_date": "",
                "stage": 1,
                "warranty_date": "1 mes"
            }
        },
        "currentDate": "Lunes, Marzo 2, 2020"
    }

    res.render('template', data);
  });

  app.listen(3000,()=>{
      console.log("listening in 3000")
  })