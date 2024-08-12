import { useNavigation, useRoute } from '@react-navigation/native'
import { Image, ScrollView, TouchableOpacity, View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useContext } from 'react';
import { AppItems } from '../Context';

const BlindScreen = () => {
  const route = useRoute();
  const name = route.params.name;
  const question = route.params.question;
  const description = route.params.description;
  const navigation = useNavigation();
  const { completed, setCompleted } = useContext(AppItems);

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "white", marginTop: 20 }}
      >
        <Image
          style={{ width: "100%", height: 200, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, marginBottom: 20 }}
          source={{ uri: route.params.image }}
        />

        <Ionicons
          onPress={() => navigation.goBack()}
          style={{ position: 'absolute', top: 30, left: 20, backgroundColor: "white", borderRadius: 8, padding: 3 }}
          name="arrow-back-outline"
          size={24}
          color="black"
        />

        {
            <TouchableOpacity style={{ marginVertical: 12, marginHorizontal: 18, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <View style={{ flexDirection: "row", alignItems: "center", }}>
                
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>{name}</Text>
                  <Text style={{ marginTop: 15, fontSize: 15 }}>{question}</Text>
                  <Text style={{ marginTop: 15, fontSize: 14, color: "gray" }}>{description}</Text>
                </View>
              </View>          
            </TouchableOpacity>
        
        }

      </ScrollView>



      <TouchableOpacity 
         style={{ backgroundColor: "#198f51", padding: 12, marginHorizontal: 15, marginVertical: 20, borderRadius: 50}}>
        <Text style={{ textAlign: "center", color: "#fff", fontWeight: "bold", fontSize: 20 }}><MaterialCommunityIcons name="whistle" size={24} color="white" /> Ask Gemini!</Text>
      </TouchableOpacity>
    </>
  )
}

export default BlindScreen