import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';

export default function ResultadoConsumo(props) {
  return (
    <View style={styles.resultado}>
        
        <Text style={styles.textresultado}>
        {props.mensagem}</Text>
        <Text style={styles.textMensagem}>
        {props.resultado}</Text>
        
     
     </View>
  );
}
