// Função para permitir somenete caracteres numéricos
function SomenteCaracteresNumericos(Controle) {

    var texto = Controle.value;
    var textoSeparado = texto.split('');
    var numeros = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
    for (var i = 0; i < textoSeparado.length; i++) {
        var teclaValida = false;
        for (var j = 0; j < numeros.length; j++) {
            if (numeros[j] == textoSeparado[i]) {
                teclaValida = true;
            }
        }
        if (!teclaValida)
            textoSeparado[i] = '';
    }

    Controle.value = textoSeparado.join('');
}

// Função chamada no campo de pesquisa
function Pesquisar() {
	alert('Produto n\u00e3o encontrado !');
}

$('select').selectize({
			sortField: 'text',
            onInitialize: function() {
                this.trigger('change', this.getValue(), true);
            },
            onChange: function(value, isOnInitialize) {
                if(value !== ''){
                   window.location.href = 'cardapio.html?Pesquisar=' + value;
                }
            }
        });


