//note: Switch statement - An alternative for adding multiple complex if statements

//note: Switch statement looks neat and cleaner than if else statement.

const switchDemo = 'monay';

switch (switchDemo){
    case 'monday':
    case 'tuesday':
        console.log('Today is monday and tuesday');
        break;
    case 'wednesday':
        console.log('Today is wednesday');
        break;
    default:
        console.log('Please enter a valid day');
        break;
}