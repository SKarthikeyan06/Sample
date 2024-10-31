function vamp(){
document.getElementById('but').addEventListener('click', function() {
    const fileUrl = 'Name List.xlsx';
    let name1=document.getElementsByClassName("name");
    let result=name1[0].value;
    let pass1=document.getElementsByClassName("password");
    let result1=pass1[0].value;
    const errorMessage = document.getElementById("errorMessage");
    fetch(fileUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.arrayBuffer();
        })
        .then(data => {
            const workbook = XLSX.read(data, { type: 'array' });
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName]; 
            const jsonData = XLSX.utils.sheet_to_json(worksheet);
            jsonData.forEach(element => {
                if (result==element.Regno)
                {
                    let password=(element.DOB).replace(/\./g,"/");
                    if(result1==password){
                        errorMessage.textContent = "";
                        localStorage.setItem('myValue', element.Name);
                        window.location.href="Login.html";}
                    else
                        errorMessage.textContent = "Incorrect Username or Password";
                }
                else
                    errorMessage.textContent = "Incorrect Username or Password";
            });
        })
        .catch(error => {
            console.error('Error loading the file:', error);
            document.getElementById('output').textContent = 'Error loading file: ' + error.message;
        });
});
}