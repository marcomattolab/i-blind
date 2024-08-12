import { useNavigation, useRoute } from '@react-navigation/native'
import { Image, ScrollView, TouchableOpacity, View, Text, Button, ActivityIndicator } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useContext, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { FitnessItems } from '../Context';
import { GoogleGenerativeAI } from '@google/generative-ai';



const BlindScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { completed, setCompleted } = useContext(FitnessItems);


  // GEMINI
  const [inputValue, setInputValue] = useState('');
  const [promptResponses, setpromptResponses] = useState([]);
  const [loading, setLoading] = useState(false);
  const genAI = new GoogleGenerativeAI("AIzaSyC4WOa1DL4iWr1zPUy1fYJvT8Ab2f_APJ4");

  const getResponseForGivenPrompt = async () => {
    try {
      console.log("# getResponseForGivenPrompt....");
      setLoading(true)
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const questionPrompt= "As "+route.params.name + " can you "+oute.params.question;
      onsole.log("# questionPrompt = ", questionPrompt);
      const result = await model.generateContent(questionPrompt);
      setInputValue('')
      const response = result.response;
      onsole.log("# response = ", response);
      const text = response.text();
      console.log(text)
      setpromptResponses([...promptResponses,text]);
  
      setLoading(false)
    }
    catch (error) {
      console.log(error)
      console.log("# Something Went Wrong");
      setLoading(false)
    }
  };


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
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>{"As "+"item.name" + " can you "+"item.question"}</Text>
              
                </View>
              </View>          
            </TouchableOpacity>
        
        }



      </ScrollView>


      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {loading ? (
          <ActivityIndicator size="large" color="#007bff" />
        ) : (
          promptResponses.map((promptResponse, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text style={{ fontWeight: index === promptResponses.length - 1 ? 'bold' : 'normal' }}>
                {promptResponse}
              </Text>
            </View>
          ))
        )}
      </View>


      <TouchableOpacity onPress={getResponseForGivenPrompt()} 
         style={{ backgroundColor: "#198f51", padding: 12, marginHorizontal: 15, marginVertical: 20, borderRadius: 50}}>
        <Text style={{ textAlign: "center", color: "#fff", fontWeight: "bold", fontSize: 20 }}><MaterialCommunityIcons name="whistle" size={24} color="white" /> Ask Gemini!</Text>
      </TouchableOpacity>
    </>
  )
}

export default BlindScreen