
type User = {
    name: string;
    age: string;
    address: {
        city : string;
        uf: string;
    }
}

function showUserInfo(user: User) {
    return  `Welcome, ${user.name} - ${user.age}.
    Cidade: ${user.address.city}`;
}

//showUserInfo('Fernanda')
//Adicionar cidade, estado usuário nessa mensagem