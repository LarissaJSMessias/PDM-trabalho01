import React from 'react';
import { Text, View } from 'react-native';

export default function ResultadoConsumo(props) {
  return (
    <View>
        <Text/>
        <Text>{props.mensagem}</Text>
        <Text>{props.resultado}</Text>
        
     
     </View>
  );
}
