export default function CardPessoas({ nome, email, idade}) {
    const nomeExibido = nome ? nome : "Nome não informado";
    const emailExibido = email ? email : "Email não informado";
    const idadeExibida = idade ? `${idade} anos de idade` : "Idade não informada";
    return (
        <div className="card">
            <h2>Nome: {nomeExibido}</h2>
            <p>Email: {emailExibido}</p>
            <p>Idade: {idadeExibida}</p>
            <hr />
            <button onClick={() => alert(`Contacting ${nomeExibido}`)}>Contact</button>
        </div>
    )
}