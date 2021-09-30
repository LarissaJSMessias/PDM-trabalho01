import React, { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import ResultadoConsumo from '../ResultadoEscolha/resultado';

export default function Formulario() {
  
  const [valorgas, setValorgas] = useState(null);
  const [consumogas, setConsumogas] = useState(null);
  const [msg, setMsg] = useState("Preencha com os valores pedidos");
  const [valoralc, setValoralc] = useState(null);
  const [consumoalc, setConsumoalc] = useState(null);
  const [melhorconsumo, setMelhorconsumo] = useState(null);
  const [textoBotao, setTextoBotao] = useState("Calcular o melhor combustível");
  
  function calculaConsumo(){

        var gas = valorgas/consumogas;
        var alc = valoralc/consumoalc;

        if(gas>alc){
            return setMelhorconsumo("Álcool");
          }
        else{
            return setMelhorconsumo("Gasolina");
            }
}

    function validaConsumo(){
        if(valorgas != null && consumogas != null && valoralc != null && consumoalc != null){
            calculaConsumo();
            setMsg("O melhor combustível é: ");
            setTextoBotao("calcular novamente");
            setValorgas(null)
            setConsumogas(null)
            setValoralc(null)
            setConsumoalc(null)
            return
        }

        setMelhorconsumo(null);
        setTextoBotao("Calcular");
        setMsg("Preencha com os valores pedidos");
        
    }


    return (
    <View>
      <View>
        <Text>Valor da gasolina:</Text>
        <TextInput 
          onChangeText={setValorgas}
          value={valorgas}
        placeholder="Ex: 5.18"
        keyboardType="numeric"
        />
        <Text>Consumo da gasolina:</Text>
        <TextInput 
         onChangeText={setConsumogas}
         value={consumogas}
        placeholder="Ex: 8.25"
        keyboardType="numeric"
        />
        <Text>Valor do álcool:</Text>
        <TextInput 
          onChangeText={setValoralc}
          value={valoralc}
        placeholder="Ex: 4.50"
        keyboardType="numeric"
        />
        <Text>Consumo de álcool:</Text>
        <TextInput 
         onChangeText={setConsumoalc}
         value={consumoalc}
        placeholder="Ex: 6.20"
        keyboardType="numeric"
        />
        <Button 
        title={textoBotao}
        onPress={validaConsumo}
        />
      </View>
    <ResultadoConsumo
        mensagem={msg} 
        resultado={melhorconsumo}
    />
     </View>
  );
}