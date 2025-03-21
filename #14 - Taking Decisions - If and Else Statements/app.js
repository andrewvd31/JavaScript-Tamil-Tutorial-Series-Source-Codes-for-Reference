const age = 15

if (age >= 18){
    console.log('Yes. You can start driving a car');
}

else{
    const years = 18 - age;
    console.log(`No. You cannot drive a car. There are still ${years} years left for that`);
}