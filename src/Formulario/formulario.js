import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import ResultadoConsumo from '../ResultadoEscolha/resultado';
import styles from './style';

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
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Valor da gasolina:</Text>
        <TextInput 
          tyle={styles.input}
          onChangeText={setValorgas}
          value={valorgas}
        placeholder="Ex: 5.18"
        keyboardType="numeric"
        />
        <Text tyle={styles.formLabel}>Consumo da gasolina:</Text>
        <TextInput 
        tyle={styles.input}
         onChangeText={setConsumogas}
         value={consumogas}
        placeholder="Ex: 8.25"
        keyboardType="numeric"
        />
        <Text tyle={styles.formLabel}>Valor do álcool:</Text>
        <TextInput 
        tyle={styles.input}
          onChangeText={setValoralc}
          value={valoralc}
        placeholder="Ex: 4.50"
        keyboardType="numeric"
        />
        <Text tyle={styles.formLabel}>Consumo de álcool:</Text>
        <TextInput 
        tyle={styles.input}
         onChangeText={setConsumoalc}
         value={consumoalc}
        placeholder="Ex: 6.20"
        keyboardType="numeric"
        />
        <TouchableOpacity 
        style={styles.buttonCalculator}
        title={textoBotao}
        onPress={validaConsumo}
      >
        <Text style={styles.buttonCalculator}> {textoBotao}</Text>
      </TouchableOpacity>
       
      
      </View>
    <ResultadoConsumo
        mensagem={msg} 
        resultado={melhorconsumo}
    />
     </View>
  );
}