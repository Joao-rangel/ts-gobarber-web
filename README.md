#  TS-Gobarber-Web

Frontend da aplicação GoBarber criada utilizando React.Js com Typescript durante o bootcamp da rocketseat.
A aplicação gerencia um serviço de agendamentos de cortes de cabelo, conectando prestadores de serviço e clientes.
A interface web foi pensada para prestadores de serviço (barbearias), permitindo a vizualização dos agendamentos.
Já os clientes, deveriam usar a aplicação [mobile](https://github.com/Joao-rangel/ts-gobarber-mobile) para os agendamentos.


###  Alterações em relação ao projeto inicial do curso

* Interface para clientes usarem a aplicação na versão web (e não apenas na versão mobile) com a criação de:
  * Página de listagem de Barbearias;
  * Página de agendamento de horário;
  
* Criação de avatar padrão para usuários sem imagem de perfil;

* Responsibidade das páginas com algumas refatorações para telas pequenas (celular);

* Implementação de calendário em modal para melhor visualização em telas menores;

* Identificação de clinte e prestador no momento do cadastro;

### Aplicação Web

* Acesse a aplicação: [Gobarber-web](https://ts-gobarber-web.vercel.app/)

<a href="https://ts-gobarber-web.vercel.app/">
  <img src="readme/ezgif.com-gif-maker.gif">
</a>

### Configurações

1.  Clone o projeto e acesse a pasta:
```
    $ git clone https://github.com/Joao-rangel/ts-gobarber-backend.git && cd ts-gobarber-backend
```
2.  Rode o yarn para instalar as bibliotecas:
```
    $ yarn
```
3.  Copie o conteúdo das variáveis de ambiente e altere seus valores (opcional):
```
    $ cp .env.example .env
```
4.  Inicie o projeto:
```
    $ yarn start
```
5.  Para total funcionamento, o backend da aplicação também deve ser iniciado:

* [GitHub - Gobarber Backend](https://github.com/Joao-rangel/ts-gobarber-backend)

### Sugestões para novas funcionalidades:

* Criar interface de avisos (com mensagens para prestador e para cliente);

* Interface de próximo agendamento para clientes (já existe para prestador);

* Opção de cancelar agendamento (para clientes e para prestadores);
