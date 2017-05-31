
class Joquery {

  static ajax(obj) {
    const lista = [
      {
        nome: 'Jonathan Santos',
        email: 'teste@gmail.com',
        senha: '1209830jsiadoOPUDpIOAsd',
      },
      {
        nome: 'Muriel Eustacio',
        email: 'coragem@caocovarde.com',
        senha: 'AimeuCoraçaum',
      },
    ];

    obj.sucess(lista);
  }

}

export default (function joQuery() { return new Joquery(); }());
