const serviceTypeArray = [
    {text:'Regular Cleaning', value:1, pricePerSqFt:1},
    {text:'Power Cleaning',value:2, pricePerSqFt:2}, 
    {text:'Pet Oder Removing', value:3, pricePerSqFt:3}];
const serviceTypeDropDown = document.getElementById('serviceType');
const fullName= document.getElementById('fullName');
const sqft = document.getElementById('sqft');
const urgent = document.getElementById('urgent');
function calcPageLoad()
{
    for (let service of serviceTypeArray)
    {
        let option = document.createElement('option');
        option.value = service.value;
        option.text = service.text;
        serviceTypeDropDown.appendChild(option);
    }
}

function calculatePrice()
{
    if (fullName.value == '')
    {
        $("#fullNameError").html("Please enter your name");
        return;
    }
    if (sqft.value == '')
    {
        console.log("sqft is empty");
        $("#sqftError").html("Please enter square footage");
        return;
    }
    let price = parseInt(sqft.value) * serviceTypeArray[serviceTypeDropDown.value - 1].pricePerSqFt;
    if (urgent.checked)
    {
        price +=50;
    }
    console.log(price);
    $("#result").css("display", "block");
    $("#quoteResult").html(price);
}
