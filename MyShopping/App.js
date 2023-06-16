import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MyShopping</Text>
      <Text style={styles.slogan}>monte dua lista de compra te ajudar nas compras</Text>
      <TextInput style={styles.email} placeholder="e-mail" />
      <TextInput style={styles.password} placeholder="senha" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <View style={styles.links}>
        <Text style={styles.forgotPassword}>Recuperar senha</Text>
        <Text style={styles.createAccount}>Criar minha conta</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Calibri',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#8780CF'
  },
  slogan: {
    fontFamily: 'Arial',
    fontSize: 13,
    color: '#8780CF'
  },
  email: {
    height: 50,
    width: '85%',
    color: '#D1D1D1',
    backgroundColor: '#F2F2F2',
    borderRadius: 5,
    paddingLeft: 20,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  password: {
    height: 50,
    width: '85%',
    color: '#D1D1D1',
    backgroundColor: '#F2F2F2',
    borderRadius: 5,
    paddingLeft: 20,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    height: 50,
    width: '85%',
    backgroundColor: '#33B675',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  links: {
    flexDirection: 'row',
    marginTop: 30,
  },
  forgotPassword: {
    fontWeight: 'bold',
    marginRight: 25
  },
  createAccount: {
    fontWeight: 'bold',
    marginLeft: 25
  }

});
