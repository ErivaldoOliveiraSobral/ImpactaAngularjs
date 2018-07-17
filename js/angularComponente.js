angular.module('moduloAngular',[])
.controller('mainController',[function(){
    me = this;    
    me.cursos = {
        curso1: 'AngularJS',
        curso2: 'Impacta bugs'
    };
    me.mensagem = me.cursos.curso1;
    me.alterarCurso = function(){
        if (me.mensagem == me.cursos.curso1) {
            me.mensagem = me.cursos.curso2;
        } else if (me.mensagem == me.cursos.curso2){
            me.mensagem = me.cursos.curso1;
        } else {
            me.mensagem = "";
        }
    };
    me.alunosArray = ['Erivaldo','Felipe','Guilherme','Grabrielly'];
    me.alunosObj = {
        aluno1: {nome:me.alunosArray[0],linguagem:'AngularJS',status:'Aprovado'},
        aluno2: {nome:me.alunosArray[1],linguagem:'ReactJS',status:'Aprovado'},
        aluno3: {nome:me.alunosArray[2],linguagem:'Java',status:'Reprovado'},
        aluno4: {nome:me.alunosArray[3],linguagem:'BI'}
    };
    me.verificaStatus = function(status){
        return {
            aprovado: status != null,
            aprovado: status == 'Aprovado',
            reprovado: status != 'Aprovado',
        }
    };
    me.mudaDisplay = function(){
        document.querySelector('#btn').setAttribute("disabled","");
    };
    me.verMsg = function(msg){
        if (msg == '') {
            document.querySelector('#btnMensagem').setAttribute("style","display:none");
        }
    };
    me.esconder = function(id){
        document.querySelector('#nome' + id).setAttribute("style","display:none");
    };
}])