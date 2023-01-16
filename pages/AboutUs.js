import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';



class AboutUs extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={require('./Assets/images/person.png')}
            style={styles.logo}
          />
          <Text style={styles.title}>About Us</Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Proin id semper velit, id malesuada velit. Fusce at porta 
            velit. Nam euismod, nisi id feugiat luctus, nibh magna 
            congue augue, vel pharetra risus augue id augue. 
          </Text>
          <Text style={styles.subtitle}>Our Team</Text>
          <View style={styles.teamContainer}>
            <View style={styles.teamMember}>
              <Image
                source={require('./Assets/images/person.png')}
                style={styles.teamMemberImage}
              />
              <Text style={styles.teamMemberName}>John Doe</Text>
              <Text style={styles.teamMemberTitle}>CEO</Text>
            </View>
            <View style={styles.teamMember}>
              <Image
                source={require('./Assets/images/person.png')}
                style={styles.teamMemberImage}
              />
              <Text style={styles.teamMemberName}>Jane Smith</Text>
              <Text style={styles.teamMemberTitle}>CFO</Text>
            </View>
          </View>
          <Text style={styles.text}>
            For more information or to contact us, please visit our website at 
            <Text style={styles.link}>www.example.com</Text>
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  container: {
    padding: 20
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  text: {
    fontSize: 16,
    marginBottom: 20
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10
  },
  teamContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  teamMember: {
    alignItems: 'center'
  },
  teamMemberImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
   
  }
}

module.exports=AboutUs;