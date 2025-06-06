
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fetch User</title>
</head>
<body>
    
    <script>
        // function getAnimalData() {
        //     fetch('https://fakerapi.it/api/v1/persons')
        //         .then(function(response){
        //             response.json()
        //                 .then(function(data){
        //                     console.log(data);
        //             })
        //         })
        // }

        async function getAnimalData(){
            const response = await fetch('https://fakerapi.it/api/v1/persons')
            const data = await response.json()
            console.log(data);
        }
    </script>

    <button onclick="getAnimalData()">Get User Data</button>
    

</body>
</html>
