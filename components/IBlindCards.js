import { Image, Text, View, TouchableOpacity } from 'react-native'
import list from '../data/app-menu'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const IBlindCards = () => {
  const APPData = list;
  const navigation = useNavigation();

  return (
    <View style={{marginTop: 80, marginHorizontal: 20, marginBottom: 20}}>
      {
        APPData.map((item, id) => (
          <TouchableOpacity onPress={() => navigation.navigate("Blind", {
            image: item.image, 
            name: item.name,
            question: item.question,
            id: item.id
          })} style={{alignItems: 'center', justifyContent: "center", marginTop: 10, marginBottom: 10}} key={id}>
            <Image style={{ width: "100%", height: 120, borderRadius: 12 }} source={{uri: item.image}} />
            <Text style={{position: "absolute", color: "white", fontSize: 16, fontWeight: "bold", left: 20, top: 20}}>{item.name}</Text>
            <MaterialCommunityIcons name="lightning-bolt" size={30} color="#dfbe04" style={{position: "absolute", bottom: 15, left: 15}} />
          </TouchableOpacity>
        ))
      }
    </View>
  )
}

export default IBlindCards