class AtracaoRequests {
    
    constructor() {
        this.serverUrl = 'http://localhost:3000';
        this.routeListarAtracao = '/atracoes';
        this.routeCadastrarAtracao = '/novo/atracao';
        this.routeDeletarAtracao = '/remover/atracao';
        this.routeAlterarAtracao = '/atualizar/atracao';
    }
}

export default new AtracaoRequests