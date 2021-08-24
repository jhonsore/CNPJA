# API de consultas por CNPJ

1. Acesse [https://www.cnpja.com.br/](https://www.cnpja.com.br/)

2. Clique em Entrar no menu

3. Efetue o login ou registre-se

4. Após registrar-se é preciso validar o email para que a chave token seja gerada no dashboard

5. Após validar o email, ao entrar no painel, no canto esquerdo, terá uma área chamada "Chave de API".
Nessa área, terá o token a ser utilizado nas requisições a api do cnpja

6. De posse do seu token, acesse o arquivo App.tsx na pasta src/ e mude na constante `API_KEY` o valor `MY-API_KEY` para o token

7. Para rodar o app, basta, abrir o terminal e digitar `$ yarn start`

8. Digite o cnpj e clique em `Procurar`

9 - O resultado será exibido em formato `JSON` logo abaixo do formulário

