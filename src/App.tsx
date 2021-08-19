import { useState } from 'react';
import { FormEvent, ChangeEvent } from 'react';
import './App.css';

type IFormData = {
  cnpj:string;
}

const URL_CNAE:string = 'https://api.cnpja.com.br';
/**
 * Chave de api gerada ao se cadastrar no site https://www.cnpja.com.br
 * Para que ela seja criada é necessário que valide o email antes de gerar a chave
 */
const API_KEY:string = 'MY-API_KEY';

function App() {
  const [formData, setData] = useState<IFormData>({ cnpj: '' } as IFormData);
  const [response, setResponse] = useState('');

  function cleanCNPJ(cnpj:string){
    return cnpj.replace(/\D/g, '');
  }

  function getURLByCNPJ(cnpj:string){
    return `${URL_CNAE}/companies/${cnpj}`;
  }

  async function onSubmitHandler(e:FormEvent<HTMLFormElement>){
    e.preventDefault();

    //--------
    const cnpj:string = cleanCNPJ(formData.cnpj);
    const url:string = getURLByCNPJ(cnpj);

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': API_KEY
      },
    });

    const data:any = await response.json();
    setResponse(data);

    if (data.error) {
      alert(data.message)
    }
    //--------
    
  }

  function inputHandler(e:ChangeEvent<HTMLInputElement>){
    const {name, value} = e.currentTarget;
    setData(()=> ({...formData, [name]: value}));
  }

  return (
    <div className="App">
      <form onSubmit={onSubmitHandler}>
        <fieldset style={{border: 'none'}}>
          <label htmlFor="cnpj">CNPJ</label>
          <input value={formData.cnpj} name="cnpj" onChange={inputHandler} type="text" id="cnpj" />
        </fieldset>
        <button>Procurar</button>
      </form>
      <div>
        {response && <pre>{JSON.stringify(response, null, 2) }</pre>}
      </div>
    </div>
  );
}

export default App;
