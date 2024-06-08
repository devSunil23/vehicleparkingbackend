1. save vehicle information -post api

https://9d46-2401-4900-51ec-4e63-b8a8-d38c-eaad-eaf1.ngrok-free.app/vehicleinformation/save

body:-

{
"ownerName":"Ajay",
"registrationNumber":"MP 66 1646"
}

response:-
{
"message": "Vehicle information saved successfully",
"vehicle": {
"ownerName": "Ajay",
"registrationNumber": "MP 66 1646",
"\_id": "666487482478663cc3f484b3",
"createdAt": "2024-06-08T16:31:04.727Z",
"updatedAt": "2024-06-08T16:31:04.727Z",
"\_\_v": 0
}
}

2. entry vehicle api-post api

https://9d46-2401-4900-51ec-4e63-b8a8-d38c-eaad-eaf1.ngrok-free.app/vehicle/entry

body:-
{
"vehicleId":"666487482478663cc3f484b3"
}

response:-
{
"message": "Vehicle parked successfully",
"entryTime": "2024-06-08T16:37:55.189Z",
"parkingId": "666488e32478663cc3f484b7"
}

3. exit vehicle api-put api

https://9d46-2401-4900-51ec-4e63-b8a8-d38c-eaad-eaf1.ngrok-free.app/vehicle/exit

body:-
{
"parkingId":"666488e32478663cc3f484b7"
}
response:-
{
"message": "Vehicle exited successfully",
"exitTime": "2024-06-08T16:41:41.051Z"
}

4. get entry and exit details api- get api

https://9d46-2401-4900-51ec-4e63-b8a8-d38c-eaad-eaf1.ngrok-free.app/vehicle/entryexitget/1/10

response:
[
{
"vehicleId": "6664565f98d17de2aaccebce",
"entryTime": "2024-06-08T13:27:24.914Z",
"exitTime": "2024-06-08T13:34:36.673Z",
"ownerName": "Sunil Kumar Bais",
"registrationNumber": "Up 61k 6737"
},
{
"vehicleId": "666457c6bf3810783983b458",
"entryTime": "2024-06-08T13:38:31.518Z",
"exitTime": "2024-06-08T13:38:47.708Z",
"ownerName": "rajesh Kumar Bais",
"registrationNumber": "Up 64k 6957"
},
{
"vehicleId": "666457c6bf3810783983b458",
"entryTime": "2024-06-08T13:42:33.426Z",
"exitTime": "2024-06-08T13:42:49.064Z",
"ownerName": "rajesh Kumar Bais",
"registrationNumber": "Up 64k 6957"
}
]

1 is page no.
10 is one page result show

5.parking lot save api
https://9d46-2401-4900-51ec-4e63-b8a8-d38c-eaad-eaf1.ngrok-free.app/parkinglot/save

body:-

{
"totalParkingSpaces":10,
"numberOfParkedVehicles":0
}

response:-

{
"message": "Parking lot saved successfully",
"data": {
"totalParkingSpaces": 10,
"numberOfParkedVehicles": 0,
"\_id": "66648b7e2478663cc3f484be",
"\_\_v": 0
}
}
